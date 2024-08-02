import { useEffect } from "react";
import { useState } from "react";

const CleanupFunction = () => {

  const [name,setName]=useState(null);

  const handleClick = () =>{
    setName("roman");
  }
  const handleClickSecond = () =>{
    setName(null);
  }


  return (
    <div>
      {name ? (
        <div>
          <h2>Hello {name}</h2>
          <button className='btn' onClick={handleClickSecond}>
            click here
          </button>
          <DisplayMessage name={name}/>

        </div>
      ) : (
        <>
          <h2>hello world</h2>
          <button className='btn' onClick={handleClick}>
            click here
          </button>
        </>
      )}
    </div>
  );
};

  const DisplayMessage = ({ name }) => {

    useEffect(()=>{
      console.log('hello')

      const intId = setInterval(()=>{
        console.log('hello there');
      },1000)

      return () =>{
        clearInterval(intId)
        console.log("components unmounts")
      }

      // const someFunc = () =>{
      //   //logic
      // }

      // window.addEventListener('scroll', someFunc);

      // return () =>{
      //   window.removeEventListener("scroll", someFunc)
      // }

    },[])
    return (<div className='alert alert-success'>hello {name}, welcome</div>);

  };
  



export default CleanupFunction;
