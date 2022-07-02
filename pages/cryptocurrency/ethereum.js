import Head from "next/head";
import HeadInclude from "../include/headInclude";
import Header from "../include/header";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import {BsCoin, BsCurrencyBitcoin, BsSignpost2Fill} from "react-icons/bs";
import Footer from "../include/footer";

function Ethereum (props){
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
                            <li className={`breadcrumb-item`}>
                                <Link href={'/'}>
                                    <a className="text-decoration-none text-secondary">
                                        <BsSignpost2Fill className={`me-1`}/>
                                        خانه
                                    </a>
                                </Link>
                            </li>
                            <li className={`breadcrumb-item`}>
                                <Link href={'/cryptocurrency'}>
                                    <a className="text-decoration-none text-secondary">
                                        ارزهای دیجیتال
                                    </a>
                                </Link>
                            </li>
                            <li className={`breadcrumb-item active`}>
                                    <span className="text-decoration-none text-secondary">
                                        بیت کوین
                                    </span>
                            </li>
                        </Breadcrumb>


                    </div>
                </div>


                <section className={`container border-radius-theme-2 mb-3`}>
                    <div className={`row`}>
                        <div className="col-md-12 bg-light">
                            <h2 className="d-block text-center py-2 px-2 ">
                                قیمت لحظه ای اتریوم
                            </h2>
                        </div>
                        <div className="col-md-12 m-auto">
                            <iframe src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_74fb5&symbol=ETHUSDT&interval=1&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=light&style=1&timezone=Asia%2FTehran&withdateranges=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%22header_fullscreen_button%22%2C%22side_toolbar_in_fullscreen_mode%22%5D&disabled_features=%5B%5D&locale=fa_IR&utm_source=nobitex.ir&utm_medium=widget&utm_campaign=chart&utm_term=BINANCE%3ABTCUSDT" className="w-100 d-block" height="600px" width='100%'></iframe>
                        </div>
                    </div>
                </section>

                <section className="container bg-white shadow-sm border-radius-theme-2 mb-4 p-4 ">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="font-28 text-secondary">
                                <BsCoin className="me-1"/>
                                درباره اتریوم
                            </h1>
                            <p className="line-height d-block text-justify font-14 px-2">
                                اتریوم با نماد اختصاری ETH یک ارز دیجیتال یا شکلی از دارایی دیجیتال است که با ارزش بازار حدود ۱۲۸.۸۹ میلیارد دلار، در رتبه ۲ بازار قرار داشته و سهم ۱۴.۱۹ درصدی از کل بازار را در اختیار دارد . هر واحد از اتریوم در این لحظه با قیمت ۱,۰۶۱.۸۶ دلار، با احتساب نرخ تتر ۳۲,۶۳۴ تومان معادل ۳۴,۶۵۳,۰۲۸ تومان معامله می شود و حجم مبادلات روزانه آن ۱۱.۰۳ میلیارد دلار است. قیمت در ۲۴ ساعت اخیر -۰.۹۱% کاهش یافته است. بالاترین قیمت اتریوم در تاریخ ۱۹ آبان ۱۴۰۰(10 November 2021) معادل ۴,۸۵۱.۱۱ دلار بوده که همینک %۷۸.۱۱ پایین‌تر از آن زمان قرار دارد. تعداد واحدهای در گردش اتریوم ۱۲۱.۳۸ میلیون و تعداد کل واحدهای آن ۱۲۱.۳۸ میلیون خواهد بود. در حال حاضر فعال ترین صرافی که در آن اتریوم معامله می‌شود، صرافی WBF Exchange با سهم %۹۹.۹۹ از حجم معاملات روزانه است.
                            </p>
                        </div>
                    </div>
                </section>


            </main>

            <Footer/>
        </div>
    );
}

export default Ethereum;