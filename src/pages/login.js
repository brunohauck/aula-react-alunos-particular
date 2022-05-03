import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/app.css';
import HttpService from "../services/HttpService"
import React, { useState, useEffect } from "react";
function Login() {

    const valoresIniciais = {
        email: "",
        password: ""
    }
    const [valores, setValores ] = useState(valoresIniciais)
    const [nome, setNome ] = useState('')

    const alteraNome = event => {
        const { value} = event.target;
        console.log(value)
        setNome(value)
    }

    const alteraValores = event => {
        const { name , value} = event.target;
        setValores({ ...valores, [name]: value })
    }
  
    const loginRequest = () => {




        //Usando Fetch 
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(valores)
        };
        fetch('http://localhost:3000/users', requestOptions)
            .then(data => {
                console.log( data.json())
            }).catch((response) => {
                console.log(response)
        })

        const requestOptions2 = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },

        };
        fetch('http://localhost:3000/users', requestOptions)
            .then(data => {
                console.log(data.json())
            }).catch((response) => {
                console.log(response)
        })

        
        //Usando AXIOS
        HttpService.create(valores)
        .then(
            response => {
                console.log(response.data)
            
        })
        .catch( e => {
            console.log(e)
        }) 
        console.log(valores)
    }

//Bru
    const name = "Bruno Hauck";
    return (
         
        <div className='submit-form Formulario'>
            <h2>Formulário de Login</h2>
            <div className='form-group'>
                <label>Nome </label>
                <input 
                    type="text" 
                    className='form-control'
                    name="nome"
                    onChange={alteraNome} 
                    value={nome}
                    />
            </div>
            <div className='form-group'>
                <label>Email </label>
                <input 
                    type="text" 
                    className='form-control'
                    name="email"
                    onChange={alteraValores} 
                    value={valores.email} />
            </div>
            <div className='form-group'>
                <label>Senha </label>
                <input 
                    type="password" 
                    className='form-control'
                    name="password"
                    onChange={alteraValores}
                    value={valores.password}
                />
            </div>
            <button onClick={loginRequest}
                className='btn btn-sucess'>Login</button>
        </div>


    );
  }
  
export default Login;