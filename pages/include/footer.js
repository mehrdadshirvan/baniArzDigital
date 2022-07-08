import Link from 'next/link';
import {BsBellFill, BsChevronUp, BsLink45Deg, BsFillShieldFill, BsInfoCircle, BsBarChart} from "react-icons/bs";
import {Button, FormControl, InputGroup} from "react-bootstrap";
import {useState} from "react";

function Footer(props) {

    const [subscribeForm, setSubscribeForm] = useState({
        'subscribeEmail': '',
    });

    const SetData = (event) => {
        setSubscribeForm({
            ...subscribeForm,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <footer className={`container-fluid`}
                id={`footer`}>
            <div className={`container pt-3 pb-4`}>
                <div className={`row`}>
                    <div className={`col-md-4 col-6`}>
                        <p className="d-block text-start text-white rtl border-bottom p-2 yekan font-14 m-0">
                            <BsLink45Deg className="me-1"/>
                            صفحات مرتبط
                        </p>
                        <ul className="list-unstyled ps-2 py-2 ">
                            <li>
                                <Link href="/contact-us">
                                    <a rel="follow"
                                       className="font-14 text-white text-decoration-none d-block my-2"
                                       title="ارتباط با ما | بانی ارزدیجیتال">
                                        <BsLink45Deg className="me-1"/>
                                        ارتباط با ما
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us">
                                    <a rel="follow"
                                       className="font-14 text-white text-decoration-none d-block my-2"
                                       title="ارتباط با ما | بانی ارزدیجیتال">
                                        <BsInfoCircle className="me-1"/>
                                        درباره ما
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cryptocurrency">
                                    <a rel="follow"
                                       className="font-14 text-white text-decoration-none d-block my-2"
                                       title="ارزهای دیجیتال | بانی ارزدیجیتال">
                                        <BsBarChart className="me-1"/>
                                        ارزهای دیجیتال
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-md-4 col-6`}>
                        <p className="d-block text-start text-white rtl border-bottom p-2 yekan font-14 m-0">
                            <BsFillShieldFill className="me-1"/>
                            شرایط و قوانین
                        </p>
                        <ul className="list-unstyled ps-2 py-2 ">
                            <li>
                                <Link href="/contact-us">
                                    <a rel="follow"
                                       className="font-14 text-white text-decoration-none d-block my-2"
                                       title="ارتباط با ما | بانی ارزدیجیتال">
                                        <BsLink45Deg className="me-1"/>
                                        قوانین سایت
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact-us">
                                    <a rel="follow"
                                       className="font-14 text-white text-decoration-none d-block my-2"
                                       title="ارتباط با ما | بانی ارزدیجیتال">
                                        <BsLink45Deg className="me-1"/>
                                        شرایط استفاده از سایت
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={`col-md-4 col-12`}>
                        <p className="d-block text-start text-white rtl border-bottom p-2 yekan font-14 m-0">
                            <BsBellFill className="me-1"/>
                            عضویت در خبرنامه
                        </p>
                        <div className="row margin_10">
                            <form action=""
                                  method="post"
                                  className="w-100">
                                <p className="text-start py-3 m-0 text-start text-white font-12 d-block w-100">
                                    از جدید ترین
                                    مقالات
                                    زودتر از دیگران با خبر شوید
                                </p>

                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="ایمیل خود را وارد کنید"
                                        onChange={SetData}
                                        className="text-center"
                                        type="email"
                                    />
                                    <Button variant="warning"
                                            id="button-addon2">
                                        عضویت
                                    </Button>
                                </InputGroup>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <p className={`d-block text-center m-0 text-white px-2 py-2 font-12`}
                       dir={'rtl'}>
                        استفاده از مطالب بانی ارزدیجیتال فقط برای مقاصد غیرتجاری و با ذکر منبع بلامانع است. کلیه حقوق
                        این سایت متعلق به بانی ارزدیجیتال می باشد.
                    </p>
                </div>
            </div>
            <div className={`container`}>
                <div className={`row`}>
                    <p className={`d-block text-center m-0 text-white px-2 py-4`}
                       dir={'ltr'}>
                        © Copyright
                        <Link href="/">
                            <a className={`d-inline-block px-1 text-white text-decoration-none`}>baniarzdigital.com</a>
                        </Link>
                    </p>
                </div>
            </div>

            <Link href="#top-bar"
                  scroll={true}>
                <a className="scroll-top">
                    <BsChevronUp/>
                </a>
            </Link>

            <script src="https://api.accessban.com/v1/widget/v2"
                    defer></script>
        </footer>
    );
}

export default Footer;