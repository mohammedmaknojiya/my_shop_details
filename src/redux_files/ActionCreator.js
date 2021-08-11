import { UPDATE_DATA } from "./ActionType";
import { EDIT_DATA } from "./ActionType";
import { DELETE_DATA } from  "./ActionType";


/** 
 * @function updateData reducer for updating data
 * @param details : one of the objects which capture user update input and update it in the main list
 */
export const updateData = ( details ) =>{
    //console.log(details)
    return {
        type : UPDATE_DATA,
        payload: details
    }
}

/** 
 * @function editData reducer for fetching data to edit section
 * @param currentId as a payload 
 */
export const editData = (currentId) =>{
    return {
        type : EDIT_DATA,
        payload: currentId
    }
}

/** 
 * @function deleteData reducer for deleting particular record
 * @param currentId for deleting that particular item
 */
export const deleteData = (currentId) =>{
    return {
        type : DELETE_DATA,
        payload: currentId
    }
}