import {BsBookmarks} from "react-icons/bs";
import {SwiperSlide} from "swiper/react";
import SuggestionMostViewCard from "./suggestionMostViewCard";
import PaginationList from "../../paginationList";

function SuggestionMostView({posts,meta = [], title = ""}) {
    console.log(meta)
    return (
        <>
            <div className={`container pb-4 mb-4 ps-0`}>
                {
                    title != ""
                        ? (
                            <div className={`row`}>
                                <h3 className={`font-18 mb-3`}>
                                    <BsBookmarks/>
                                    {title}
                                </h3>
                            </div>
                        )
                        : <></>
                }

                <ul className="widget-latest-posts p-0">
                    {/* eslint-disable-next-line react/jsx-key */}
                    {posts?.map((post) => <SuggestionMostViewCard post={post}/>)}
                </ul>

                { meta[0] != null ? <PaginationList list={meta}/> : <></>}

            </div>
        </>
    )
}

export default SuggestionMostView;