import React from "react";
import '../styles/Skills.css';

function Skills() {
    const skills = {
        "Langages de Programmation": [
            "JavaScript", "Python", "C#", "C/C++", "Java"
        ],
        "Architectures": [
            "MicroService", "MVC", "Singleton", "Builder", "Factory"
        ],
        "Web": [
            "HTML", "CSS3", "REST API", "Bootstrap"
        ],
        "Frameworks et Bibliothèques": [
            ".NET", "ASP.NET Core", "Entity Framework", "Spring Boot",
            "Hibernate", "Angular", "React", "SignalR"
        ],
        "Bases de Données": [
            "MySQL", "SQL Server", "NoSQL"
        ]
    };

    return (
        <section id="skills" className="skills">
            <h2>Compétences</h2>
            <div className="skills-container">
                {Object.entries(skills).map(([category, items], index) => (
                    <div key={index} className="skills-category">
                        <h3>{category}</h3>
                        <ul>
                            {items.map((item, itemIndex) => (
                                <li key={itemIndex}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
