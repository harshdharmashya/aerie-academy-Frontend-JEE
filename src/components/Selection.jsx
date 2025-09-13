import React from "react";
import Slider from "react-slick";

const Selection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const selection = [
    { id: 1, image: './images/Courses/Course 1.jpg' },
    { id: 2, image: './images/Courses/Course 2.jpg' },
    { id: 3, image: './images/Courses/Course 3.jpg' },
    { id: 4, image: './images/Courses/Course 4.png' },
  ];

  return (
    <section className="py-12 bg-blue-100 text-center">
      <div className="mb-8">
        <p className="text-lg text-gray-700">What We Have Done?</p>
        <h2 className="text-3xl font-semibold text-black">Our Latest Selections</h2>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        <Slider {...settings}>
          {selection.map((item) => (
            <div key={item.id} className="px-2">
              <div className="bg-white h-50 flex items-center justify-center rounded-lg shadow-md overflow-hidden">
                <img
                  src={`${item.image}`} // Adjust the path as necessary
                  alt={`Selection ${item.id}`}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-125"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Selection;
