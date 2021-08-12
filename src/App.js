import React, { useState } from 'react';
import './App.css';
import Layout from './Components/Layout';

/** main object holding data
 * @param edit_data_id: id of object which we want to update
 * @param list_of_data
 */
let main_list = {
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

// creating reference obj for our context
export const MyContext = React.createContext()

const App=()=> {

  const [initialList, setInitialList]=useState(main_list)

  /**
   * @function 
   * @param {*} id id of data which we want to update
   * @param {*} data object of particular user details
   */
  const updateData = (id,data)=>{
    const user = [data]
    const updatedList = initialList.list_of_data.map( obj => user.find( obj2 => obj2.id === obj.id) || obj );
    setInitialList({...initialList, list_of_data:updatedList})
  }

  /**
   * @function : for editing single user data
   * @param {*} id id related to single user which we want to update
   */
  const editData = (id) =>{
    setInitialList({...initialList,edit_data_id:id})
  }

  /**
   * @function : for deleting single user
   * @param {*} id id related to single user which we want to delete
   */
  const deleteData = (id)=>{
    const newList = initialList.list_of_data.filter( (obj) => {
      return obj.id !== id
    } )
    setInitialList({...initialList,list_of_data:newList})
  }
  
  return (
    <>
      <div className="App">
     
        <MyContext.Provider 
          value={{
            mList:initialList,
            delData: deleteData,
            updData: updateData,
            edtData : editData
        }}>
            <Layout/> 
        </MyContext.Provider>
      </div>
    </>
  );
}

export default App;
