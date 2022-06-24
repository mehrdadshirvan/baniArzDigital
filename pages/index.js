import Head from 'next/head'
import Image from 'next/image'
import Footer from './include/footer';
import Header from './include/header';
import HeadInclude from "./include/headInclude";
import Link from "next/link";
import HomeSlider from './component/home/slider/homeSlider'
import PostSwiperSlider from "./component/home/swiper/postSwiperSlider";

function Home(props) {
    const {home} = props;
    //console.log(home)
    return (
        <div className={`app`}
             dir={`rtl`}>
            <Head>
                <HeadInclude/>
                <title>صفحه اصلی | بانی ارز دیجیتال</title>
                <meta name="description"
                      content="Generated by create next app"/>

            </Head>

            <Header/>

            <main className={`main`}>

                <div className={`container mb-3`}>
                    <div className={`row`}>
                        <div className={`col-6 border-radius-theme-2 overflow-hidden`}>
                            <HomeSlider posts={home.lastPosts}/>
                        </div>
                        <div className={`col-6 border-radius-theme-2 overflow-hidden`}>
                            <HomeSlider posts={home.lastPosts}/>
                        </div>
                    </div>
                </div>

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


                <PostSwiperSlider posts={home.lastPosts} title="پیشنهاد سردبیر"/>


            </main>

            <Footer/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/api/v1/home?tt=7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD');
    const home = await res.json();

    return {
        props: {home}
    }
}

export default Home;