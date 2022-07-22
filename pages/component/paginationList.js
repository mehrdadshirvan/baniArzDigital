import Link from 'next/link';
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

function PaginationList({list,url = ''}) {
    return (
        <>
            {
                list.links.length > 0
                    ? (
                        <nav className="d-flex justify-items-center justify-content-between">
                            <div className="d-none flex-sm-fill d-sm-flex align-items-sm-center justify-content-sm-between">
                                <div>
                                    <p className="small text-muted">
                                        صفحه
                                        <span className="font-medium px-1">{list.current_page}</span>
                                        از
                                        <span className="font-medium px-1">{list.total}</span>
                                        صفحه
                                    </p>
                                </div>

                                <div>
                                    <ul className="pagination">

                                        {
                                            list.links.map((link) => (
                                                // eslint-disable-next-line react/jsx-key
                                                <li className={`page-item ${link.active ? 'active' : ''}`} key={link.label} dir="rtl">
                                                    <Link href={url + '?page=' + (
                                                        link.label === "Next &raquo;"
                                                         ? (list.from === list.last_page ? list.from : list.from + 1)
                                                            : link.label === "&laquo; Previous"
                                                                ? (list.from > 2 ? list.from - 1 : 1)
                                                                : link.label
                                                    )}>
                                                        <a className="page-link">
                                                            {
                                                                link.label == "Next &raquo;"
                                                                    ? (<BsChevronLeft />)
                                                                    : link.label == "&laquo; Previous"
                                                                        ? (<BsChevronRight />)
                                                                        : link.label
                                                            }
                                                        </a>
                                                    </Link>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    )
                    : <></>
            }
        </>
    )
}

export default PaginationList;