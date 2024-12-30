import React from "react";
import '../styles/Projects.css';

function Projects() {
    const Projects = [
        {
            title: "Gestion des Stocks",
            description: "Une solution complète pour la gestion des stocks, des commandes et des fournisseurs pour les petites et moyennes entreprises."
        },
        {
            title: "Allo Service",
            description: "L'objectif principal de cette plateforme est de faciliter la connexion entre les artisans et la main-d'œuvre marocaine d'une part, et les clients potentiels d'autre part."
        },
        {
            title: "Portfolio",
            description: "Un portfolio interactif construit avec React, mettant en avant mes projets et compétences en développement web, offrant une expérience utilisateur fluide et statice."
        }
    ];

    return (
        <section id="projects" className="projects">
            <h2>Mes Projets</h2>
            <div className="project-list">
                {Projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
