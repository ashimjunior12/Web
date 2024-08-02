import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const user = await response.json();
      setUsers(user);
    };
    
    fetchData()
  }, []);

  return (
    <section>
          <h3>github users</h3>
      <ul className='users'>
        {users.map((user)=>{
          const {login,id,avatar_url,url} = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h5>{login}</h5>
                <a href={url} target='_blank'>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default FetchData;
