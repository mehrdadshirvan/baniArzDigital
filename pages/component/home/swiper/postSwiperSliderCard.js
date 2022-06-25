import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';
import Image from 'next/image';
import {TiChevronRight} from "react-icons/ti";

const PostSwiperSliderCard = ({post}) => {
    return (

        <div className={`card  border-radius-theme-2`}>
            <div>
                <div className={`p-2`}>
                    <Link href={post.url}>
                        <a title={post.title} className={`text-decoration-none`}>
                            <img src={post.avatar_url}
                                   alt={post.title}
                                   width="200px"
                                   height="200px"
                                   className={`w-100 border-radius-theme-2 overflow-hidden`}
                            />
                        </a>
                    </Link>
                </div>
            </div>
            <div className={`p-2`}>
                <p className={`pb-3`} style={{minHeight: '80px'}}>
                    <Link href={post.url}>
                        <a className={`text-decoration-none text-secondary font-15 text-justify`}
                           title={post.title}>
                            {post.title}
                        </a>
                    </Link>
                </p>
            </div>
        </div>

    );
};

export default PostSwiperSliderCard;