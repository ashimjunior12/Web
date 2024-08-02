import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (<div>
    {user && <SomeComponent name={user.name} editing={isEditing} />}

    {user? <div>
      <h2>Hello {user.name}</h2>
    </div> : <div>
      <p>please login</p>
    </div>
  }
  </div>
  );
  
};

const SomeComponent = ({name, editing}) =>{
  return (<>
  <h2>Lorem, ipsum dolor.</h2>
  <h2>{name}</h2>

  <button className="btn">{editing?"click":"add"}</button>


  </>)
}

export default ShortCircuitExamples;
