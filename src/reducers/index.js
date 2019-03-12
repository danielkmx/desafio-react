import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import talentsReducer from './talentsReducer';
import selectedTalentReducer from './selectedTalentReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    selectedTalent: selectedTalentReducer,
    talents: talentsReducer
});