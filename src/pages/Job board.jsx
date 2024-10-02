import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";

function Job() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <Navbar />
            <h1 style={{ fontSize: '2rem', margin: '20px 0', color: '#333' }}>Job Opportunities</h1>
            <p style={{ fontSize: '1.2rem', margin: '10px 0', textAlign: 'center', maxWidth: '600px', lineHeight: '1.5' }}>
                Explore our latest job openings and join our dynamic team!
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                {['Software Engineer', 'Product Manager', 'UI/UX Designer'].map((job, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: '#f9f9f9',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            padding: '15px',
                            margin: '10px 0',
                            width: '80%',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.02)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <h2 style={{ margin: '0' }}>{job}</h2>
                        <p>
                            Join our team as a {job.toLowerCase()} and help us build amazing products.
                        </p>
                        <button
                            style={{
                                padding: '10px 15px',
                                borderRadius: '5px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                        >
                            Apply Now
                        </button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Job;
