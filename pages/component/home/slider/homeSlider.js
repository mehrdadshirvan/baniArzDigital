import {Carousel} from "react-bootstrap";
import Link from 'next/link'

function HomeSlider({posts}) {
    return (
        <>
            {
                posts.length > 0
                    ? (

                        <Carousel>
                            {
                                posts.map(post => (
                                    <Carousel.Item>

                                        <img
                                            className="d-block w-100 border-radius-theme-2 overflow-hidden"
                                            src={post.avatar_url}
                                            alt={post.title}
                                        />
                                        <Carousel.Caption>
                                            <Link href={post.url}>
                                                <a className={`text-white text-decoration-none font-16`}>
                                                    {post.title ? (<h3>{post.title}</h3>) : null}
                                                </a>
                                            </Link>
                                                {post.short_description ? (<p>{post.short_description}</p>) : null}
                                        </Carousel.Caption>

                                    </Carousel.Item>
                                ))
                            }
                        </Carousel>

                    )
                    : null
            }
        </>
    )
}

export default HomeSlider;