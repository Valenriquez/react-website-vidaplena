import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from 'countries-api';
import { useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

import './Signup.css'



const Signup = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [tel, setTel] = useState("");
    const [password, setPassword] = useState("");
     
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, username, tel, password });
        setEmail("");
        setTel("");
        setUsername("");
     };
    
    let fruits = [
        { label: "Apple", value: "🍎" },
        { label: "Banana", value: "🍌" },
        { label: "Orange", value: "🍊" }
      ];
    
      let [fruit, setFruit] = useState("⬇️ Select a fruit ⬇️");


        let handleFruitChange = (e) => {
            setFruit(e.target.value);
        };

    const countiresAll = [
        "Argentina",
        "Bolivia",
        "Brasil",
        "Colombia",
        "Chile",
        "Costa Rica",
        "Cuba",
        "Ecuador",
        "El Salvador",
        "Guatemala",
        "Haití",
        "Honduras",
        "Jamaica",
        "México",
        "Nicaragua",
        "Panamá",
        "Paraguay",
        "Perú",
        "Puerto Rico",
        "República Dominicana",
        "Uruguay",
        "Venezuela"
    ]

    const mexicanStates = [
        "Aguascalientes",
        "Baja California",
        "Baja California Sur",
        "Campeche",
        "Chiapas",
        "Chihuahua",
        "Coahuila",
        "Colima",
        "Durango",
        "Estado de México",
        "Guanajuato",
        "Guerrero",
        "Hidalgo",
        "Jalisco",
        "Michoacán",
        "Morelos",
        "Nayarit",
        "Nuevo León",
        "Oaxaca",
        "Puebla",
        "Querétaro",
        "Quintana Roo",
        "San Luis Potosí",
        "Sinaloa",
        "Sonora",
        "Tabasco",
        "Tamaulipas",
        "Tlaxcala",
        "Veracruz",
        "Yucatán",
        "Zacatecas"
    ];

    const gotoLoginPage = () => navigate("/login");

    return (
        <>
        <h3>Regístrate</h3>
        <div className="container"> 
        <h3 style={{textAlign: 'left' }}>Llena los campos con tu información</h3>
          <div className='signup__container'>
            <form className='signup__form' onSubmit={handleSubmit}>
        <div className='form-row'>
        <div className='form-column'>
          <label htmlFor='username'>Nombre(s)</label>
          <input
            type='text'
            id='username'
            name='username'
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        <label htmlFor="country">País:</label>
                <select id="country" name="country">
                {countiresAll.map((state) => (
                    <option key={state} value={state}>{state}</option>
                ))}
                </select>
        </div>
        <div className='form-column'>
          <label htmlFor='lastname'>Apellido(s)</label>
          <input
            type='text'
            id='lastname'
            name='lastname'
            value={username}
            required
            onChange={(e) => setUsername(e.target.value)}
          />
         <label htmlFor="state">Estado</label>
                <select id="state" name="state">
                {mexicanStates.map((state) => (
                    <option key={state} value={state}>{state}</option>
                ))}
                </select>
        </div>
      </div>

      <div className='form-row'>
        <div className='form-column'>
          <label htmlFor='birthday'>Fecha de Nacimiento</label>
          <input
            type='date'
            id='birthday'
            name='birthday'
            required
            onChange={(e) => setUsername(e.target.value)}
          />
            <label htmlFor='sex'>Sexo</label>
          <select id='sex' name='sex' value={username} onChange={(e) => setUsername(e.target.value)}>
            <option value='hombre'>Hombre</option>
            <option value='mujer'>Mujer</option>
          </select>
        <label htmlFor='city'>Ciudad</label>
                <input
                    type='text'
                    id='city'
                    name='city'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
        </div>

        <label htmlFor='email'>Correo electrónico</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='tel'>Teléfono</label>
                <input
                    type='tel'
                    name='tel'
                    id='tel'
                    value={tel}
                    required
                    onChange={(e) => setTel(e.target.value)}
                />
        <label htmlFor='city'>Calle</label>
                <input
                    type='text'
                    id='street'
                    name='street'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='numbers'>Número(s)</label>
                <input
                    type='text'
                    id='numbers'
                    name='numbers'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            <div className='form-row'> 
              <label htmlFor='school'>Escolaridad</label>
                <select id='school' name='school'>
                    <option value="universidad">Universidad</option>
                    <option value="preparatoria">Preparatoria</option>
                </select>
            </div>
            <label htmlFor='cp'>Código Postal</label>
                <input
                    type='text'
                    id='cp'
                    name='cp'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='colonia'>Colonia</label>
                <input
                    type='text'
                    id='colonia'
                    name='colonia'
                    value={username}
                    required
                    onChange={(e) => setUsername(e.target.value)}
                />
            
            
       </div>

      {/* Rest of the form code... */}

      <Button variant='outline-success' className='BotonLogin'>
        Regístrate
      </Button>{' '}
      <p>
        ¿Ya tienes cuenta?{' '}
        <span className='link' onClick={gotoLoginPage}>
          Ingresa
        </span>
      </p>
    </form>
  </div>
  </div>
 
        </>
    );
};

export default Signup;
