import Head from "next/head";
import HeadInclude from "../include/headInclude";
import Header from "../include/header";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Link from "next/link";
import {BsCurrencyBitcoin, BsSignpost2Fill} from "react-icons/bs";
import FooterAboutUs from "../include/footerAboutUs";
import Footer from "../include/footer";


function Cryptocurrency(props) {

    let arr = [
        {
            name: 'Bitcoin',
            short_name: 'BTC',
            url: 'bitcoin',
            logo: "btc.png"
        },
        {
            name: 'Ethereum',
            short_name: 'Ether',
            url: 'ethereum',
            logo: "ethereum.jpg"
        }
    ];

    return (
        <div className={`app`}
             dir={`rtl`}>
            <Head>
                <HeadInclude/>
                <title>قیمت لحظه ای و نمودار تکنیکال و فاندامنتال بیت کوین | بانی ارز دیجیتال</title>
                <meta name="description"
                      content="هر واحد از بیت کوین در این لحظه با قیمت 19,060 دلار، با احتساب نرخ تتر 32,790 تومان معادل 625,006,509 تومان معامله می شود و حجم مبادلات روزانه آن 25.9 میلیارد دلار است."/>
                <meta name="article:tag"
                      content="قیمت لحظه ایی بیت کوین"/>
                <meta name="article:tag"
                      content="بیت کوین"/>
                <meta name="article:tag"
                      content="bitcoin"/>
                <meta name="article:tag"
                      content="btc"/>

                <link rel="canonical"
                      href="https://baniarzdigital.com/digital-currencies/bitcoin/"/>
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
                            <li className={`breadcrumb-item active`}>
                                    <span className="text-decoration-none text-secondary">
                                        ارزهای دیجیتال
                                    </span>
                            </li>
                        </Breadcrumb>


                    </div>
                </div>


                <section className="container">
                    <div className="row">
                        {
                            arr.map((item) => (
                                <div className="col-lg-3 col-md-4 col-sm-6 col-6 mb-2 mx-auto">
                                    <div className="p-1">
                                        <div className="cryptocurrency-card-item border-radius-theme-2 overflow-hidden ">
                                            <div className="px-2 py-4">
                                                <div className="">

                                                    <Link href={`/cryptocurrency/${item.url}`}>
                                                        <a className="text-decoration-none text-secondary">
                                                           <img src={`/images/cryptocurrency/${item.logo}`}
                                                                className="d-block mx-auto mb-2"
                                                                alt="bitcoin info and online price chart"/>
                                                        </a>
                                                    </Link>
                                                    <Link href={`/cryptocurrency/${item.url}`}>
                                                        <a className="text-decoration-none text-secondary">
                                                            <h2 className="d-block text-center m-0">
                                                                {item.name}
                                                            </h2>
                                                        </a>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
            </main>

            <Footer/>
        </div>
    )
}


// export async function getServerSideProps(context) {
//     const res = await fetch('http://127.0.0.1:8000/api/v1/home?tt=7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD');
//     const home = await res.json();
//
//     return {
//         props: {CurrentPriceOfDigitalCurrencies}
//     }
// }

export default Cryptocurrency;