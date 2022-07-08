
import Link from "next/link";

function SuggestionPostsCard({post}){
    return (
        <li className="py-3 list-post w-100 list-unstyled m-0 border-bottom border-light">
            <div className={`row`}>
                <div className="col-3">
                    <div className="image">
                        <Link href={post.url}>
                            <a className="d-block m-auto">
                                <img src={`${post.avatar_url}?width=75&height=75`}
                                     className="border-radius-theme-2 overflow-hidden"
                                     width="75px"
                                     height="75px"
                                     alt={post.title}/>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="col-9">
                    <div className="content px-3 h-100 d-grid align-content-between justify-content-start">
                        <div>
                            <Link href={post.url}>
                                <a className={`text-decoration-none text-dark`}>
                                    <h5 className="font-16">
                                        {post.title}
                                    </h5>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>


        </li>
    )
}

export default SuggestionPostsCard;