import "./nav.css";
import SearchBar from '../search/SearchBar'
import {Link} from "react-router-dom"; 


const prop = ["Home","About We"]

export default function Nav(props){  
    return (
     <nav className="container_nav">
        <SearchBar onSearch={props.onSearch}/>
        <ul className="nav_Container">
           <li><Link to={"/home"}>{prop[0]}</Link></li>
           <li><Link to={"/AboutWe"}>{prop[1]}</Link></li>
         </ul>
        </nav>
    )
}