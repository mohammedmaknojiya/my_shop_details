import * as actionType from './ActionType'

/** main object holding data
 * @param edit_data_id: id of object which we want to update
 * @data list of whole data 
 */
const main_list = {
    edit_data_id: 1,
    list_of_data : [
        {
            id:1,
            fname:'mohammed',
            lname: 'maknojiya',
            no_of_purchase: 2,
            amount: 1200
        },
        {
            id:2,
            fname:'mmra',
            lname: 'maknojiya',
            no_of_purchase: 3,
            amount: 1000
        }
    ] 
}

/** 
 * @function delUpdReducer reducer for performing state updation based on action type
 * @param state: main_list 
 * @param action: holds action type and payload
 */
const delUpdReducer = (state =main_list , action) =>{
    switch(action.type){

        case actionType.DELETE_DATA:
            const newList=state.list_of_data.filter( (obj) =>{
                return obj.id !== action.payload
            } )
            return {...state, list_of_data:newList}
        
        case actionType.UPDATE_DATA:
            const user = [action.payload.userDetails]
            const updatedList=state.list_of_data.map(obj => user.find(obj2 => obj2.id === obj.id) || obj);
            return {...state, list_of_data: updatedList}

        case actionType.EDIT_DATA:
            const current_id = action.payload
            return {...state, edit_data_id: current_id}
        
        default : return state
    }
}

export default delUpdReducer;