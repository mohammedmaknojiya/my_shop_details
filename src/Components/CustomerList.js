import React, {useContext} from 'react'
import { MyContext } from '../App';
import styles from './allCss.module.css'

/** 
 * @function CutomerList : render single customer details
 * @param {object} single_customer
 */
const CustomerList = ({single_customer}) => {

    const currentId = single_customer.id;
    //consumer context
    const ContextRef = useContext(MyContext)
    //ref of delete and edit functions
    const deleteData = ContextRef.delData
    const editData = ContextRef.edtData

    return(
        <div className="px-3 py-1">
            <div className={` px-3 py-3 br-10 shadow p-3 mb-5 bg-body rounded ${styles.main_container}`}>

                <div className={styles.name_field}>
                    <label className={`${styles.label_style}`}>Name: </label>
                    <h3>{single_customer.fname} {single_customer.lname}</h3>
                </div>

                <div className="container">
                    <div className="row  ">
                        <div className="col-6 d-flex justify-content-start">
                            <label>No of Items Purchase: </label>
                            <h5>{single_customer.no_of_purchase}</h5>
                        </div>
                        <div className="col-6  d-flex justify-content-start">
                            <label>Total Amount:</label>
                            <h5>{single_customer.amount}</h5>
                        </div>
                    </div>
                </div>
                
                <div className="d-flex justify-content-start">
                    {/** 
                    @callback editData(): reducer for editing data
                    @param currentId: id of user for fetching particular record
                    */}
                    <button className="btn btn-primary mx-3 "
                     onClick={ ()=> editData(currentId) }>
                     Edit Data
                     </button>

                    {/**
                    @callback deleteData(): reducer for deleting data
                    @param currentId: id of user for fetching particular record for deleting
                     */}
                    <button className="btn btn-primary" 
                    onClick={()=> deleteData(currentId)} >
                    Delete Data
                    </button>
                </div>

            </div>
            
        </div>
    )
}

export default CustomerList;