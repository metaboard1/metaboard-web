'use client';

import { type FC } from "react";
import { teamMembers } from "@/appData";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";





const OurTeamSwiper: FC = () => {
    return (<>
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
                // nextEl: ".swiper-button-next-legal",
                // prevEl: ".swiper-button-prev-legal",
            }}
            pagination={{
                clickable: true,
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
                delay: 5500,
                disableOnInteraction: false,
            }}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            }}
            className="team-carousel"
        >
            {teamMembers.map((member) => (
                <SwiperSlide key={member.id}>
                    <div
                        className="relative rounded-2xl shadow-sm border-1 border-blue-600 hover:shadow-md transition-all duration-300 h-80 overflow-hidden mx-auto group bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})`, height: '400px', width: '300px' }}
                    >
                        {/* Bio Overlay - Shows on hover */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center flex-col justify-center p-4 pointer-events-none group-hover:pointer-events-auto">
                            <div className="text-center text-white">
                                <h3 className={"text-lg font-bold mb-2"}>
                                    {member.name}
                                </h3>
                                <p className="text-sm text-gray-300 mb-3">
                                    {member.role}
                                </p>
                                <p className="text-sm leading-relaxed">
                                    {member.bio}
                                </p>
                            </div>
                            <div className="flex justify-center mt-4 gap-3 z-10">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-transparent rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg cursor-pointer"
                                    aria-label={`${member.name} LinkedIn`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-white"
                                    >
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Member Info - Small overlay container at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-1 border-blue-600 mx-2 mb-2 p-2 rounded-lg group-hover:opacity-0 transition-opacity duration-300">
                            <div className="text-center">
                                <h3
                                    className={"text-base font-bold text-blue-600 mb-1"}
                                >
                                    {member.name}
                                </h3>
                                <p className="text-gray-600 text-sm mb-2">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </>);
}
export default OurTeamSwiper;