import React from "react";
import { Link } from "react-router-dom";
import './accueil.css';
import Logo from '../Assets/logo.png'
import Naissance from '../Assets/naissance.jpg'
import Mariage from '../Assets/mariage.jpg'
import Terrain from '../Assets/terrain.jpg'


const Accueil = () => {
    return(
        <body>
            <header>
                <div className="logo">
                    <img src={Logo} alt="Logo Mairie"/>
                </div>
                <nav>
                    <ul>
                        <li><Link to="accueil.html">Accueil</Link></li>
                        <li><Link to="naissance.html">Naissance</Link></li>
                        <li><Link to="#">Mariage</Link></li>
                        <li><Link to="#">Terrain</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section className="presentation">
                    <h1>Bienvenue à la Mairie de Cotonou <br/> Votre application de gestion des actes de déclaration</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid nisi amet officiis nulla magni alias unde suscipit perspiciatis veniam autem, aliquam dolorem iste atque porro nemo! Praesentium cumque fugiat quo!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam dicta nesciunt numquam magnam accusamus alias maiores, natus deserunt necessitatibus ad molestiae eos. Suscipit autem fuga nisi quod quisquam deserunt voluptatibus.
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur eos numquam id laborum quos officia minima. Beatae rem harum dolorem, delectus deserunt incidunt iure quam, ut iste, modi ullam officiis.Texte de présentation de la mairie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                    </p>
                </section>
                <h3>Nos rubriques</h3>
                <section className="services">
                    <div className="service">
                        <h2>Enregistrer un Acte de naissance</h2>
                        <img src={Naissance} alt="Acte de naissance"/>
                    </div>
                    <div className="service">
                        <h2>Enregistrer un Acte de mariage</h2>
                        <img src={Mariage} alt="Acte de mariage"/>
                    </div>
                    <div className="service">
                        <h2>Enregistrer un Acte de Vente de terrain</h2>
                        <img src={Terrain} alt="Acte de Vente de terrain"/>
                    </div>
                </section>
            </main>
            <footer>
                <h3>Contact</h3>
                <p>Adresse: 03BP111 cotonou &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Téléphone: 01 02 03 04&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Email: mairie@cotonou.fr</p>
                <p>Confidentialité | Mentions légales</p>
            </footer>
        </body>
    )
}

export default Accueil;