import React, { useState } from 'react';
import axios from 'axios';
import { CircleChevronRight } from 'lucide-react';
const CallbackBar = (props) => {
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     if (!/^\d{10}$/.test(mobile)) {
    //         alert('Please enter a valid 10-digit mobile number.');
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         await axios.post('https://aerie-academy-backend.vercel.app/api/contact', { phone: mobile, name: 'Callback Lead', email: 'callback@noemail.com', }, { headers: { 'Content-Type': 'application/json' } });
    //         setSuccessMsg('Thank you! Our advisor will call you shortly.');
    //         setMobile('');
    //     } catch (error) {
    //         console.error('Error submitting number:', error);
    //         alert('Something went wrong. Please try again later.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] bg-gradient-to-r from-[#002D72] via-[#0066CC] to-[#00A3FF] shadow-xl z-50 text-white py-4 px-6 rounded-tl-2xl rounded-tr-2xl">
            <div className="max-w-5xl mx-auto flex flex-col items-center justify-center gap-3 text-center">
                {/* CTA Button */}
                <button
                    onClick={props.openModal}
                    className="flex items-center gap-2 px-6 sm:px-8 py-2 sm:py-2.5 text-white bg-emerald-500 hover:bg-emerald-600 font-semibold rounded-full transition duration-300 shadow-md"
                >
                    BOOK FREE DEMO
                    <CircleChevronRight className="w-5 h-5" />
                </button>

                {/* Success Message */}
                {successMsg && (
                    <p className="text-sm mt-1 text-white font-medium">
                        {successMsg}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CallbackBar;
