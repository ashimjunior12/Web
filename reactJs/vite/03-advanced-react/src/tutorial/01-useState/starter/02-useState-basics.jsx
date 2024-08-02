import { useState } from "react";

const UseStateBasics = () => {
  const value = useState(0);
  const [count, setCount] = value;
  const handleClick = () =>{
    setCount(count+1);
  }
  const decrease = () =>{
    setCount(count-1)
  }
  return (
    <>
      <h2>UseState Basic</h2>
      <h2>{value}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Increase
      </button>
      <br />
      <button className='btn decrease-btn' onClick={decrease}>decrease</button>
    </>
  );
};

export default UseStateBasics;
