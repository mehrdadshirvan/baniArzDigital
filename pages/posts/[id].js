import Header from "../include/header";
import Head from 'next/head'
// import {TiCalendarOutline, TiPencil, TiTag} from "react-icons/md";
// import PostSwiperSlider from "../component/home/swiper/postSwiperSlider";
import Footer from "../include/footer";

function Post(props) {
    const {post} = props;
    return (
        <div id={`app`}>
            <Head>
                <title>{post.title}</title>
                <meta name="description" content={post.title}/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                        <div className={`row mb-4`}>
                            <div className={`card px-0`}>
                                <div className={`card-header`}>

                                    <h1 className={`font-18 `}> {post.title}</h1>
                                </div>
                                <div className={`card-body`}>
                                    {post.body}
                                    <br/>
                                </div>
                                <div className={`card-footer`}>
                                    <div className={`row`}>
                                        <div className={`col-sm-12`}>
                                            <span className={`m-0 `}>
                                                <span className="font-11">
                                                { new Date().toDateString() }
                                                </span>
                                            </span>
                                            <span className={`mx-1`}> | </span>
                                            <span className={`m-0 `}>
                                                <span className="font-11">Mehrdad shirvan</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/*<PostSwiperSlider posts={postsSuggestion} title="Popular post" slidesPerView={3}/>*/}
                        </div>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>
                        {/*<CategoryList />*/}

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export async function getServerSideProps(context) {

    console.log(context.query.id);
    // const post = 0;
    //current post
    const url = 'https://jsonplaceholder.typicode.com/posts/' + context.query.id
    const res = await fetch(url)
    const post = await res.json()
    //
    // 10 suggestion post
    // const resSuggestion = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10`)
    // const postsSuggestion = await resSuggestion.json()
    //
    return {
        props: {post}, // will be passed to the page component as props
    }
}


export default Post;