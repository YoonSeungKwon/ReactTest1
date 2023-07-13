import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = (props) =>{

    const [state, setState] = useState({
        email:"",
        password:"",
        name:""
    });

    let form = new FormData();

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmit = (e) =>{

        form.append("email", state.email)
        form.append("password", state.password)
        form.append("name", state.name)
        
        axios.post("/api/member/join", form
        ).then(function(response){
            console.log(response.status)
            navigate("/login");
        }).catch(function(error){
            console.log(error);
        });
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                Email:
                <input type="text"
                       id="email"
                       name="email"
                       value={state.email}
                       onChange={handleChange}
                />
                <br/>
                Password:
                <input type="text"
                       id="password"
                       name="password"
                       value={state.password}
                       onChange={handleChange}
                />
                <br/>
                Name:
                <input type="text"
                       id="name"
                       name="name"
                       value={state.name}
                       onChange={handleChange}
                />
                <br/>
                <button type="submit">Register</button>
            </form>
        </>
    )
}
export default Register;