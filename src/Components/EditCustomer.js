import React, {useState, useEffect, useContext} from 'react'
import styles from './allCss.module.css'
import { MyContext } from '../App'


/**
 * @function EditCustomer() : responsible for rendering and updating single record
 */
const EditCustomer = () => {
    //consumer context
    const ContextRef = useContext(MyContext)
    const currentId = ContextRef.mList.edit_data_id
    const listOfData = ContextRef.mList.list_of_data
    //ref for update data function
    const updateData = ContextRef.updData

    /**
     * @param currentUser: holds single user which needs to update
     */
    const currentUser = listOfData.filter( (obj) => {
        return obj.id === currentId
    } )[0]

    /**
     * @param initialObj: initialize single obj using useState() hook 
     * @method setInitialObj: update initialObj on onChange() event
     */
    const [ initialObj , setInitialObj ] = useState({...currentUser})

    /**
     * @method useEffect(): for updating initialObj onchange of currentUser value 
     */
    useEffect( ()=>{
        setInitialObj({...currentUser})
    },[currentUser,currentId])


    /**
     * @method handleChange() : change initialObj onchange on input fields value
     * @param {*} e 
     */
    const handleChange = (e) =>{
        e.preventDefault();
        setInitialObj({ ...initialObj, [e.target.name] : e.target.value  })
    }

    /**
     * @method handleSubmit() : onsubmit clear all input fields 
     * @param {*} e 
     */
    const handleSubmit = (e) =>{
        e.preventDefault();
        setInitialObj({ ...initialObj, id:'',fname:'',lname:'',no_of_purchase:'',amount:''})
    }

    return(
        <div className="container ">
            <h3> Edit Customer Details </h3>
            <hr/>
            <form onSubmit={handleSubmit} >

                <label className= {`${styles.label_style} mx-2 `}>First Name:</label>
                <input type="text" placeholder="Enter First Name" 
                className={`${styles.input_style} ` } 
                name="fname" value={initialObj.fname} 
                onChange={handleChange}
                />
                <br/>
              
                <label className= {`${styles.label_style} mx-2`}>Last Name:</label>
                <input type="text" placeholder="Enter Last Name"  
                className={styles.input_style} 
                name="lname" value={initialObj.lname} 
                onChange={handleChange} 
                />
                <br/>

                <label className= {`${styles.label_style} mx-2`}>No of Items:</label>
                <input type="text" placeholder="Enter No of Items" 
                className={styles.input_style} name="no_of_purchase" 
                value={initialObj.no_of_purchase} 
                onChange={handleChange}
                />
                <br/>

                <label className= {`${styles.label_style} mx-2`}>Amount:</label>
                <input type="text" placeholder="Enter Amount"  
                className={styles.input_style} name="amount" 
                value={initialObj.amount} 
                onChange={handleChange}
                />
                <br/>
                <br/>
                {/**
                @callback updateData() dipatch action on click for updating
                @param id: currentId of user 
                @param userDetails : details enter by user for updating at input
                 */}
                <button className="btn btn-primary" 
                onClick={ () => updateData(currentId,initialObj) } >
                Update
                </button>

            </form>
        </div>
    )
}

export default EditCustomer;