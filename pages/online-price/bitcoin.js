import Head from "next/head";
import HeadInclude from "../include/headInclude";
import Header from "../include/header";
import FooterAboutUs from "../include/footerAboutUs";
import Footer from "../include/footer";
import {BsCurrencyBitcoin} from "react-icons/all";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import {BsFillHouseDoorFill} from "react-icons/bs";

function Bitcoin (){

    return (
        <div className={`app`}
             dir={`rtl`}>
            <Head>
                <HeadInclude/>
                <title>قیمت لحظه ای و نمودار تکنیکال و فاندامنتال بیت کوین | بانی ارز دیجیتال</title>
                <meta name="description" content="هر واحد از بیت کوین در این لحظه با قیمت 19,060 دلار، با احتساب نرخ تتر 32,790 تومان معادل 625,006,509 تومان معامله می شود و حجم مبادلات روزانه آن 25.9 میلیارد دلار است."/>
                <meta name="article:tag" content="قیمت لحظه ایی بیت کوین"/>
                <meta name="article:tag" content="بیت کوین"/>
                <meta name="article:tag" content="bitcoin"/>
                <meta name="article:tag" content="btc"/>

                <link rel="canonical" href="https://baniarzdigital.com/digital-currencies/bitcoin/" />
            </Head>

            <Header/>

            <main className={`main`}>

                <div className="container mt-4">
                    <div className={`row`}>
                        <Breadcrumb>
                            <Link href="/">
                                <Breadcrumb.Item className="text-decoration-none text-secondary">

                                    <BsFillHouseDoorFill className={`me-1`}/>
                                    خانه

                                </Breadcrumb.Item>
                            </Link>
                            <Link href="/posts">
                                <Breadcrumb.Item>
                                    ارزهای دیجیتال
                                </Breadcrumb.Item></Link>
                            <Breadcrumb.Item active>
                                <span>بیت کوین</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>


                    </div>
                </div>
                <section className="container bg-white shadow-sm border-radius-theme-2 mb-3  p-4 ">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="font-28 text-secondary">
                                <BsCurrencyBitcoin />
                                درباره بیت کوین
                            </h1>
                            <p className="line-height d-block text-justify font-14 px-2">
                                بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی دیجیتال است که با ارزش بازار حدود ۳۶۴.۷۳ میلیارد دلار، در رتبه ۱ بازار قرار داشته و سهم ۴۰.۵۹ درصدی از کل بازار را در اختیار دارد . هر واحد از بیت کوین در این لحظه با قیمت ۱۹,۱۱۳ دلار، با احتساب نرخ تتر ۳۲,۶۸۴ تومان معادل ۶۲۴,۶۸۹,۸۹۵ تومان معامله می شود و حجم مبادلات روزانه آن ۲۵.۹۶ میلیارد دلار است. قیمت در ۲۴ ساعت اخیر -۲.۳۳% کاهش یافته است. بالاترین قیمت بیت کوین در تاریخ ۱۹ آبان ۱۴۰۰(10 November 2021) معادل ۶۸,۶۶۴.۱۶ دلار بوده که همینک %۷۲.۱۶ پایین‌تر از آن زمان قرار دارد. تعداد واحدهای در گردش بیت کوین ۱۹.۰۸ میلیون و تعداد کل واحدهای آن ۲۱ میلیون خواهد بود. در حال حاضر فعال ترین صرافی که در آن بیت کوین معامله می‌شود، صرافی Koinbazar با سهم %۴۶.۷۷ از حجم معاملات روزانه است.
                            </p>
                        </div>
                    </div>
                </section>

                <section className={`container border-radius-theme-2 mb-3`}>
                    <div className={`row`}>
                        <div className="col-md-12 bg-light">
                            <h2 className="d-block text-center py-2 px-2 ">
                                قیمت لحظه ای بیت کوین
                            </h2>
                        </div>
                        <div className="col-md-12 m-auto">
                            <iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_74fb5&symbol=BINANCE%3ABTCUSDT&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Asia%2FTehran&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%22header_fullscreen_button%22%2C%22side_toolbar_in_fullscreen_mode%22%5D&disabled_features=%5B%5D&locale=fa_IR&utm_source=nobitex.ir&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSDT" className="w-100 d-block" height="600px" width='100%'></iframe>
                        </div>
                    </div>
                </section>




                <FooterAboutUs />
            </main>

            <Footer/>
        </div>
    );

}

export default Bitcoin;