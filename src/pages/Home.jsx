import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import Hero from "../Assets/lnct_community.jpg"; // Ensure this path is correct
import MediaCard from "../Component/Cards";
import Cardimg1 from "../Assets/lnct_event.jpg";
import Cardimg2 from "../Assets/lnct_event1.jpg";
import Cardimg3 from "../Assets/lnct_event2.jpg";
import Cardimg4 from "../Assets/lnct_event3.jpg";

const cardData = [
    {
        image: Cardimg1,
        title: "Donkey",
        description: "Lizards are a widespread group of squamate reptiles, with over 6,000 species.",
    },
    {
        image: Cardimg2,
        title: "Another Animal",
        description: "This is another description for a different card.",
    },
    {
        image: Cardimg3,
        title: "Yet Another Animal",
        description: "This card features a different kind of animal.",
    },
    {
        image: Cardimg4,
        title: "Final Animal",
        description: "This is the last card description.",
    },
];

function Home() {
    return (
        <div>
            <Navbar />
            <div style={{ position: 'relative', width: '100%', marginTop: '-50px' }}>
                <img 
                    src={Hero} 
                    alt="Community" 
                    style={{ width: '100%', height: '60vh', objectFit: 'cover' }} 
                />
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    textAlign: 'center',
                    padding: '20px',
                }}>
                    <h1>Your Overlay Text Here</h1>
                    <p>Some additional description can go here.</p>
                </div>
            </div>
            <div style={{ padding: "20px", marginBottom: "150px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                {cardData.map((card, index) => (
                    <MediaCard 
                        key={index} // Use a unique key, like an index or an id if available
                        image={card.image} 
                        title={card.title} 
                        description={card.description} 
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Home;
