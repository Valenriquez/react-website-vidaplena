import "./MiPerfil.css";
import React, { useState, useEffect } from "react";
 
const MiPerfil = () => {
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
            <h1>Dudas o Sugerencias</h1>
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
export default MiPerfil;