import Navbar from './Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Selection from './Selection';
import Team from './Team';
import FAQ from './FAQ';
import EnquiryModal from './EnquiryModal';
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { BookOpen, Sparkles, GraduationCap, Clock } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import AOS from "aos";
import "aos/dist/aos.css";
import PaymentPlans from './PaymentPlans';
import Testimonials from './Testimonials';
import DemoBookingForm from './DemoFormBooking';
import CallbackBar from './CallBackBar';

export default function About() {
    const videoRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            },
            {
                threshold: 0.5, // At least 50% of the video should be visible
            }
        );

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);
    useEffect(() => {
        const timer = setTimeout(() => {
            openModal()
        }, 20000);
        return () => clearTimeout(timer); // cleanup if component unmounts
    }, []);

    const features = useMemo(() => [
        {
            icon: GraduationCap,
            title: 'LIVE & INTERACTIVE CLASSES',
            delay: 200,
            color: '#FF5757' // Red
        },
        {
            icon: BookOpen,
            title: 'EXCLUSIVE STUDY MATERIAL',
            delay: 600,
            color: '#3B82F6' // Blue
        },
        {
            icon: Clock,
            title: '24/7 DOUBT SOLVING',
            delay: 1000,
            color: '#10B981' // Green
        },
        {
            icon: Sparkles,
            title: 'PROVEN TRACK RECORD',
            delay: 1400,
            color: '#F59E0B' // Amber
        }
    ], []);
    const allFeatures = [
        { img: '1.png', tittle: 'Live classes by IITians & Industry Experts', subTitle: 'Expert insights from professionals with proven results.' },
        { img: '2.png', tittle: 'Live Recorded Sessions', subTitle: 'Revisit lectures anytime to reinforce key concepts.' },
        { img: '3.png', tittle: '1000+ Practice Questions & Topic-wise Tests', subTitle: 'Strengthen fundamentals through comprehensive practice.' },
        { img: '4.png', tittle: 'Mocks & Exam Strategy Workshops', subTitle: 'Simulate exam conditions to build confidence quickly.' },
        { img: '5.png', tittle: 'Curated e-Books & Study Material', subTitle: 'Hand-picked resources to maximize your learning efficiency.' },
        { img: '6.png', tittle: 'Live One-on-One Doubt Solving', subTitle: 'Personal mentorship addressing your learning challenges.' },
        { img: '7.png', tittle: 'Previous Year GATE Solved Questions', subTitle: 'Master exam patterns through real question analysis.' },
        { img: '8.png', tittle: '1-on-1 Mentorship for Personalized Guidance', subTitle: 'Customized strategies for your unique learning journey.' },
    ]
    useEffect(() => {
        AOS.init({
            offset: 220, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000,
        }
        );
        AOS.refresh();
    }, [])
    return (
        <>
            <Navbar />
            <section style={{ background: "linear-gradient(to right, #0f172a, #4d71c5)" }} className="min-h-screen md:h-[110vh] flex justify-center items-center px-5 sm:px-10 text-center relative py-10">
                <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">
                    {/* Left Text Section */}
                    <div className="flex-1 w-full md:w-1/2 md:mt-[40px]">
                        <p className="text-[1.8rem] sm:text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] text-white leading-snug text-left">
                            Are you looking for {' '}
                            <span className="text-yellow-400 block">
                                <Typewriter
                                    words={[
                                        'structured',
                                        'supportive',
                                        'result-driven'
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                            program for GATE 2026 Architecture & Planning?
                        </p>

                        <p className="text-[1rem] sm:text-[1.1rem] md:text-[1.3rem] mt-4 text-white text-left">
                            Join 3000+ students who’ve trusted Aerie to crack IITs, NITs & SPAs
                        </p>

                        <button
                            onClick={openModal}
                            className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 rounded-full mt-6 font-medium text-base sm:text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
                        >
                            BOOK FREE DEMO
                        </button>
                    </div>

                    {/* Right Video Section */}
                    <div className="flex-1 w-full md:w-1/2 flex justify-center items-center ">
                        <div className="w-full  aspect-[9/16] rounded-xl overflow-hidden shadow-lg max-w-[360px] sm:max-w-[300px] md:max-w-[360px]">
                            <video
                                ref={videoRef}
                                src="/Captions_F51AC1.mp4"
                                loop
                                muted
                                playsInline
                                controls
                                className="w-full object-cover rounded-xl h-[500px] md:mt-8"
                            />
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="w-[95%] sm:w-4/5 bg-white rounded-xl overflow-hidden px-4 py-6 absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 shadow-[1px_3px_15px_gray]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 w-full">
                        {features.map((feature, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                <div
                                    data-aos="fade-up"
                                    className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-3 flex items-center justify-center rounded-full cursor-pointer"
                                    style={{
                                        background: `linear-gradient(135deg, ${feature.color}20, ${feature.color}40)`,
                                        boxShadow: `0 4px 14px 0 ${feature.color}30`
                                    }}
                                >
                                    {React.createElement(feature.icon, {
                                        size: 28,
                                        color: feature.color,
                                        strokeWidth: 1.5
                                    })}
                                </div>
                                <h3 className="text-xs sm:text-sm font-bold tracking-wide cursor-pointer">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <CallbackBar openModal={openModal} closeModal={closeModal}/>
            <DemoBookingForm />
            <Selection />
            <section id='features' className='min-h-screen text-center px-4 py-10 bg-white'>
                <div className="mb-8">
                    <p className="text-lg text-gray-700">Why You Should Choose Us?</p>
                    <h2 className="text-3xl font-semibold text-black">Why Aerie Academy?</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {allFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-[2px_7px_10px_gray] p-4 w-full h-full flex flex-col hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="mb-4">
                                <img
                                    src={`../images/features/${feature.img}`} // Adjust the path as necessary
                                    alt={feature.tittle}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800">{feature.tittle}</h3>
                            <p className="text-gray-600 mt-2">{feature.subTitle}</p>
                        </div>
                    ))}
                </div>
                <button
                    onClick={openModal}
                    className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
                >
                    BOOK FREE DEMO
                </button>
            </section>
            <Team />
            <PaymentPlans />
            {/* <Demo /> */}
            <Testimonials />
            <FAQ />
            <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    )
}
