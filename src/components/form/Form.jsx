import { useState } from "react"
import "./form.css"
import {validation} from "./validation";

export default function Form(props){
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const[errors, setErrors] = useState({
        username: "",
        password: ""
    });

    const handleInputChange = (evento) =>{
      setUserData({
        ...userData,
        [evento.target.name]: evento.target.value,
      })
      setErrors(validation(
        ...userData,
        [evento.target.name] : evento.target.value,
      ))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.login(userData);
       }

    return (
        <div className="container_Nav">
            <form className="container_form" onSubmit = {handleSubmit}>
                    <label>Username</label>
                    <input type="text" name="username" value={userData.username} onChange={handleInputChange}/>
                    <p>{errors.username}</p>
                    <label>Password</label>
                    <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>
                    <p>{errors.password}</p>
                    <button>Log In</button>
            </form>
        </div>
    )
}