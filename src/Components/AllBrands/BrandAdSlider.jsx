import React from 'react';
// import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './sliderCss.css';

const BrandAdSlider = ({ advertisementProduct }) => {


    return (
        <div className='md:p-8'>
            <div className='  '>
                <div className=''>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper max-h-[60vh]  w-full"
                    >
                        {
                            advertisementProduct.map((pro, ind) => (

                                <SwiperSlide className='w-full'>
                                    <div className='grid grid-cols-2   '>
                                        <div className='flex flex-col justify-center items-center'>
                                            <p className="text-xl font-bold text-blue-700">  {pro?.productName}</p>
                                            <p className='text-3xl font-bold my-4'>
                                                Get on
                                                <span className='text-pink-800'> {pro?.discount}% </span>
                                                discount
                                            </p>
                                            <button className='bg-blue-500 hover:bg-blue-700 px-3 py-2 rounded-md text-white '>Show More</button>
                                        </div>
                                        <div className='flex flex-col  items-center'>

                                            <img className='w-[300px]  h-[300px]' src={pro.image} alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))
                        }

                    </Swiper>
                </div>

            </div>
        </div>
    );
};

export default BrandAdSlider;