import React from "react";
import Logo from '../Assets/logo.png'

const Naissance = () => {
    return(
        <body>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo Mairie"/>
                </div>
                <nav>
                    <ul>
                        <li><a href="accueil.html">Accueil</a></li>
                        <li><a href="naissance.html">Naissance</a></li>
                        <li><a href="#">Mariage</a></li>
                        <li><a href="#">Terrain</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="cointainer">
                    <div className="header">
                        <div className="text">Enregister un acte de naissance</div>
                        <div className="underline"></div>  
                    </div>
                </div>
                
                <form action="submit_naissance.php" method="post">
                    <div className="form-group">
                        <label for="nom-enfant">Nom de l'enfant:</label>
                        <input type="text" id="nom-enfant" name="nom_enfant" className="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="prenom-enfant">Prénom de l'enfant:</label>
                        <input type="text" id="prenom-enfant" name="prenom_enfant" className="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="date-naissance">Date de naissance:</label>
                        <input type="date" id="date-naissance" name="date_naissance" className="text"  required/>
                    </div>
                    <div className="form-group">
                        <label for="lieu-naissance">Lieu de naissance:</label>
                        <input type="text" id="lieu-naissance" name="lieu_naissance"  className="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="nom-parent">Nom du parent:</label>
                        <input type="text" id="nom-parent" name="nom_parent"  className="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="prenom-parent">Prénom du parent:</label>
                        <input type="text" id="prenom-parent" name="prenom_parent"  className="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="adresse-parent">Adresse du parent:</label>
                        <input type="text" id="adresse-parent" name="adresse_parent" className="text" required/>
                    </div>
                    <div className="form-group">
                        <label for="contact-parent">Contact du parent:</label>
                        <input type="text" id="contact-parent" name="contact_parent"  className="text" required/>
                    </div>
                    <button type="submit">Enregistrer</button>
                </form>
            </main>
            <footer>
                <h3>Contact</h3>
                <p>Adresse: 03BP111 cotonou &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Téléphone: 01 02 03 04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: mairie@cotonou.fr</p>
                <p>Confidentialité | Mentions légales</p>
            </footer>
        </body>
    )
}
export default Naissance;