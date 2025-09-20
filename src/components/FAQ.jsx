import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

const FAQ = () => {
  // State to track which FAQ item is open
  const [openItem, setOpenItem] = useState(0); // First item open by default
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // FAQ data
  const faqItems = [
    {
      question: "What is the difference between the JEE Main B.Arch Paper, NATA, and UCEED?",
      answer: "These are the three main entrance exams for design and architecture programs in India. JEE Main Paper 2 (B.Arch) is for admission into Bachelor of Architecture programs at NITs, IITs, and other centrally funded technical institutions, with a strong focus on Mathematics and Aptitude. NATA (National Aptitude Test in Architecture) is the primary gateway for B.Arch admission into colleges across the rest of India, with a greater emphasis on drawing and architectural aptitude. UCEED (Undergraduate Common Entrance Examination for Design) is specifically for admission to Bachelor of Design (B.Des) programs at IITs and some other prestigious design colleges."
    },
    {
      question: "Which exam should I focus on?",
      answer: "It's highly recommended to prepare for all three exams, as they share a lot of common ground in terms of aptitude and design skills. The JEE Main Paper 2 and NATA are both essential for B.Arch admissions, while UCEED is your path to a B.Des degree. Our course is designed to cover the syllabi for all three, giving you the flexibility to apply to a wider range of colleges and courses."
    },
    {
      question: "Is the syllabus the same for all three exams?",
      answer: "No, the syllabi have different emphases, though they do overlap. All three exams test your general aptitude (logical reasoning, mental ability) and design skills. However, JEE Main B.Arch has a strong focus on Mathematics, NATA emphasizes a range of drawing skills, and UCEED focuses on design aptitude and creative ability. Our course covers the unique requirements of each exam."
    },
    {
      question: "How is the drawing section of the exams covered?",
      answer: "For the drawing sections of both JEE Main B.Arch and NATA, our course includes dedicated live sessions and assignments. We provide detailed feedback on your sketches, focusing on key skills like perspective drawing, composition, and rendering. For UCEED, the focus is on creative and design-based sketching exercises that test your problem-solving abilities."
    },
    {
      question: "What is the duration of the JEE B.Arch 2026 Course?",
      answer: "The course is designed to be valid until the JEE Main April Attempt exam, ensuring comprehensive preparation up to the exam date."
    },
    {
      question: "Who are the instructors for this course?",
      answer: "Our courses are led by experienced IITians, NATA toppers, and industry experts, providing in-depth knowledge and practical insights."
    },
    {
      question: "What study materials are provided?",
      answer: "You will receive a complete set of study materials, including detailed notes, practice questions, and access to our online video lectures and live classes. The materials are curated by subject matter experts to align with the latest exam patterns."
    },
    {
      question: "Are there live classes, and what if I miss one?",
      answer: "Yes, we offer live interactive classes. If you miss a session, recorded lectures are available for you to access at your convenience until the exam day."
    },
    {
      question: "How does the doubt-clearing process work?",
      answer: "We provide live one-on-one doubt-clearing sessions and mentorship from industry experts to address your queries promptly."
    },
    {
      question: "Are mock tests included in the course?",
      answer: "Absolutely! We conduct section-wise and topic-wise tests, along with full-length mock tests, to simulate the exam environment and boost your confidence."
    },
    {
      question: "Is there a community for peer interaction?",
      answer: "Yes, students can join our exclusive WhatsApp group to receive updates, share resources, and engage with fellow aspirants"
    },
    {
      question: "What are the payment options available?",
      answer: "We offer up to 20% discount based on merit and need, along with easy payment plans that allow you to pay in monthly installments."
    },
  ];

  // Toggle FAQ item
  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };



  return (
    <>
      <section id='faq' className="pt-[3rem] pb-[4rem] px-6 bg-gray-50 mb-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Got Questions? We Have Answers</h2>
            <p className="text-gray-600">Find answers to the most common questions about our JEE Paper 2 / NATA / UCEED program preparation courses</p>
          </div>

          <div className="space-y-4 mb-10">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                <button
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                  onClick={() => toggleItem(index)}
                  aria-expanded={openItem === index}
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  {openItem === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  )}
                </button>

                {openItem === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            onClick={openModal}
            className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-medium text-lg inline-flex items-center gap-2 transition-colors shadow-lg"
          >
            Book Free Demo
          </button>
        </div>
      </section>
      <EnquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default FAQ;