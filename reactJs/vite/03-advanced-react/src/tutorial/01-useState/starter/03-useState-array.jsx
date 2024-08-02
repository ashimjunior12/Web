import { useState } from "react";
import { data } from '../../../data'

const UseStateArray = () => {
  
  const [name,setName] = useState(data);
  const clearAll = ()=>{
    setName([])
  }

  const clearItem = (id) =>{
    const newPeople = name.filter((people)=>people.id !== id);
    setName(newPeople);
  }
  return (
    <>
      {name.map((people)=>{
        const {id,name} = people;
        return (
          <div key={id}>
            <h2>{name}</h2>
            <button type="button" onClick={()=>clearItem(id)}>clear</button>
          </div>
        );
      })}
      <button className="btn" type="button" style={{marginTop:"3rem"}} onClick={clearAll}>clear all</button>
    </>
  );
};

export default UseStateArray;
