import { Link } from "react-router-dom";
import Home from "../Home/Home";

 
const Header = () => {


   return (
        <div>
            <Link to="/home">Home</Link>
            <Link  to="/login">Login </Link>
        </div>
    );
};

export default Header;