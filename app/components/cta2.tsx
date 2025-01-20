import React from "react";

const CTA2: React.FC = () => {
    return (
        <div className="mt-20 text-center p-5 bg-white rounded-lg shadow-md" data-aos="fade-up">
            <h2 className="text-4xl mb-2 text-[#1c5a6c] font-bold">Join Us Today!</h2>
            <p className="text-lg mb-5">Sign up now and start enjoying exclusive benefits and features.</p>
            <button 
                className="px-5 py-2 text-lg text-white bg-[#1c5a6c] rounded-lg transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => alert("Thank you for joining!")}
            >
                Get Started
            </button>
        </div>
    );
};

export default CTA2;
