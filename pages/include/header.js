import Link from "next/link";
import {
    BsBarChart, BsBell,
    BsBook,
    BsBookFill,
    BsCoin,
    BsFillHouseDoorFill, BsGrid3X3Gap,
    BsHouseDoor,
    BsInfoCircle,
    BsLink45Deg, BsPen, BsSearch
} from "react-icons/bs";
import {Dropdown} from "react-bootstrap";
import {useState} from "react";

// import '../styles/header.globals.module.css'

function Header({props,searchKeyword = ""}) {

    const [searchForm, setSearchForm] = useState({
        'keyword': searchKeyword,
    });

    const SetData = (event) => {
        setSearchForm({
            ...searchForm,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <header id={`header`}>
            <div id={'top-bar'}
                 className={`container-fluid top-bar-bg bg-repeat-none bg-attachment-fixed`}>
                <div className={`container`}>
                    <div className={`row justify-content-between`}>
                        <div className={`col-md-3 d-grid align-content-center`} >
                            <div className="d-flex align-content-center justify-content-start align-items-center">
                                <Link href="/profile">
                                    <a className="p-1 border border-light rounded-circle text-decoration-none d-inline-block me-2">
                                        <img src="/images/def-avatar.png"
                                             className="rounded-circle "
                                             width="25px"
                                             height="25px"
                                             alt="ورود به پروفایل"/>
                                    </a>
                                </Link>
                                <Link href="/profile">
                                    <a className="p-1 font-25 text-white text-decoration-none d-inline-block me-2">
                                        <BsGrid3X3Gap />
                                    </a>
                                </Link>
                                <Link href="/profile">
                                    <a className="p-1 font-25 text-white text-decoration-none d-inline-block me-2">
                                        <BsBell />
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={"col-md-6 d-grid align-content-center"}>
                            <div className="searchHeaderForm">
                                <form action="/search"
                                      method="get">
                                    <input type="text"
                                           name="keyword"
                                           onChange={SetData}
                                           value={searchForm.keyword}
                                           placeholder="جستجو در ارزها و مطالب"
                                           id="keyword" className="form-control border-radius-theme-2 w-100 text-start"/>
                                    <button type="submit">
                                        <BsSearch />
                                    </button>
                                </form>
                            </div>
                        </div>

                        <div className={"col-md-3 d-grid align-content-center justify-content-end"}>
                            <Link href={'/'}>
                                <a className={'d-block text-left'}>
                                    <img src="/images/logo-dark.png"
                                         width="150px"
                                         alt="بانی ارز دیجیتال"/>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`container`}
                 id={`main-header`}
                 dir="RTL">
                <div className={`row`}>
                    <div className={`col-md-9 menu p-0`}>
                        <ul>
                            <li>
                                <Link href={`/`}>
                                    <a className={`ps-0`}>
                                        <BsHouseDoor/>
                                        خانه
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/learn`}>
                                    <a className={`ps-0`}>
                                        <BsBook className="me-1"/>
                                        آموزش
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/cryptocurrency`}>
                                    <a className={`ps-0`}>
                                        <BsPen className="me-1"/>
                                        مقالات
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/cryptocurrency`}>
                                    <a className={`ps-0`}>
                                        <BsBarChart className="me-1"/>
                                        ارزهای دیجیتال
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/about-us`}>
                                    <a className={``}>
                                        <BsInfoCircle className="me-1"/>
                                        درباره ما
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href={`/contact-us`}>
                                    <a className={``}>
                                        <BsLink45Deg className="me-1"/>
                                        ارتباط ما
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className={`col-md-3 logo d-grid align-content-center`}>

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
        props: {home,keyword}
    }
}


export default Header;