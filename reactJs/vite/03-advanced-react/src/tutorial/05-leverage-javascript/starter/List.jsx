import { People } from './People';
import {people} from '../../../data.js'
import { useState } from 'react';

const List = () => {

 const [data,setData] = useState(people);


 
  return (
    <>
      <h1>List</h1>
      {data.map((item)=>{
       const {name,id, nickName,images} = item;
       return (
        <People key={id} {...item}  />
       )
      })}
    </>
  );
}
export default List