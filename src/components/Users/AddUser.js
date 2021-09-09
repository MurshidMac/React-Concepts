import React, {useState} from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';

import styles from './AddUser.module.css'

const AddUser = (props) => {
    const [username, setUserName] = useState('');
    const [age, setAge] = useState('');
    const [error, setError] = useState();
    const addUserHandler = (event) => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return
        }
        if(+age < 0){
            setError({
                title: 'Invalid Input',
                message: 'Age can not be negative :)'
            })
            return
        }
        props.onAddUser(username, age)
        setUserName('')
        setAge('')
    }
    const userNameHandler = (event) => {
        setUserName(event.target.value)
    }
    const userAgeHandler = (event) => {
        setAge(event.target.value)
    }

    const errorHandler = () =>{
        setError(null)
    }

    return (
        <div>
        {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModel>}
        <Card classes={styles.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="uesrname" >
                Username
            </label>
            <input id="username" type="text" value={username} onChange={userNameHandler}/>
            <label htmlFor="age">
                Age
            </label>
            <input id="age" type="number" value={age} onChange={userAgeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )
}

export default AddUser
