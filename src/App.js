import React, {useState} from 'react';
import UserList from './components/UserList/UserList';
import AddUser from './components/Users/AddUser';


function App() {
  const [usersList, setUsersList] = useState([])
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => { return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]})
  }
  return (
    <>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </>
  );
}

export default App;
