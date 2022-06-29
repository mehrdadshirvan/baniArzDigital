import Link from 'next/link';

function Footer(props) {
    return (
        <footer className={``}
                id={`footer`}>
            <div className={`container py-3`}>
                <div className={`row`}>
                    <div className={`col-md-4`}>
                        col-1
                    </div>
                    <div className={`col-md-4`}>
                        col-2
                    </div>
                    <div className={`col-md-4`}>
                        col-3
                    </div>
                </div>
            </div>
            <div className={`container`}>
                <div className={`row`}>
                    <p className={`d-block text-center m-0 text-white px-2 py-4`} dir={'ltr'}>
                        © Copyright
                        <Link href="/">
                            <a className={`d-inline-block px-1 text-white text-decoration-none`}>baniarzdigital.com</a>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;