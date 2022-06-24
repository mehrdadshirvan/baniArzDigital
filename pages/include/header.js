import Link from "next/link";
// import '../styles/header.globals.module.css'

function Footer(props) {
    return (
        <header id={`header`}>
            <div id={'top-bar'} className={`container-fluid top-bar-bg bg-repeat-none bg-attachment-fixed`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                            s ada
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container`} id={`main-header `}>
                <div className={`row`}>
                    <div className={`col-md-9 menu`}>
                        <ul>
                            <li>
                                <Link href={`/`}>
                                    <a className={``}>
                                        خانه
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/about-us`}>
                                    <a className={``}>
                                        درباره ما
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/contact-us`}>
                                    <a className={``}>
                                        ارتباط ما
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`col-md-3 logo d-grid align-content-center`}>
                        <Link href={'/'}>
                            <a className={'d-block text-left'}>
                                <img src="/images/logo-light.png"
                                     alt="بانی ارز دیجیتال"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}


export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/api/v1/home?tt=7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD');
    const home = await res.json();

    return {
        props: {home}
    }
}


export default Footer;