import {combineReducers} from 'redux'
import defaultState from './state'
import {SET_PAGE_TITLE,SET_INFO_LIST} from './actions'


// function pageTitle ( state = defaultState.pageTitle, action: { type: any; data: any }){
//     switch (action.type) {
//         case SET_PAGE_TITLE:
//             return action.data
//         default:
//             return state
//     }
// }

const infoList = ()=>{
    return [{
        id: 1,
        name: 'lisi'
    }]
}

export default combineReducers({
    infoList
})