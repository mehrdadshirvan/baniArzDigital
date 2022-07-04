import Head from "next/head";
import Header from "../include/header";
import Footer from "../include/footer";
import SideBarPostList from "../component/post/sideBarPostList";
import Link from "next/link";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import {BsChatLeftText, BsClock, BsFillHouseDoorFill, BsSignpost2Fill, BsTags} from "react-icons/bs";
import PostTagItem from "../component/post/postTagItem";
import {useRouter} from 'next/router';
import PostSwiperSlider from "../component/post/swiper/postSwiperSlider";
import {useState} from "react";
import Input from "../component/forms/input";
import Textarea from "../component/forms/textarea";
import {Alert} from "react-bootstrap";
import PostCommentCard from "../component/post/comment/postCommentCard";

function PostSinglePage({post, suggestionMostView = []}) {
    const {asPath, query} = useRouter();
    const [commentForm, setCommentForm] = useState({
        'full_name': "کاربر",
        'mobile': "",
        'email': "",
        'content': "",
    });

    const [commentMessage, setCommentMessage] = useState({
        "message": ""
    })


    const SetData = (event) => {
        console.log(event.target.name, event.target.value)
        setCommentForm({
            ...commentForm,
            [event.target.name]: event.target.value,
        })
    }

    return (
        <div id={`app`}
             dir={'rtl'}>
            <Head>
                <title>{post.title}</title>
                <meta name="description"
                      content={post.title}/>
            </Head>
            <Header/>
            <div className={`container my-3`}>
                <div className={`row`}>
                    <div className={`col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12`}>
                        <div className={`row`}>
                            <Breadcrumb>
                                <li className={`breadcrumb-item`}>
                                    <Link href={'/'}>
                                        <a className="text-decoration-none text-secondary">
                                            <BsSignpost2Fill className={`me-1`}/>
                                            خانه
                                        </a>
                                    </Link>
                                </li>

                                <li className={`breadcrumb-item`}>
                                    <Link href={'/posts'}>
                                        <a className="text-decoration-none text-secondary">
                                            مقالات
                                        </a>
                                    </Link>
                                </li>

                                <li className={`breadcrumb-item active`}>
                                    <span className="text-decoration-none text-secondary">
                                        {post.title}
                                    </span>
                                </li>
                            </Breadcrumb>


                        </div>
                        <section id="article"
                                 className={`row mb-4`}>
                            <article className={`card px-0 border-radius-theme-2 overflow-hidden`}
                                     id={`post-${post.id}`}>
                                <div className={`card-header bg-white text-start`}>
                                    <h1 className={`font-23 m-0 py-3 px-3 d-block text-center`}> {post.title}</h1>
                                </div>
                                <img src={post.avatar_url}
                                     alt={post.title}/>
                                <div className={`meta-article my-2`}>
                                    <div className={`row`}>
                                        <div className={`col-md-3`}>
                                            <div className={`article-study-time px-2`}>
                                                <p className={`m-0 py-2 d-block text-start font-12 text-secondary`}>
                                                    <BsClock className={`me-1`}/>
                                                    زمان مطالعه:
                                                    <span className={`ps-1`}>{post.study_time}</span>
                                                    دقیقه
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`col-md-6`}>
                                            <div className="article-author d-block m-auto w-100 ">
                                                <img src={`${post.user.avatar_url}?width=65&height=65`}
                                                     className="rounded-circle m-auto d-block border border-light border-4"
                                                     width="65px"
                                                     height="65px"
                                                     alt={post.user.name}/>
                                                <h6 className="d-block text-center py-1 font-12">
                                                    {post.user.name}
                                                </h6>
                                            </div>
                                        </div>
                                        <div className={`col-md-3`}>
                                            <div className={`article-study-time px-2`}>
                                                <p className={`m-0 py-2 d-block text-end font-12 text-secondary`}>
                                                    {post.jdate_release_at}
                                                    <span> | </span>
                                                    {post.time_created_at}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={`card-body line-height p-4`}
                                     dangerouslySetInnerHTML={{__html: post.content}}/>
                                <div className={`card-body`}>
                                    <div className={`row`}>
                                        <div className={`col-md-6 border-end border-light `}>
                                            <p>
                                                <BsTags className={`me-1`}/>
                                                برچسب ها
                                            </p>
                                            <div className={`row ps-4 pe-2`}>
                                                {
                                                    post.tags.length > 0
                                                        // eslint-disable-next-line react/jsx-key
                                                        ? post.tags.map((tag) => (<PostTagItem item={tag}/>))
                                                        : <></>
                                                }
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <p>
                                                <BsTags className={`me-1`}/>
                                                دسته‌بندی ها
                                            </p>
                                            <div className={`row ps-4 pe-2`}>
                                                {
                                                    post.categories.length > 0
                                                        // eslint-disable-next-line react/jsx-key
                                                        ? post.categories.map((tag) => (<PostTagItem item={tag}/>))
                                                        : <></>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </section>


                        <PostSwiperSlider posts={suggestionMostView}
                                          slidesPerView={3}
                                          title="مطالب مرتبط"/>

                        <section>
                            <a href="#"
                               className="w-100 d-block mb-4 adv border-radius-theme-2 overflow-hidden">
                                <img src="/adv/adv-6.gif"
                                     className="w-100 rounded"/>
                            </a>

                        </section>
                        <section id="article-comments">
                            <div className="row mb-4">
                                <div className="card p-4 border-radius-theme-2 overflow-hidden ">
                                    <p className="d-block text-start text-secondary font-25">
                                        <BsChatLeftText className="me-2 font-20"/>
                                        نظرها
                                        <span className="font-12 mx-2">({post.comments.length})</span>
                                    </p>
                                    {
                                        commentMessage.message !== ""
                                            ? (
                                                <Alert variant="success">
                                                    <p className="m-0">{commentMessage.message}</p>
                                                </Alert>
                                            )
                                            : null
                                    }

                                    <div className="card-body">
                                        <div className="article-comment-form ">
                                            <form action="/"
                                                  method="post">
                                                <input type="hidden"
                                                       name="method"
                                                       value="POST"
                                                       id="method"/>
                                                <div className="row">
                                                    <div className="col-sm-4">
                                                        <Input label={"نام و نام خانوادگی"}
                                                               name={"full_name"}
                                                               onChange={SetData}
                                                               value={commentForm.full_name}/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <Input label={"شماره موبایل"}
                                                               name={"mobile"}
                                                               type="mobile"
                                                               value={commentForm.mobile}
                                                               onChange={SetData}/>
                                                    </div>
                                                    <div className="col-sm-4">
                                                        <Input label={"آدرس ایمیل"}
                                                               name={"email"}
                                                               type="email"
                                                               value={commentForm.email}
                                                               onChange={SetData}/>
                                                    </div>
                                                    <div className="col-sm-12">
                                                        <Textarea label={"نظر خودتون رو برامون بنویسید"}
                                                                  name="content"
                                                                  onChange={SetData}
                                                                  required={true}
                                                                  value={commentForm.content}
                                                                  rows="6"/>
                                                    </div>
                                                </div>
                                                <div className="row my-4">
                                                    <div className="col-sm-12 d-flex justify-content-between">
                                                        <button type="submit"
                                                                className="btn btn-success px-5">
                                                            ارسال
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {
                                            post.comments.length > 0
                                                ? (
                                                    <ul className="article-comments border-top border-light list-unstyled pt-3">
                                                        {
                                                            // eslint-disable-next-line react/jsx-key
                                                            post.comments.map((comment) => (<PostCommentCard comment={comment}/>))
                                                        }
                                                    </ul>
                                                )
                                                : <></>

                                        }

                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={`col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12`}>

                        <a href="#"
                           className="w-100 d-block mb-4 adv border-radius-theme-2 overflow-hidden">
                            <img src="/adv/adv-20.jpg"
                                 className="w-100 rounded"/>
                        </a>
                        <a href="#"
                           className="w-100 d-block mb-4 adv  border-radius-theme-2 overflow-hidden">
                            <img src="/adv/adv-21.jpg"
                                 className="w-100 rounded"/>
                        </a>

                        <div className="widget mb-4">
                            <div className="section-title">
                                <h5>قیمت لحظه ایی ارزهای دیجیتال</h5>
                            </div>

                            <tgju
                                type="market-overview"
                                items="398097,398096,535605,398115,398102"
                                columns="dot"
                                token="webservice"
                            />
                        </div>

                        {
                            suggestionMostView.length > 0
                                ? (
                                    <div className="widget mb-4">
                                        <div className="section-title">
                                            <h5>پیشنهادات</h5>
                                        </div>
                                        <ul className="border-radius-theme-2 list-unstyled m-0 px-2 py-2 bg-white ">
                                            {/* eslint-disable-next-line react/jsx-key */}
                                            {suggestionMostView.map((post) => (<SideBarPostList post={post}/>))}
                                        </ul>
                                    </div>
                                )
                                : null
                        }

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PostSinglePage;