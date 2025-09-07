'use client'
import React, { useState, useRef, useEffect } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

const Testimonials = () => {
  const videoRef = useRef(null);
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
  const testimonials = [
    {
      id: 1,
      name: 'Ruchika Ramteke',
      image: '/images/testimonials/1.png', // Using numbered image from public folder
      text: "Enrolling at Aerie Academy for my 'GATE 2024 Architecture and Planning exam' was a game-changer. Their organized and easy-to-understand study sessions, helpful teachers, and personalized guidance really helped me a lot. I want to thank Aerie Academy for all their support and assistance. Without them, achieving AIR 188 wouldn't have been possible."
    },
    {
      id: 2,
      name: 'Swati',
      image: '/images/testimonials/2.png', // Using numbered image from public folder
      text: "The journey with Aerie Architecture has been great. The recorded video lectures are as effective as the learning live classes as each and every detail is covered in the classes. The revision classes before the exam is a plus point. It covers all the important concepts in a short span of time. All in all the classes helped me a lot to bring discipline to my preparation for GATE 2024 and I thank all the faculty that helped me get closer to goal."
    },
    {
      id: 3,
      name: 'Ishika Jain',
      image: '/images/testimonials/3.png', // Using numbered image from public folder
      text: "I wanted to express my sincere gratitude for the exceptional support and guidance I've received during my preparation for the GATE exam. The diverse range of knowledgeable teachers for different subjects has been instrumental in enhancing my understanding and boosting my confidence.Your online platform has provided a conducive environment for effective learning, and I am truly grateful for the invaluable resources and insightful sessions. Thank you for playing a crucial role in my preparation journey."
    },
    {
      id: 4,
      name: 'Sonal',
      image: '/images/testimonials/4.png', // Using numbered image from public folder
      text: "Hi I'm Sonal Tanpure and I joined Aerie academy for GATE 2025. Thanks to them, I secured AIR 386 rank, with a score of 546.The teachers here explained even the toughest concepts in a way that was easy to understand. Their focus on important topics really helped me prioritize my studies. Their study materials were also excellent. I felt much more confident going into the exam as I followed the preparation strategies they shared, which helped me structure my studies well, revise faster, and even manage my time in the best way possible.Definitely recommend it to anyone serious about cracking the GATE for Architecture."
    },
    {
      id: 5,
      name: 'Sreejita',
      image: '/images/testimonials/5.png', // Using numbered image from public folder
      text: "I recently attended the revision course by Aerie Architecture, and I'm thrilled to say that it made a significant impact on my preparation. The course helped me gain confidence in the final stretch, clarifying my doubts and reinforcing key concepts. The revision materials were comprehensive and well-structured, making it easier for me to focus on areas that needed improvement. Thank you, Aerie Architecture, for providing a valuable resource that contributed to my success!."
    },
    {
      id: 6,
      name: 'Krish',
      image: '/images/testimonials/6.png', // Using numbered image from public folder
      text: "It was a great experience for me at Aerie Academy during my preparation for Gate 2025! The best part of the academy was our teachers who not only guided us throughout the year but personally interacted with us from time to time to remove every fear! Whether it was numericals or revision they kept us always motivated and helped us with the strategies to remove them! Revision classes, extra notes,attention to each student and going along with us in our journey were highly knowledgeable things that made us cross the line!"
    },
    {
      id: 7,
      name: 'Krutika Rajput',
      image: '/images/testimonials/7.png', // Using numbered image from public folder
      text: "Firstly I connected with Parul ma'am, she was very friendly and her guidance was very precise on how to choose a course and the right strategy for exam.The Faculty was very thorough and patient, taught every topic in depth. The team is great, Thank you for the amazing learning experience."
    },
    {
      id: 8,
      name: 'Pooja Godara',
      image: '/images/testimonials/8.png', // Using numbered image from public folder
      text: "There test series, study material is best and facilities are best and cooperative too they start teaching you from basics to advance."
    },
    {
      id: 9,
      name: 'Sohini',
      image: '/images/testimonials/9.png', // Using numbered image from public folder
      text: "It was my second time taking this course and I definitely had a great experience with all the faculties. Starting with concept explanations, understanding, practicing PYQ everything was done precisely. I hope to give the exam with a calm mind. Overall a great experience."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerView = 4.5;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerView);

  const nextSlide = () => {
    if (currentIndex < testimonials.length - testimonialsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Hear from our students
        </h2>

        <div className="flex flex-col md:flex-row gap-4 items-stretch">
          {/* Left: Video Section */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[500px] overflow-hidden">
            <video
              // ref={videoRef}
              src="/student testimonial.mp4"
              loop
              muted
              playsInline
              controls
              poster="/VideoCapture_20250724-210547.jpg"
              className="w-3/4 h-full object-cover shadow-lg rounded-lg ml-[50px]"
            />
          </div>
          {/* Right: Vertical Testimonial Carousel */}
          <div className="relative w-full md:w-1/2 h-[500px] overflow-hidden">
            {/* Top Arrow */}
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={`absolute top-0 left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              <ChevronUp className="w-5 h-5 text-gray-700" />
            </button>

            {/* Carousel Content */}
            <div className=" overflow-hidden">
              <div
                className="transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateY(-${(100 / testimonialsPerView) * currentIndex
                    }%)`,
                  height: `${(testimonials.length * 100) / testimonialsPerView}%`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className="px-3 mb-6 sm:mb-8 lg:mb-10 w-full flex justify-center"
                    style={{ height: `${100 / testimonialsPerView}%` }}
                  >
                    <div className="h-[300px] w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col max-h-[500px] overflow-y-auto">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              const target = e.currentTarget;
                              target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(
                                ' ',
                                '+'
                              )}&background=random&color=fff`;
                            }}
                          />
                        </div>
                        <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed flex-grow overflow-y-auto">
                        "{testimonial.text}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Arrow */}
            <button
              onClick={nextSlide}
              disabled={currentIndex >= testimonials.length - testimonialsPerView}
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-10 h-10 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition ${currentIndex >= testimonials.length - testimonialsPerView
                ? 'opacity-50 cursor-not-allowed'
                : ''
                }`}
            >
              <ChevronDown className="w-5 h-5 text-gray-700" />
            </button>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-6 absolute bottom-[-40px] left-1/2 -translate-x-1/2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * testimonialsPerView)}
                  className={`w-3 h-3 mx-1 rounded-full ${index === Math.floor(currentIndex / testimonialsPerView)
                    ? 'bg-blue-500'
                    : 'bg-gray-300'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
