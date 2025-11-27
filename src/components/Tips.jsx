import React from "react";
import "./Tips.css";

export default function Tips() {
    const tipsList = [
        {
            title: "Feed Properly",
            img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=60",
            desc: "Give balanced nutrition to your pets for healthy growth."
        },
        {
            title: "Regular Exercise",
            img: "https://images.unsplash.com/photo-1561948955-5702c8d8dcf5?auto=format&fit=crop&w=800&q=60",
            desc: "Daily walks and playtime keep pets active and happy."
        },
        {
            title: "Regular Vet Checkup",
            img: "https://images.unsplash.com/photo-1601758123927-4d3e17d3df43?auto=format&fit=crop&w=800&q=60",
            desc: "Ensure timely vaccinations and checkups."
        },
    ];

    return (
        <div className="tips-container">
            <h1>Pet Care Tips</h1>
            <div className="tips-grid">
                {tipsList.map((tip, idx) => (
                    <div key={idx} className="tip-card">
                        <img src={tip.img} alt={tip.title} />
                        <h3>{tip.title}</h3>
                        <p>{tip.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}