
import PostSwiperSliderCard from "./postSwiperSliderCard";
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {BsBookmarks} from "react-icons/bs";


const PostSwiperSlider = ({posts, title = "", slidesPerView = 3}) => {
    return (
        <div className={`container py-4`}>
            <div className={`mb-4`}>
                <div className={`row`}>
                    <h3 className={`font-18 mb-3`}>
                        <BsBookmarks/>
                        {title}
                    </h3>
                </div>
                <Swiper spaceBetween={20}
                        slidesPerView={slidesPerView}
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        navigation
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 1,
                                spaceBetween: 30
                            },
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            },
                            // when window width is >= 980
                            980: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            }
                        }}
                        pagination={{clickable: true}}
                >
                    {/* eslint-disable-next-line react/jsx-key */}
                    {posts.map((post) => <SwiperSlide><PostSwiperSliderCard post={post}/></SwiperSlide>)}
                </Swiper>

            </div>
        </div>
    );
};

export default PostSwiperSlider;