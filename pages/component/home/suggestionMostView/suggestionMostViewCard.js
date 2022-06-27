import {BsBookmarks} from "react-icons/bs";
import {SwiperSlide} from "swiper/react";
import PostSwiperSliderCard from "../swiper/postSwiperSliderCard";
import Link from "next/link";

function SuggestionMostViewCard({post}) {
    const categories = post.categories;
    return (
        <>
            <li className="section-box px-2 py-3 shadow-sm border-radius-theme-2 list-post w-100 ">
                <div className="image">
                    <Link href={post.url}>
                        <a>
                            <img src={`${post.avatar_url}?width=150&height=150`}
                                 width="150px"
                                 height="150px"
                                 alt={post.title}/>
                        </a>
                    </Link>

                </div>
                <div className="content px-2 d-grid align-content-between">
                    <div>
                        <Link href={post.url}>
                            <a>
                                <h5 className="font-18">
                                    {post.title}
                                </h5>
                            </a>
                        </Link>
                        <div className="my-2">
                            <p className="font-12 p-2 text-secondary">
                                {post.short_description}
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="post-card-info">
                            <div className="list-inline">
                                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                <a href="/"
                                   className="d-inline-block">
                                    <img src="/images/Three.jpg"
                                         className={`img-thumbnail`}
                                         width="32px"
                                         height="32px"
                                         alt=""/>
                                </a>
                                {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                                <a href="/"
                                   className="text-secondary d-inline-block font-12">
                                    بانی ارز دیجیتال
                                </a>
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
                                                                className="categorie font-9">
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
            </li>
        </>
    )
}

export default SuggestionMostViewCard;