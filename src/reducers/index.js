import { combineReducers } from 'redux'
import jadwalkegiatan from './jadwalkegiatan'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    jadwalkegiatan,
    form: formReducer
})