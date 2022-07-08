import SuggestionPostsCard from "./suggestionPostsCard";

function SuggestionPosts({posts}){
    return (
        posts.length > 0
            ? (
                <div className="widget mb-4">
                    <div className="section-title">
                        <h5>پیشنهادات</h5>
                    </div>
                    <ul className="border-radius-theme-2 list-unstyled m-0 px-2 py-2 bg-white shadow-sm">
                        {/* eslint-disable-next-line react/jsx-key */}
                        {posts.map((post) => (<SuggestionPostsCard post={post}/>))}
                    </ul>
                </div>
            )
            : null
    )
}

export default SuggestionPosts;