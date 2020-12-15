import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

import createRootReducer from "./redux/reducers/index";
import rootSaga from "./redux/sagas";

export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = {};

const middlewares = [sagaMiddleware, routerMiddleware(history)];//미들웨어 추가시 이곳에 추가 해주면 된다.
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;//개발 도구

const composeEnhancer =
  process.env.NODE_ENV === "production" ? compose : devtools || compose;
//배포단계에서는 개발자 단계를 안보이게 하는 것.
const store = createStore(//스토어를 만들어 주세요 아래 3개를 합쳐서
  createRootReducer(history),
  initialState,//웹의 모든 상태를 담는 초기값 초기상태는 비어 있다.
  composeEnhancer(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);//사가스 폴더 안의 rootSaga 실행.

export default store;

//모든 상태값을 한 곳에 저장한 후 상태값을 사용할 수 있도록 정리해주는 것.