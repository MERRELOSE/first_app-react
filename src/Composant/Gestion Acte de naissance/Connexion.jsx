import React from 'react' ;
import { useNavigate } from 'react-router-dom';
import './connexion.css';

const Connexion = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/accueil');
    };
    return(
        <div className="container" style={{ backgroundColor: 'white', width: '600px', display: 'flex', flexDirection: 'column', margin: 'auto', marginTop: '200px', paddingBottom: '30px' }}>
            <form action="Connexion" onSubmit={handleSubmit}>
                <div className="header">
                <div className="text">CONNEXION</div>
                <div className="underline"></div>  
                </div>
                <div className="inputs">
                    <div className="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="black" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"></path></svg>
                        <input type="text" className="text" placeholder="Name" required/>
                    </div>

                    <div className="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="black" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4l-8 5l-8-5V6l8 5l8-5z"></path></svg>
                        <input type="email" className="text" placeholder='Email' required/>
                    </div>
                    

                    <div className="input">
                    <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24"><path fill="black" d="M12 17a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m6-9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2zm-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3"></path></svg>
                        <input type="password" className="text" placeholder='Password' required/>
                    </div>
                </div>

                <div className="forgot-password">Mot de passe oublié? <span>Clique ici !</span></div>

                <div className="submit_container">
                    <div className="submit">
                        <button type="submit" to="./accueil.jsx" className="buttonSubmit">Se connecter</button>
                    </div>
                    <div className="submit">S'inscrire</div>
                </div>
            </form>
        </div>
    )
}

export default Connexion