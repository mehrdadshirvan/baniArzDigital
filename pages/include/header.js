import Link from "next/link";


function Footer(props) {
    return (
        <header>
            <div className={`container-fluid top-bar-bg bg-repeat-none bg-attachment-fixed bg-position-center`}>
                <div className={`container`}>
                    <div className={`row`}>
                        <div className={``}></div>
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <div className={`row`}>
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
            </div>
        </header>
    );
}

export default Footer;