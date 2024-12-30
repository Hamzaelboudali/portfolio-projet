import React from "react";
import '../styles/Contact.css'
function Contact(){
    return(
        <section id="contact" className="contact">
        <h2>Contactez-nous</h2>
        <form>
            <label>Nom:</label>
            <input type="text" name="Nom" />
            <label>Email:</label>
            <input type="email" name="email" />
            <label>Messages</label>
            <textarea name="message"></textarea>
            <button type="sumbit">Envoyer</button>
       </form>
        </section>
    );
}

export default Contact;
