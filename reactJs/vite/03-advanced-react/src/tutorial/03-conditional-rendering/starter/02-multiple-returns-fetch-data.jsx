import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const user = await resp.json();
        setUser(user);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }

      setIsLoading(false);
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2 className='loading'></h2>;
  }

  if (isError) {
    return <h2>There was an error...</h2>;
  }

  return (
    <>
      <h2>{user?.name}</h2>
      <img
        src={user?.avatar_url}
        style={{ width: '100px', borderRadius: '50%' }}
        alt=''
      />
      <h4>Works at: {user?.company}</h4>
    </>
  );
};
export default MultipleReturnsFetchData;