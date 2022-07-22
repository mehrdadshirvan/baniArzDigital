import Head from "next/head";
import HeadInclude from "../include/headInclude";
import Header from "../include/header";
import HomeSlider from "../component/home/slider/homeSlider";
import Link from "next/link";
import PostSwiperSlider from "../component/home/swiper/postSwiperSlider";
import {BsBookmarks, BsSignpost2Fill} from "react-icons/bs";
import SuggestionMostView from "../component/home/suggestionMostView/suggestionMostView";
import FooterAboutUs from "../include/footerAboutUs";
import Footer from "../include/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import ListIsEmpty from "../component/listIsEmpty";
import SuggestionPosts from "../component/suggestionPosts/suggestionPosts";

function Posts(props) {
    const {posts,meta, suggestionMostView} = props;
    return (
        <div id={`app`}
             dir={'rtl'}>
            <Head>
                <title>مقالات | بانی ارز دیجیتال</title>
                <meta name="description"
                      content="tags"/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                        <div className={`row`}>
                            <Breadcrumb>
                                <li className={`breadcrumb-item`}>
                                    <Link href={'/'}>
                                        <a className="text-decoration-none text-secondary">
                                            <BsSignpost2Fill className={`me-1`}/>
                                            خانه
                                        </a>
                                    </Link>
                                </li>

                                <li className={`breadcrumb-item active`}>
                                    <span className="text-decoration-none text-secondary">
                                        مقالات
                                    </span>
                                </li>
                            </Breadcrumb>
                        </div>

                        {
                            posts.length > 0
                                ? <SuggestionMostView posts={posts} meta={meta} />
                                : <ListIsEmpty/>
                        }
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>

                        <a href="#"
                           className="w-100 d-block mb-4 adv border-radius-theme-2 overflow-hidden">
                            <img src="/adv/adv-20.jpg"
                                 className="w-100 rounded"/>
                        </a>
                        <a href="#"
                           className="w-100 d-block mb-4 adv  border-radius-theme-2 overflow-hidden">
                            <img src="/adv/adv-21.jpg"
                                 className="w-100 rounded"/>
                        </a>


                        <SuggestionPosts posts={suggestionMostView}/>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}


export async function getServerSideProps(context) {

    // const postID = context.query.id;
    const slug = context.query.slug;
    const pageNumber = (context.query.page) ? context.query.page : 1;
    const tt = "7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD";
    const baseURL = 'https://banibank.com';
    const url = baseURL + '/api/v1/posts/?page=' + pageNumber + '&tt=' + tt;
    const res = await fetch(url);
    let result = await res.json();


    const suggestionMostViewUrl = baseURL + '/api/v1/suggestion-posts?tt=' + tt;
    const suggestionMostViewRes = await fetch(suggestionMostViewUrl);
    let suggestionMostViewResult = await suggestionMostViewRes.json();


    let posts,meta, suggestionMostView;

    if (result.status === 'success') {
        posts = result.data;
        meta = result.meta;
        suggestionMostView = suggestionMostViewResult.suggestionMostView
    } else {
        posts = [];
        meta = [];
        suggestionMostView = [];
    }
    return {
        props: {posts,meta, suggestionMostView}, // will be passed to the page component as props
    }
}


export default Posts;