import "./nav2.css";
import { Link } from "react-router-dom";

const seccion = ["Home" ,"AboutUs", "LogOut"]

export default function Nav2 (){
  return (
    <nav className="container_navv">
        <ul className="nav_Containerr">
           <li><Link to={"/home"}>{seccion[0]}</Link></li>
           <li><Link to={"/AboutWe"}>{seccion[1]}</Link></li>
           <li><Link to={"/"}>{seccion[2]}</Link></li>
        </ul>
    </nav>
  )
}