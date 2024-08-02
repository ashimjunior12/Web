import { useCallback, useState, useMemo } from 'react';
import { data } from '../../../../data';
import List from './List';
import SlowFunction from './SlowFunction';

const LowerState = () => {
  const slowFunction = useMemo(()=>SlowFunction(),[]);
  console.log(slowFunction);
  const [people, setPeople] = useState(data);
  const [count, setCount] = useState(0);


  const removePerson = useCallback((id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  },[people])  
  

  return (
    <section>
      <button
        className='btn'
        onClick={() => setCount(count + 1)}
        style={{ marginBottom: '1rem' }}
      >
        count {count}
      </button>
      <List people={people} removePerson={removePerson}/>
    </section>
  );
};
export default LowerState;
