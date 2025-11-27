import React from "react";

export default function Dogs() {
    const dogs = [
        {
            name: "Bruno",
            img: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=60",
            desc: "A playful Labrador looking for a loving family."
        },
        {
            name: "Maya",
            img: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=60",
            desc: "A calm and gentle Golden Retriever."
        },
        {
            name: "Charlie",
            img: "https://k1-prod-lexipol.s3.us-east-2.amazonaws.com/brightspot/e4/44/808626b82b1a954a3a5438be9bd6/20210306-amx-us-news-homeless-beagle-gets-permanent-home-ha.jpg",
            desc: "An energetic Beagle who loves walks and is looking for a loving home."
        },
        {
            name: "Luna",
            img: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=800&q=60",
            desc: "A sweet Husky with bright blue eyes."
        }
    ];

    return (
        <div style={{ padding: "40px", textAlign: "center", backgroundColor: "#f9f9f9" }}>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "30px", color: "#333" }}>Adopt a Dog</h1>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px"
                }}
            >
                {dogs.map((dog, idx) => (
                    <div
                        key={idx}
                        style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.2s"
                        }}
                    >
                        <img
                            src={dog.img}
                            alt={dog.name}
                            style={{
                                width: "100%",
                                height: "250px",
                                objectFit: "cover",
                                display: "block",
                                backgroundColor: "#eee"
                            }}
                        />
                        <h3 style={{ margin: "15px 0", color: "#222" }}>{dog.name}</h3>
                        <p style={{ padding: "0 15px 20px", fontSize: "1rem", color: "#555" }}>{dog.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}