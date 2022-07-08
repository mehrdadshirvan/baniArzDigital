import Head from "next/head";
import Header from "../include/header";
import Footer from "../include/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import {BsChatLeftText, BsClock, BsSignpost2Fill, BsTags} from "react-icons/bs";
import PostTagItem from "../component/post/postTagItem";
import PostSwiperSlider from "../component/post/swiper/postSwiperSlider";
import {Alert} from "react-bootstrap";
import Input from "../component/forms/input";
import Textarea from "../component/forms/textarea";
import PostCommentCard from "../component/post/comment/postCommentCard";
import SideBarPostList from "../component/post/sideBarPostList";
import SuggestionMostView from "../component/home/suggestionMostView/suggestionMostView";
import ListIsEmpty from "../component/listIsEmpty";
import SuggestionPosts from "../component/suggestionPosts/suggestionPosts";

function CategoryWithSlug(props){
    const {posts,suggestionMostView,category} = props;
    return (
        <div id={`app`}
             dir={'rtl'}>
            <Head>
                <title>{category.name} | بانی ارز دیجیتال</title>
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

                                <li className={`breadcrumb-item`}>
                                    <Link href={'/categories'}>
                                        <a className="text-decoration-none text-secondary">
                                            دسته‌بندی ها
                                        </a>
                                    </Link>
                                </li>

                                <li className={`breadcrumb-item active`}>
                                    <span className="text-decoration-none text-secondary">
                                        {category.name}
                                    </span>
                                </li>
                            </Breadcrumb>
                        </div>

                        {
                            posts.length > 0
                                ? <SuggestionMostView posts={posts}/>
                                : <ListIsEmpty />
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


                        <SuggestionPosts posts={suggestionMostView} />

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
    const tt = "7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD";
    const baseURL = 'https://banibank.com';
    const url = baseURL+'/api/v1/categories/'+slug+'?tt='+tt;
    const res = await fetch(url);
    let result = await res.json();
    let posts, suggestionMostView, category;
    if(result.status === 'Success'){
        posts = result.data.post;
        suggestionMostView = result.data.suggestionMostView;
        category = result.data.category;
    }else{
        posts = [];
        suggestionMostView = [];
        category = [];
    }
    return {
        props: {posts,suggestionMostView,category}, // will be passed to the page component as props
    }
}


export default CategoryWithSlug;