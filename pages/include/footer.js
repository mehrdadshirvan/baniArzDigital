import Link from 'next/link';

function Footer(props){
    return (
      <footer className={`bg-dark `}>
        <div className={`container`}>
            <div className={`row`}>
                <p className={`d-block text-center m-0 text-white p-2`}>
                    © Copyright
                    <Link href="/" >
                        <a className={`d-inline-block px-1 text-main text-decoration-none`}>baniarzdigital.com</a>
                    </Link>
                </p>
            </div>
        </div>
      </footer>
    );
}

export default Footer;