import React from "react";
import Slider from "react-slick";

const Selection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
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
    { id: 1, image: '1.png' },
    { id: 2, image: '2.png' },
    { id: 3, image: '3.png' },
    { id: 4, image: '4.png' },
    { id: 5, image: '5.png' },
    { id: 6, image: '6.png' },
    { id: 7, image: '7.png' },
    { id: 8, image: '8.png' },
    { id: 17, image: '17.png' },
    { id: 10, image: '10.png' },
    { id: 11, image: '11.png' },
    { id: 12, image: '12.png' },
    { id: 13, image: '13.png' },
    { id: 14, image: '14.png' },
    { id: 15, image: '15.png' },
    { id: 16, image: '16.png' },
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
                  src={`../images/selection/${item.image}`} // Adjust the path as necessary
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
