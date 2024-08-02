import { memo } from "react";

const Person = ({ name,removePerson,id }) => {
  return (
    <div>
      <h4>{name}</h4>
      <button onClick={()=>removePerson(id)}>clear</button>
    </div>
  );
};
export default Person;
