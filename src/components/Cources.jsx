import React, { useState } from "react";
import { motion } from "framer-motion";
import EnquiryModal from './EnquiryModal';

const courses = [
  {
    title: "NATA + JEE B.Arch",
    oldPrice: "₹29,999",
    newPrice: "₹20,999",
    features: [
      "Live + Recorded Classes",
      "Study Materials & E-Books",
      "One-on-One Mentorship",
      "College Counseling after Result",
    ],
    tag: "Best Seller",
    color: "from-blue-500 to-indigo-600",
    image: "./images/Courses/Course 4.png",
    duration: "12 months",
    students: "1200+ enrolled",
    rating: 4.8,
  },
  {
    title: "NATA",
    oldPrice: "₹24,999",
    newPrice: "₹17,999",
    features: [
      "Live + Recorded Classes",
      "Study Materials & E-Books",
      "One-on-One Mentorship",
      "College Counseling after Result",
    ],
    tag: "Popular",
    color: "from-pink-500 to-rose-600",
    image: "./images/Courses/Course 2.jpg",
    duration: "10 months",
    students: "950+ enrolled",
    rating: 4.7,
  },
  {
    title: "JEE B.Arch",
    oldPrice: "₹24,999",
    newPrice: "₹17,999",
    features: [
      "Live + Recorded Classes",
      "Study Materials & E-Books",
      "One-on-One Mentorship",
      "College Counseling after Result",
    ],
    tag: "Limited Offer",
    color: "from-green-500 to-emerald-600",
    image: "./images/Courses/Course 1.jpg",
    duration: "8 months",
    students: "800+ enrolled",
    rating: 4.6,
  },
  {
    title: "UCEED",
    oldPrice: "₹19,999",
    newPrice: "₹14,999",
    features: [
      "Live + Recorded Classes",
      "Study Materials & E-Books",
      "One-on-One Mentorship",
      "College Counseling after Result",
    ],
    tag: "New",
    color: "from-purple-500 to-violet-600",
    image: "./images/Courses/Course 3.jpg",
    duration: "9 months",
    students: "600+ enrolled",
    rating: 4.8,
  },
];

const Courses = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <section className="py-16 bg-gradient-to-b from-blue-50 to-indigo-50 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="mb-8">
            <p className="text-lg text-gray-700">Why Choose Our Programs?</p>
            <h2 className="text-3xl font-semibold text-black">Our Latest Courses</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -10 }}
                onHoverStart={() => setHoveredCard(idx)}
                onHoverEnd={() => setHoveredCard(null)}
                className="relative rounded-2xl shadow-xl bg-white backdrop-blur-md overflow-hidden border border-white/10 group transition-all duration-300"
              >
                {/* Tag */}
                {/* <span className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full z-10 ${course.tag === "Best Seller" ? "bg-yellow-400 text-black" :
                  course.tag === "Popular" ? "bg-pink-500 text-white" :
                    course.tag === "Limited Offer" ? "bg-green-500 text-white" :
                      "bg-purple-500 text-white"
                  }`}>
                  {course.tag}
                </span> */}

                {/* Discount badge */}
                {/* <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md z-10">
                {Math.round((parseInt(course.oldPrice.replace(/\D/g, '')) - parseInt(course.newPrice.replace(/\D/g, ''))) / parseInt(course.oldPrice.replace(/\D/g, '')) * 100)}% OFF
              </div> */}

                {/* Image with gradient overlay */}
                <div className="h-50 w-full overflow-hidden relative">
                  <div className={`absolute inset-0  z-10`}></div>
                  <img
                    src={course.image}
                    alt={course.title}
                    className="h-full w-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Rating badge */}
                  <div className="absolute bottom-3 left-3 bg-black bg-opacity-70 text-white text-xs font-medium px-2 py-1 rounded-full z-20 flex items-center">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {course.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">{course.title}</h3>

                  {/* <div className="flex items-center text-sm text-gray-500 mb-3">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  {course.duration}
                </div> */}

                  {/* <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  {course.students}
                </div> */}

                  {/* <div className="flex items-center mb-4">
                  <p className="text-sm text-gray-400 line-through mr-2">
                    {course.oldPrice}
                  </p>
                  <p className="text-2xl font-bold text-indigo-600">
                    {course.newPrice}
                  </p>
                </div> */}

                  <ul className="text-sm text-gray-600 mb-6 space-y-2">
                    {course.features.map((feature, fIdx) => (
                      <motion.li
                        key={fIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: fIdx * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full bg-gradient-to-r ${course.color} text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg`}
                >
                  Enroll Now
                </motion.button> */}
                </div>
              </motion.div>
            ))}
          </div>
            <button
              onClick={openModal}
              className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 transition-colors shadow-lg mt-6"
            >
              BOOK FREE DEMO
            </button>

        </div>
      </section>
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Courses;