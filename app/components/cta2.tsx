import React from "react";

const CTA2: React.FC = () => {
    return (
        <div style={styles.container} className="mt-20" data-aos="fade-up">
            <h2 style={styles.heading}>Join Us Today!</h2>
            <p style={styles.paragraph}>Sign up now and start enjoying exclusive benefits and features.</p>
            <button style={styles.button} onClick={() => alert("Thank you for joining!")}>
                Get Started
            </button>
        </div>
    );
};

const styles = {
    container: {
        textAlign: "center" as "center",
        padding: "20px",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    heading: {
        fontSize: "32px",
        marginBottom: "10px",
        color: "#1c5a6c",
        fontWeight: "bold" as "bold",
    },
    paragraph: {
        fontSize: "16px",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "16px",
        color: "#fff",
        backgroundColor: "#1c5a6c",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 0.3s ease",
        ":hover": {
            transform: "scale(1.2)",
        }
    },
};

export default CTA2;