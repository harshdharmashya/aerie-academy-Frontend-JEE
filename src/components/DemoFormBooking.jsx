import React, { useState } from 'react';
import axios from 'axios';

const DemoBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [validationMsg, setValidationMsg] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const gtag_report_conversion = (url) => {
    const callback = () => {
      if (typeof url !== 'undefined') {
        window.location = url;
      }
    };
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16866101157/_FW8CODonrYaEKWPseo-',
        'event_callback': callback
      });
    }
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (validationMsg[name]) {
      setValidationMsg((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) errors.email = 'Please enter your email.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Invalid email address.';
    if (!formData.phone.trim()) errors.phone = 'Please enter your phone number.';
    else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, '')))
      errors.phone = 'Phone number must be 10 digits.';
    setValidationMsg(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(
        `https://aerie-academy-backend.vercel.app/api/contact`,
        formData
      );

      localStorage.setItem('userEmail', formData.email);
      setSubmitStatus({
        success: true,
        message: 'Thank you for booking a free demo class!',
      });

      setFormData({ name: '', email: '', phone: '' });
      gtag_report_conversion();
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="flex justify-center items-center h-[70vh] bg-white text-center px-4 py-5 pb-0 mt-[80px]">
      <div>
        <h2 className="text-black text-2xl sm:text-3xl font-semibold">
          Book Your Free Demo Class Now!
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-[90vw] sm:w-[430px] rounded-full px-4 py-2 border text-gray-600 text-lg focus:outline-none focus:border-gray-400 ${
                validationMsg.name ? 'border-red-500' : ''
              }`}
            />
            {validationMsg.name && (
              <p className="text-sm text-red-500 mt-1">{validationMsg.name}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Contact No."
              value={formData.phone}
              onChange={handleChange}
              className={`w-[90vw] sm:w-[430px] rounded-full px-4 py-2 border text-gray-600 text-lg focus:outline-none focus:border-gray-400 ${
                validationMsg.phone ? 'border-red-500' : ''
              }`}
            />
            {validationMsg.phone && (
              <p className="text-sm text-red-500 mt-1">{validationMsg.phone}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-[90vw] sm:w-[430px] rounded-full px-4 py-2 border text-gray-600 text-lg focus:outline-none focus:border-gray-400 ${
                validationMsg.email ? 'border-red-500' : ''
              }`}
            />
            {validationMsg.email && (
              <p className="text-sm text-red-500 mt-1">{validationMsg.email}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-600 mt-[20px] text-white hover:bg-indigo-700 px-8 py-2 rounded-[50px] font-medium text-lg inline-flex items-center gap-2 transition-colors shadow-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Submitting...' : 'BOOK FREE DEMO'}
          </button>
        </form>

        {submitStatus && (
          <p
            className={`mt-4 text-base font-medium ${
              submitStatus.success ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {submitStatus.message}
          </p>
        )}
      </div>
    </section>
  );
};

export default DemoBookingForm;
