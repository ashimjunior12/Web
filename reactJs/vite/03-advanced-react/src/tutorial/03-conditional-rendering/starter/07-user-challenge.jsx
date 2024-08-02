import { useState } from "react";

const UserChallenge = () => {

  const[user, setUser] = useState(null);

  const logIn = () =>{
    setUser({name:"roman"})
  }

  const logOut = () =>{
    setUser(null);
  }

  return (
    <>
      {user ? (
        <div>
          <h2>hello {user.name}</h2>
          <button className='btn' onClick={logOut}>logout</button>
        </div>
      ) : (
        <div>
          <h2>Please login</h2>
          <button className='btn' onClick={logIn}>login</button>
        </div>
      )}
    </>
  );
  
}

export default UserChallenge;
