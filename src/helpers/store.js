import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from "redux-saga";

import { watchFetchSubjects, watchFetchLabs, watchFetchMaterials, watchFetchGroups, watchFetchNames } from '../sagas/index';
import { watchRegister, watchLogin } from '../sagas/user';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));

sagaMiddleware.run(watchFetchSubjects);
sagaMiddleware.run(watchFetchLabs);
sagaMiddleware.run(watchFetchMaterials);
sagaMiddleware.run(watchFetchGroups);
sagaMiddleware.run(watchFetchNames);
sagaMiddleware.run(watchRegister);
sagaMiddleware.run(watchLogin);

export default store;