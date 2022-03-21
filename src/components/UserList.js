import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const UserList = ({Users, setUserselected, removeUser}) => {

       
    return (
        <div >
            <ul className="user-list">
        {
                 Users.map(User =>
               <li key={User.id}>
                   <div className="name">
                  <b>{User.first_name}  {User.last_name}</b><br />
                  <br />
                  
                  </div>
                  <div className="email">
                  <i className="fa-solid fa-envelope"></i>{User.email} 
                    <br />
                    <i className="fa-solid fa-cake-candles"></i> {User.birthday} <br />
                     
                  
                 </div>
                 <div className="btn">
                 <button className="btn" onClick={() => setUserselected(User)}><i className="fa-solid fa-pen-clip"></i></button> 
                 <button className="btn" onClick={() => removeUser(User.id)}><i className="fa-solid fa-trash-can"></i></button>
                 </div>
             </li>   )
        }
       </ul>
        </div>
    );
};

export default UserList;