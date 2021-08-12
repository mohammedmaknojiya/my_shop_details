import React , {useContext} from 'react'
import CustomerList from './CustomerList'
import EditCustomer from './EditCustomer'
import styles from './allCss.module.css'
import { MyContext } from '../App'

const Layout = () => {

    //creating consumer context
    const contextRef = useContext(MyContext)
    //fetching list of data from main list
    let listOfData = contextRef.mList.list_of_data

    /** mapping list of data to CustomerList component 
     * @param single_customer: details of single customer 
     */
    const renderList = listOfData.map( (single_customer,index) => <CustomerList key={index} single_customer={single_customer} /> );   

    return(
        <> 
            <h1 className="bg-primary py-3">Today's Purchase</h1>
            <div className="container py-3 d-flex justify-content-around">
                    {/** render list of users */}
                    <div className={`${styles.customer_list} shadow-lg p-3 mb-5 bg-body rounded`}>
                        <h1>Customer List</h1>
                        <hr/>
                       {renderList}
                    </div>

                    {/** render EditCustomer component */}
                    <div className={`${styles.edit_customer} shadow-lg p-3 mb-5 bg-body rounded`}>
                        <EditCustomer/>
                    </div>
            </div>
        </>
    )
}

export default Layout