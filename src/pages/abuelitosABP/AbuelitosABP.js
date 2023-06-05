import React, { useState, useEffect } from "react";
import './AbuelitosABP.css'
//import image from './img/prueba1imagen.jpg';
import Button from 'react-bootstrap/Button';


function InfoBox() {
    const data = [
      {
        title: 'TESTIMONIOS',
        description: 'Esta es la descripción del cuadro 1.',
      }
    ];
  
    return (
      <div className="info-box">
        {data.map((item, index) => (
            <div className="container-box" key={index}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
         ))}
      </div>
    );
}
  
function Intro() {
  return(
  <> 
    <div style={{ width: '100%', height: '600px', padding: '50px', textAlign: 'left', '@media (min-width: 768px)': { width: '50%' } }}>
      <h1 style={{textAlign: 'left', color: 'black'}}>Abuelitos ABP</h1><br />
      <h2 style={{textAlign: 'left', color: 'black'}}>"Los abuelitos somos fuente de <br />sabiduría"</h2>
      <p style={{textAlign: 'left', color: 'black'}}>¡Bienvenidos a Abuelitos ABP!</p>
      <p style={{textAlign: 'left', color: 'black'}}>
        En esta página te guiaremos en cada proceso para evaluar los <br />distintos aspectos de tu salud.
        Te daremos recomendaciones <br />para seguir teniendo una salud y vida plena.
      </p>
      <p style={{color: 'black'}}>Si deseas continuar, oprime el botón de abajo para registrarte.</p>
      
      <Button variant="light" className="rounded-pill">Registro</Button>
      <span style={{ margin: '0 15px' }}></span> 
      <Button variant="light" className="rounded-pill">Acceder a mi cuenta</Button>{' '}
    </div>
  </>
  );
}

function Slides(){

  let slides = [
    {
      key: 1,
      content: "1"
    },
    {
      key: 2,
      content: "2"
    },
    {
      key: 3,
      content: "2"
    },
    {
      key: 4,
      content: "3"
    },
    {
      key: 5,
      content: "4"
    },
    {
      key: 6,
      content: "5"
    },
    {
      key: 7,
      content: "6"
    },
    {
      key: 8,
      content: "7"
    }
  ];
  return(
    <h1>Slides</h1>
  );
}

const AbuelitosABP = () => {
    return (
      <>  
        <div className="App">
        <section className="section1">
         <Intro />
      </section>
        
        <section className="testimonios">
        <h2>TESTIMONIOS</h2>
          <InfoBox />
          
          <div className="container">
          <p>Aquí puedes agregar tu contenido para la segunda sección.</p>
          </div>
        </section>
  
        <section className="contacto"  style={{ textAlign: 'left',  padding: '50px', }}>
          <h2>CONTÁCTANOS</h2>
          <br />
            <p><strong>E-mail:</strong> abuelitosabp@gmail.com</p>
            <p><strong>Teléfono:</strong> +52 811659 6021</p>
            <p> Monterrey, Nuevo León, México</p>
             
         </section>
      </div>
      </>
    );
};
export default AbuelitosABP;