import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
  });

export default createRootReducer;
// 커넥트라우터(라우터)를 리두서에서 라우터를 불러올 때는 커넥트라우터를 라우터라 해도 계속 불러올 수 있다.