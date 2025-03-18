// import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./ReviewCard.css"; // Import the CSS file
import profile from "/profile.png";
import court from "/doubleCourt.png";
import star from "/Star.png";

const ReviewCard = () => {
  const reviews = [
    {
      id: 1,
      title: "Feedback from the CEO of Endeavour was fantastic.",
      description:
        "Team, I just wanted to say thank you again. The CEO of Endeavour and many others provided fantastic feedback on how well our team performed. He mentioned he had never seen the level of professionalism and skill that we demonstrated. Thank you for all the time and energy you put into making this a success.",
      rating: 5,
      name: "Ben",
      address: "Venue Manager",
      profile: `${profile}`,
    },
    {
      id: 2,
      title: "This is by far the most efficient team in the entire company!",
      description:
        "We've seen a remarkable improvement since bringing in Visionary Staffing. The team operates seamlessly every day, and we haven’t had to follow up on any tasks for the past few months. Truly exceptional service!",
      rating: 5,
      name: "Marcus",
      address: "General Manager",
      profile: `${profile}`,
    },
    {
      id: 3,
      title: "We got really good feedback from Wil.",
      description:
        "Hey guys we got really good feedback from Wil. He is really happy with the standard. Please keep working on it. Thank you.",
      rating: 5,
      name: "Area Manager",
      address: "SCS Group",
      profile: `${profile}`,
    },
    {
      id: 4,
      title: "Feedback from the CEO of Endeavour was fantastic.",
      description:
        "Team, I just wanted to say thank you again. The CEO of Endeavour and many others provided fantastic feedback on how well our team performed. He mentioned he had never seen the level of professionalism and skill that we demonstrated. Thank you for all the time and energy you put into making this a success.",
      rating: 5,
      name: "Ben",
      address: "Venue Manager",
      profile: `${profile}`,
    },
    {
      id: 5,
      title: "Feedback from the CEO of Endeavour was fantastic.",
      description:
        "Team, I just wanted to say thank you again. The CEO of Endeavour and many others provided fantastic feedback on how well our team performed. He mentioned he had never seen the level of professionalism and skill that we demonstrated. Thank you for all the time and energy you put into making this a success.",
      rating: 5,
      name: "Ben",
      address: "Venue Manager",
      profile: `${profile}`,
    },
    // Add more reviews as needed
  ];

  return (
    <div className="review-card-container px-4 py-8 sm:px-6 lg:px-8 lg:-bottom-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={{
          enabled: false,
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
            navigation: {
              enabled: true,
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card bg-white rounded-xl shadow-lg p-6 h-full flex flex-col justify-between">
              <div>
                <img src={court} className="w-10 mb-4" alt="Quote" />
                <h2 className="text-xl sm:text-2xl font-bold mb-4 line-clamp-2">
                  {review.title}
                </h2>
                <p className="text-sm sm:text-base mb-6 line-clamp-4">
                  {review.description}
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div>
                    <h3 className="font-semibold">{review.name}</h3>
                    <p className="text-sm text-gray-600">{review.address}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <img key={i} src={star} alt="Star" className="w-5 h-5" />
                    ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="mt-12">
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </div>
      </Swiper>
    </div>
  );
};

export default ReviewCard;
