import Head from "next/head";
import Header from "../include/header";
import Footer from "../include/footer";
import SideBarPostList from "../component/post/sideBarPostList";

function PostSinglePage({post,suggestionMostView= []}){
    return (
        <div id={`app`}>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.title}/>
            </Head>
            <Header />
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                        <div className={`row mb-4`}>
                            <article className={`card px-0 border-radius-theme-2 overflow-hidden`} id={`post-${post.id}`}>
                                <div className={`card-header bg-white text-start`}>
                                    <h1 className={`font-18 m-0 py-2`}> {post.title}</h1>
                                </div>
                                <img src={post.avatar_url}
                                     alt=""/>
                                <div className={`card-body line-height p-4`}  dangerouslySetInnerHTML={{__html: post.content}} />
                                <div className={`card-footer`}>
                                    <div className={`row`}>
                                        <div className={`col-sm-12`}>
                                            <span className={`m-0 `}>
                                                <span className="font-11">
                                                { post.release_at }
                                                </span>
                                            </span>
                                            <span className={`mx-1`}> | </span>
                                            <span className={`m-0 `}>
                                                <span className="font-11">Mehrdad shirvan</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <div>
                        </div>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>

                        <a href="#"
                           className="w-100 d-block mb-2 adv border-radius-theme-2 overflow-hidden">
                            <img src="/adv/adv-20.jpg"
                                 className="w-100 rounded" />
                        </a>
                        <a href="#"
                           className="w-100 d-block mb-2 adv  border-radius-theme-2 overflow-hidden">
                            <img src="/adv/adv-21.jpg"
                                 className="w-100 rounded" />
                        </a>

                        {
                            suggestionMostView.length > 0
                                ? (
                                    <div className="widget ">
                                        <div className="section-title">
                                            <h5>پیشنهادات</h5>
                                        </div>
                                        <ul className="widget-latest-posts">
                                            { suggestionMostView.map((post) => <SideBarPostList post={post}/>)}
                                        </ul>
                                    </div>
                                )
                                : null
                        }

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PostSinglePage;