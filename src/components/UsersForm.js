import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


const UsersForm = ({getUsers, userselected,setUserselected}) => {
    const[birthday,setBirthday] = useState("");
    const[email,setEmail] = useState("");
    const[first_name,setfirst_name] = useState("");
    const[last_name,setlast_name] = useState("");
    const[password,setPassword] = useState("");

    useEffect(() => {
        if (userselected) {
            setBirthday(userselected.birthday);
            setEmail(userselected.email);
            setfirst_name(userselected.first_name);
            setlast_name(userselected.last_name);
            setPassword(userselected.password);
        }
      }, [userselected]);
      console.log(userselected)
    
    const submit = (e) => {
          e.preventDefault();
          const user = {
          birthday,
          email,
          first_name,
          last_name,
          password,
          
        };
        if(userselected){
          axios
          .put(`https://users-crud1.herokuapp.com/users/${userselected.id}/`, user)
          .then(()=>{
          getUsers();
          setUserselected(null);
          reset();
        });
         
      

    }else{
              axios
              .post("https://users-crud1.herokuapp.com/users/", user)
              .then(() => {
               getUsers();
               reset();
               
              })
               .catch((error) => console.log(error.response));
    }
  };
     const reset = () => {
                setUserselected(null);
                setBirthday("");
                setEmail("");
                setfirst_name("");
                setlast_name("");
                setPassword("");
  };
  
    return (

            
        
        <div>
          
             <h1>New User</h1>
             <form onSubmit={submit}>
      <div >
                <label htmlFor="first_name"><i className="fa-solid fa-user">-</i></label>
                <input
                type="text" placeholder="first Name" className="inp"
                onChange={(e) => setfirst_name(e.target.value)}
                value={first_name}
               />-
                <label htmlFor="last_name" ></label>
                <input
                type="text" placeholder="Last Name" className="inp"
                onChange={(e) => setlast_name(e.target.value)}
                value={last_name}
              />
      </div>
      
        <br />
      
      <div className="input-container">
                 <label htmlFor="email"><i className="fa-solid fa-envelope">-</i></label>
                 <input
                  type="email" placeholder="Email" className="input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
      </div>
      <br />
      <div className="input-container">
                   <label htmlFor="password"><i className="fa-solid fa-lock">-</i></label>
                   <input
                    type="password" placeholder="password" className="input"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
      </div>
      <br />
      <div className="input-container">
                   <label htmlFor="birthday"><i className="fa-solid fa-cake-candles">-</i></label>
                   <input
                    type="date" className="input"
                    onChange={(e) => setBirthday(e.target.value)}
                    value={birthday}
                  />
      </div>
                  <button className="bbtn"><i className="fa-solid fa-arrow-up-right-from-square"></i></button>
                  <button className="bbtn" onClick={() => reset()} type="button">
                  <i className="fa-solid fa-ban"></i>
                  </button>
                 </form>
        </div>
    );
};

export default UsersForm;