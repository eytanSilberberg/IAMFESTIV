import { NavLink } from "react-router-dom";
import Logo from "../assets/imgs/logo.png";
import { SearchIcon } from "./icons/search";


export const AppHeader = () => {
  return (
    <header>
      <div className='header-left'>
        <NavLink className="logo" to={"/"}>
          <img src={Logo}></img>
        </NavLink>
        <div className="search-header">
          <div className="search-icon">
            <SearchIcon />
          </div>
          <input type="text" placeholder='Festival,Artist,Country...'/>
        </div>
      </div>
      <nav>
        <NavLink to={"/festivals"}>Festivals</NavLink>
        <NavLink to={"/artists"}>Artists</NavLink>
        <NavLink to={"/help"}>Help</NavLink>
        <NavLink to={"/magazine"}>Magazine</NavLink>

        <NavLink to={"/login"}>Log In</NavLink>
      </nav>
    </header>
  );
};
