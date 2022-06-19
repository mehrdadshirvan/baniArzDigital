import {Carousel} from "react-bootstrap";

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
                                                        {post.title ? (<h3>{post.title}</h3>) : null}
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