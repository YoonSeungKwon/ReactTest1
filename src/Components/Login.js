import React, {useState} from "react";
import axios from "axios";
import { ACCESS_TOKEN } from "../Constant/apiConstant";

const Login = (props) =>{

    const [state, setState] = useState(
        {
            email:"",
            password:"",
            name:""
        }
    )    

    let form = new FormData();
    
    const handleChange = e=>{
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }

    const handleSubmit = e=>{
        console.log("Hi");
        form.append("email",state.email)
        form.append("password",state.password)
        form.append("name",state.name)
        axios.post("/auth/member/login", form
        ).then(function(response){
            if(response.status === 200){
                localStorage.setItem(ACCESS_TOKEN,response.data.token);
                navigator("/");
            }
            else{
                console.log("Error");
            }
        }).catch(function(error){
            console.log(error);
        });
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />: Email
                <br/>
                <input
                    type="text"
                    id="password"
                    name="password"
                    value={state.password}
                    onChange={handleChange}
                />: Password
                <br/>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />: Name
                <br/>
                <button type="submit">Login</button>
            </form>
        </>
    )

}

export default Login;