import React from 'react'
import CustomerList from './CustomerList'
import EditCustomer from './EditCustomer'
import styles from './allCss.module.css'
import { useSelector } from 'react-redux'

const Layout = () => {
    /** @hook useSelector: fetching list of data in customerList var */
    const customerList = useSelector(state=> state.delUpdReducer.list_of_data)

    /** mapping customer list to CustomerList component 
     * @param single_customer: details of single customer 
     */
    const renderList = customerList.map( (single_customer,index) => <CustomerList key={index} single_customer={single_customer} /> );   

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