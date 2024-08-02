import {useAppContext} from './Navbar'

const UserContainer = () => {

  
  const {user,logOut} = useAppContext();
  // return 'hello'
  return (
    <div className='user-container'>
      {user ? (
        <>
          <p>hello there, {user.name.toUpperCase()}</p>
          <button type='button' className='btn' onClick={logOut}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};
export default UserContainer;
