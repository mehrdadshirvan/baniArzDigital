import {BsBookmarks} from "react-icons/bs";
import {SwiperSlide} from "swiper/react";
import SuggestionMostViewCard from "./suggestionMostViewCard";

function SuggestionMostView({posts, title = ""}) {
    return (
        <>

            <div className={`container py-4 mb-4`}>
                <div className={`row`}>
                    <h3 className={`font-18 mb-3`}>
                        <BsBookmarks/>
                        {title}
                    </h3>
                </div>
                <ul className="widget-latest-posts p-0">
                    {posts.map((post) => <SuggestionMostViewCard post={post}/>)}
                </ul>

            </div>
        </>
    )
}

export default SuggestionMostView;