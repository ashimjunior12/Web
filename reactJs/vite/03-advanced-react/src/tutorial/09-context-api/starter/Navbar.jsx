import { useState, createContext, useContext } from "react";
import NavLinks from "./NavLinks"

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
 const [user,setUser] = useState({name:'bob'});

 const logOut = () =>{
  setUser(null);
 }

  return (
    <NavbarContext.Provider value={{user, logOut}}>
      <nav className='navbar'>
        <h5>CONTEXT API</h5>
        <NavLinks user={user} logOut={logOut} />
      </nav>
    </NavbarContext.Provider>
  );
}
export default Navbar