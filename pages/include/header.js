import Link from "next/link";
// import '../styles/header.globals.module.css'

function Footer(props) {
    return (
        <header id={`header`}>
            <div id={'top-bar'} className={`container-fluid top-bar-bg bg-repeat-none bg-attachment-fixed bg-position-center`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-12`}>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container`} id={`main-header`}>
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
                                <img src="./images/logo-light.png"
                                     alt="بانی ارز دیجیتال"/>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Footer;