import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./Home.css";

export default function Home() {
    const navigate = useNavigate();

    const pets = [
        {
            name: "Dog",
            img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=60",
            route: "/dogs",
        },
        {
            name: "Cat",
            img: "https://www.rover.com/blog/wp-content/uploads/iStock-1312755696-960x540.jpg",
            route: "/cats",
        },
        {
            name: "Bird",
            img: "https://sniffingouthome.org/wp-content/uploads/2010/08/p1010349.jpg",
            route: "/birds",
        },
        {
            name: "Rabbit",
            img: "https://media.istockphoto.com/id/506853536/photo/two-rabbits.jpg?s=612x612&w=0&k=20&c=Gf2lpg_WZt7jJhSs86K2qoZWhjLnC4vQoR6weIXpmko=",
            route: "/rabbits",
        },
    ];

    return (
        <div className="home-container">
            <Navbar />

            {/* Hero Section */}
            <div className="hero">
                <div className="overlay"></div>
                <div className="hero-content">
                    <h1>Find Your Perfect Pet 🐾</h1>
                    <p>
                        "Saving one animal will not change the world, but surely for that one
                        animal, the world will change."
                    </p>
                    <p>Explore dogs, cats, birds, rabbits and more. Give them a loving home.</p>
                </div>
            </div>

            {/* Pets Section */}
            <section className="pets-section">
                <h2>Types of Pets</h2>
                <div className="pets-grid">
                    {pets.map((pet) => (
                        <div key={pet.name} onClick={() => navigate(pet.route)} className="pet-card">
                            <img src={pet.img} alt={pet.name} />
                            <h3>{pet.name}</h3>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}