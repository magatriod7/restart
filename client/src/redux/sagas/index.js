import { all } from "redux-saga/effects";

export default function* rootSaga() {
  yield all([]);
}
//배열 안에 saga에 관한 값들을 넣게 되는데 이 함수들을 통해 필요할 때마다 그 값들을 불러 올 수 있다.