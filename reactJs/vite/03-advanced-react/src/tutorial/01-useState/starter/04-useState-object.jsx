import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:'peter', age:24,hobby:"read books"})
  
  const handleClick = () =>{
    setPerson(
      {...person, name:'john'}
    )
  }
  const {name,age,hobby} = person;
  return (
    <div>
      <h4>{name}</h4>
      <h4>{age}</h4>
      <h5>Enjoys: {hobby}</h5>
      <button className="btn" type='button' onClick={handleClick}>click john</button>
    </div>
  );}
export default UseStateObject;
