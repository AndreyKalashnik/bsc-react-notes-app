import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import reducer from "../reducers";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, logger]

export default createStore(reducer, applyMiddleware(...middlewares));

sagaMiddleware.run(sagas);
