import { useState } from 'react';
import { data } from '../../../data';

const UserChallenge = () => {
  
  const [users,setUsers] = useState(data);
  const [name,setName] = useState("");

  const handleSubmit = (e)=>{

    e.preventDefault();
    const newId = Date.now();
    const newUsers = {id:newId, name:name};
    const updatedUsers = [...users, newUsers];
    setUsers(updatedUsers);
    setName("");

  }

  const clearItems = (id) =>{
    const clearedUsers = users.filter((individual)=>individual.id!==id);
    setUsers(clearedUsers);
  }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}

          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>

      {/* render users below */}
      {users.map((people)=>{
        const {id,name} = people;
        return <div key={id}>
          <h4>{name}</h4>
          <button className="btn" style={{marginBottom:'50px'}} onClick={()=>clearItems(id)}>clear</button>
        </div>
      })}
      
    </div>
  );
};
export default UserChallenge;
