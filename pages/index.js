import Head from 'next/head'
import Image from 'next/image'
import Footer from './include/footer';
import Header from './include/header';
import HeadInclude from "./include/headInclude";
import Link from "next/link";
import HomeSlider from './component/home/slider/homeSlider'
import PostSwiperSlider from "./component/home/swiper/postSwiperSlider";
import FooterAboutUs from "./include/footerAboutUs";
import SuggestionMostView from "./component/home/suggestionMostView/suggestionMostView";
import {BsBookmarks} from "react-icons/bs";

function Home(props) {
    const {lastPosts,suggestedEditor,suggestionMostView} = props;
    return (<div className={`app`}
                 dir={`rtl`}>
            <Head>
                <HeadInclude/>
                <title>صفحه اصلی | بانی ارزدیجیتال</title>
                <meta name="description" content="معرفی و شناخت بازار و انواع ارزهای دیجیتال، شناخت و خرید و مقالات آموزشی ارزدیجال در بانی ارزدیجیتال"/>

            </Head>

            <Header/>

            <main className={`main`}>

                <section id="home-slider">
                    <div className={`container mb-3`}>
                        <div className={`row`}>
                            <div className={`col-6 border-radius-theme-2 overflow-hidden`}>
                                <HomeSlider posts={lastPosts}/>
                            </div>
                            <div className={`col-6 border-radius-theme-2 overflow-hidden`}>
                                <HomeSlider posts={lastPosts}/>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home-adv-full-width">
                    <div className={`container mb-3`}>
                        <div className={`row`}>
                            <div className={`col-12`}>
                                <Link href={'/'}>
                                    <a className={'overflow-hidden border-radius-theme-2'}>
                                        <img src="./adv/adv-23.jpg"
                                             className={`d-block m-auto w-100 border-radius-theme-3`}
                                             alt="adv"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


                <PostSwiperSlider posts={suggestedEditor}
                                  title="پیشنهاد سردبیر"/>

                <section id="home-online-crypto-currency"
                         className="py-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h5 className="mb-3">
                                    <BsBookmarks/>
                                    قیمت لحظه ای ارزهای دیجیتال
                                </h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-2">
                                <tgju
    type="market-data"
    items="398096,398097,535605,398115,398102,757179"
    columns="dot,diff"
    token="webservice"
    />
                            </div>
                            <div className="col-md-6 mb-2">
                                <tgju
    type="market-data"
    items="398099,398098,398100,398116,398115,757180"
    columns="dot,diff"
    token="webservice"
    />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home-most-view">
                    <div className={`container`}>
                        <div className={`row`}>
                            <div className={`col-lg-9`}>
                                <SuggestionMostView posts={suggestionMostView}
                                                    meta={[]}
                                                    title="پربازدیدهای این هفته"/>
                            </div>
                            <div className={`col-lg-3`}>

                                <a href={`#`}
                                   rel="nofollow"
                                   className={`text-decoration-none d-block mb-3`}>
                                    <img src="/adv/adv-3.gif"
                                         className={`d-block w-100 border-radius-theme-2 `}
                                         alt="adv"/>
                                </a>
                                <a href={`#`}
                                   rel="nofollow"
                                   className={`text-decoration-none d-block mb-3`}>
                                    <img src="/adv/img-4.png"
                                         className={`d-block w-100 border-radius-theme-2 `}
                                         alt="adv"/>
                                </a>
                                <a href={`#`}
                                   rel="nofollow"
                                   className={`text-decoration-none d-block mb-3`}>
                                    <img src="/adv/img-2.png"
                                         className={`d-block w-100 border-radius-theme-2 `}
                                         alt="adv"/>
                                </a>

                            </div>
                        </div>
                    </div>
                </section>

                <FooterAboutUs/>
            </main>

            <Footer/>
        </div>

    )
}

export async function getServerSideProps(context) {
    const tt = '7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD';
    const baseURL = 'https://banibank.com';
    const url = baseURL + '/api/v1/home?tt=' + tt;

    const res = await fetch(url);
    const result = await res.json();

    const lastPosts = result.lastPosts;
    const suggestedEditor = result.suggestedEditor;
    const suggestionMostView = result.suggestionMostView;


    return {
        props: {lastPosts,suggestedEditor,suggestionMostView}
    }
}

export default Home;