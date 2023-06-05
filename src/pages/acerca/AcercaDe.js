import "./AcercaDe.css";
import React, { useState, useEffect } from "react";
 
const AcercaDe = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();

        // Send the form data to the backend.
  

        // Clear the form fields.
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <h2 style={{textAlign: 'left'}}>CONTÁCTANOS</h2>
            <br />
            <p style={{textAlign: 'left'}}><strong>E-mail:</strong> abuelitosabp@gmail.com</p>
            <p style={{textAlign: 'left'}}><strong>Teléfono:</strong> +52 811659 6021</p>
            <p style={{textAlign: 'left'}}> Monterrey, Nuevo León, México</p>
             
            <p></p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default AcercaDe;