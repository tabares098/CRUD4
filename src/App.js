
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './components/UserList';
import axios from 'axios';
import UsersForm from './components/UsersForm';

function App() {


  const[users,setUsers] = useState([])
  const[userselected, setUserselected] = useState(null);

  useEffect(() => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  }, []);

  const getUsers = () => {
    axios
      .get("https://users-crud1.herokuapp.com/users/")
      .then((res) => setUsers(res.data));
  };

  const removeUser = (id) => {
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(() => getUsers());
  };
  console.log(users)
  return (
    <div className="App">
      <UsersForm getUsers={getUsers} userselected={userselected} setUserselected={setUserselected}/>
     <UserList Users={users} setUserselected={setUserselected} removeUser={removeUser}/>
    </div>
  );
}

export default App;
//<//