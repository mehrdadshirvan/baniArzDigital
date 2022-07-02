import {BsBookmarks} from "react-icons/bs";
import {SwiperSlide} from "swiper/react";
import PostSwiperSliderCard from "../swiper/postSwiperSliderCard";
import Link from "next/link";

function SuggestionMostViewCard({post}) {
    const categories = post.categories;
    return (
        <>
            <li className="bg-white mb-3 px-2 py-3 shadow-sm border-radius-theme-2 list-post w-100 list-unstyled m-0" key={post.id}>
                <div className={`row`}>
                    <div className="col-2">
                        <div className="image">
                            <Link href={post.url}>
                                <a className="d-block m-auto">
                                    <img src={`${post.avatar_url}?width=130&height=130`}
                                         className="border-radius-theme-2 overflow-hidden"
                                         width="130px"
                                         height="130px"
                                         alt={post.title}/>
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="col-10">
                        <div className="content px-2 h-100 d-grid align-content-between justify-content-start">
                            <div>
                                <Link href={post.url}>
                                    <a className={`text-decoration-none text-dark`}>
                                        <h5 className="font-18">
                                            {post.title}
                                        </h5>
                                    </a>
                                </Link>
                                <div className="my-2">
                                    <p className="font-12 p-2 text-secondary">
                                        {post.short_description != null ? post.short_description : ''}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <div className="post-card-info">
                                    <div className="list-inline">
                                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                        <Link href={post.user.url}>
                                            <a className="d-inline-block">
                                                <img src={`${post.user.avatar_url}?width=130&height=130`}
                                                     className={`img-thumbnail rounded-circle me-1`}
                                                     width="32px"
                                                     height="32px"
                                                     alt=""/>
                                            </a>
                                        </Link>
                                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                        <Link href={post.user.url}>
                                            <a className="text-secondary d-inline-block font-12 me-1">
                                                {post.user.name}
                                            </a>
                                        </Link>
                                        {
                                            categories != null && categories.length > 0
                                                ? (
                                                    <>
                                                        <span className="dot d-inline-block"></span>
                                                        {
                                                            categories.map((category) =>
                                                                // eslint-disable-next-line react/jsx-key
                                                                (<Link href={category.url}>
                                                                    <a
                                                                        title={category.title}
                                                                        className="badge bg-main text-decoration-none me-1 font-9">
                                                                        {category.title}
                                                                    </a>
                                                                </Link>)
                                                            )
                                                        }
                                                    </>
                                                )
                                                : (<></>)
                                        }

                                        <span className="dot d-inline-block"></span>
                                        <span className="font-12">{post.release_at_2}</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </li>
        </>
    )
}

export default SuggestionMostViewCard;