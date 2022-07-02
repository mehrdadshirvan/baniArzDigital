import {BsClock, BsFillPersonFill, BsPencil} from "react-icons/bs";

function postCommentCard({comment}) {
    return (
        <li className="border border-light rounded w-100 d-block p-3">
            <div className="row">
                <div className="col-md-1 d-grid align-content-start">
                    <img src="/images/def-avatar.png"
                         width="45px"
                         height="45px"
                         className="d-block m-auto"
                         alt={comment.name}/>
                </div>
                <div className="col-md-11">
                    <p className="mb-1 mt-1 py-2"
                       dir="rtl">
                        <bdi>{comment.name}</bdi>
                        <span className="text-secondary"> | </span>
                        <bdi className="font-12">
                            <BsClock className="font-12 text-secondary ms-1 me-2"/>
                            1 روز پیش
                        </bdi>
                    </p>
                    <p className="m-0 text-secondary px-2 ">
                        <BsPencil className="font-12 me-2 "/>
                        {comment.content}
                    </p>
                </div>
            </div>
        </li>
    )
}

export default postCommentCard;