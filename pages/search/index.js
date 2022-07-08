import Head from "next/head";
import HeadInclude from "../include/headInclude";
import Header from "../include/header";
import Footer from "../include/footer";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import {BsSignpost2Fill} from "react-icons/bs";
import SuggestionMostView from "../component/home/suggestionMostView/suggestionMostView";
import SideBarPostList from "../component/post/sideBarPostList";
import ListIsEmpty from "../component/listIsEmpty";

function Search(props) {
    const {post, searchKeyword, suggestionMostView} = props;
    return (
        <div id={`app`}
             dir={'rtl'}>
            <Head>
                <HeadInclude/>
                <title>جستجو: {searchKeyword} | بانی ارز دیجیتال</title>
                <meta name="description" content={`جستوجو ${searchKeyword} | بانی ارز دیجیتال`}/>

            </Head>
            <Header searchKeyword={searchKeyword}/>
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
                                         جستجو:
                                       <span className="ms-1">
                                            {searchKeyword}
                                       </span>
                                    </span>
                                </li>
                            </Breadcrumb>
                        </div>

                        {
                            post.length > 0
                                ? <SuggestionMostView posts={post}/>
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


                        {
                            suggestionMostView.length > 0
                                ? (
                                    <div className="widget mb-4">
                                        <div className="section-title">
                                            <h5>پیشنهادات</h5>
                                        </div>
                                        <ul className="border-radius-theme-2 list-unstyled m-0 px-2 py-2 bg-white shadow-sm">
                                            {/* eslint-disable-next-line react/jsx-key */}
                                            {suggestionMostView.map((post) => (<SideBarPostList post={post}/>))}
                                        </ul>
                                    </div>
                                )
                                : null
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}


export async function getServerSideProps(context) {
    const searchKeyword = context.query.keyword.length > 0 ? context.query.keyword : '';
    const tt = '7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD';
    const baseURL = 'https://banibank.com';
    const url = baseURL+'/api/v1/search?keyword=' + searchKeyword + '&tt=' + tt;

    const res = await fetch(url);
    const result = await res.json();
    let post = result.data.post;
    let suggestionMostView = result.data.suggestionMostView;
    return {
        props: {post, searchKeyword, suggestionMostView}
    }
}

export default Search;