import { combineReducers } from 'redux';

//REDUCERS
import labs from './labs';
import materials from './materials';
import reports from './reports';
import subjects from './subjects';
import groups from './groups';
import names from './names';
import login from './login';
import registration from './register';
import alerts from './alerts';

export default combineReducers({
    login,
    labs,
    materials,
    reports,
    subjects,
    groups,
    names,
    registration,
    alerts
});