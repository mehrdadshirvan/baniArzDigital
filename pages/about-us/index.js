import Head from "next/head";
import Header from "../include/header";
import Footer from "../include/footer";
import HeadInclude from "../include/headInclude";


function AboutUs(props){

    return (
        <div className={`app`} dir={`rtl`}>
            <Head>
                <HeadInclude/>

                <title>درباره ما | بانی ارز دیجیتال</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header />

            <main className={`container my-4`}>
                <div className={`row`}>
                    <div className={`col-12`}>
                        <div className={'card bg-white shadow-sm'}>
                            <div className={'card-body'}>
                                <h3 className={'h3 mb-4 font-24'}>
                                    تحلیل، بررسی،اخبار و آموزش بازار ارز‌های دیجیتال
                                </h3>
                                <p className={`font-weight-400 text-secondary line-height font-14 text-justify`}>
                                    بانی ارزدیجیتال در سال 1401 با هدف اطلاع رسانی تخصصی درباره ارزهای دیجیتال و حوزه بورس فعالیت خودش را شروع کرد. تیم ما خود را مسئول می داند تا مردم را بیشتر با ارزهای دیجیتال، رمز ارزها، بلاک چین، بیت کوین و اخبار روز مالی آشنا کند، چراکه در آینده نچندان دور ارزدیجیتال جایگزین ارز فیزیکی می شود. بدون شک سرمایه گذاری در این پدیده نوظهور برای آینده مالی شما بسیار بجا و درست است. اگر به یاد داشته باشید شبکه اینترنت هم دقیقا مانند رمز ارزها ناگهان وارد بازار شد و در حال حاضر یک عضو جدا نشدنی از هر فرد در دنیای امروزی است، آینده ارزهای دیجیتال هم همین گونه است. ما در بانی ارزدیجیتال علاوه بر موارد گفته شده به تحلیل قیمت دلار، قیمت طلا و خرید بیت کوین هم می پردازیم. سایت بانی ارزدیجیتال همواره به دنبال آموزش و تجزیه تحلیل بیت کوین و ارزهای دیجیتال دیگر به شکل تحلیل تکنیکال و تحلیل فاندامنتال است. در سایت ما بسترهایی وجود دارد که نرخ ارز و قیمت ارز دیجیتال را به صورت به روز و آپدیت نشان می دهد.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

export default AboutUs;