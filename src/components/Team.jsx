import React from "react";
import Slider from "react-slick";

const Team = () => {
  const teachers = [
    {
      id: 1,
      image: '/1.png',
      name1:'Ar. Parul',
      name2:'Sharma',
      study1:'IIT',
      study2:'Kharagpur'
    },
    {
      id: 2,
      image: '/2.png',
      name1:'Ar. Kanishk',
      name2:'Sharma',
      study1:'IIT',
      study2:'Roorkee'
    },
    {
      id: 3,
      image: '/3.png',
      name1:'Ar. Riya',
      name2:'Varshney',
      study1:'MANIT',
      study2:'Bhopal'
    },
    {
      id: 4,
      image: '/4.png',
      name1:'Sidhhant',
      name2:'Asati',
      study1:'IIT',
      study2:'Kharagpur'
    },
    {
      id: 5,
      image: '/5.png',
      name1:'Ar. Ruchika',
      name2:'Sharma',
      study1:'CEPT',
      study2:''
    },
    {
      id: 6,
      image: '/6.png',
      name1:'Bhavya',
      name2:'Ary',
      study1:'SSC,',
      study2:'CGL'
    }
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
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

  return (
    <section id="team" className="py-12 bg-blue-100 text-center">
      <div className="mb-8">
        <p className="text-lg text-gray-700">How We Have done it?</p>
        <h2 className="text-3xl font-semibold text-black">Meet Our Experienced Team</h2>
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        <Slider {...settings}>
          {teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="px-2 w-full flex-shrink-0 flex-grow-0"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow text-center">
                {/* Square aspect ratio container for image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={teacher.image}
                    alt={`Teacher ${teacher.id}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `/api/placeholder/400/400`;
                    }}
                  />
                  <div className="absolute bottom-0 right-2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div className="bg-white text-center text-xs font-bold pt-2 leading-tight text-black h-1/2">
                      <div className="mt-1">{teacher.name1}</div>
                      <div className="text-[11px] font-semibold">{teacher.name2}</div>
                    </div>
                    <div className="bg-blue-500 text-white text-center text-sm font-bold py-1 h-1/2 leading-tight">
                      <div>{teacher.study1}</div>
                      <div>{teacher.study2}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </section>
  );
};

export default Team;
