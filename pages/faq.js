import Link from 'next/link'
import Head from "next/head";
import HeadInclude from "./include/headInclude";
import Header from "./include/header";
import HomeSlider from "./component/home/slider/homeSlider";
import PostSwiperSlider from "./component/home/swiper/postSwiperSlider";
import Footer from "./include/footer";
import FooterAboutUs from "./include/footerAboutUs";


function FourOhFour() {
    return (
        <div className={`app`}
             dir={`rtl`}>
            <Head>
                <HeadInclude/>
                <title>پاسخ به پرسش های متداول | بانی ارز دیجیتال</title>
                <meta name="description" content="Error"/>

            </Head>

            <Header/>

            <main className={`main`}>
                <div className={`container bg-white border-radius-theme-2 shadow py-5 mb-3`}>
                    <div className={`row`}>
                        <div className={`col-md-6 m-auto`}>

                            <p className={`d-block text-center font-80 text-main m-0`} dir="ltr">
                                500!
                            </p>
                            <h1 className={`d-block text-center font-30 pb-2`}>
                                خطای غیر منتظره!
                            </h1>
                            <picture>
                                <source srcSet={`/images/page-not-found.gif`} type={`image/gif`}/>
                                <img src="/images/page-not-found.gif"
                                     className={`d-block m-auto w-75 `}
                                     alt="خطای غیر منتظره"/>
                            </picture>
                        </div>
                    </div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

export default FourOhFour;