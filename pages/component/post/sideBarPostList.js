import Link from 'next/link';

function SideBarPostList({post}) {
    return (
        <>
            <li className="last-post">
                <div className="image">
                    <Link href={post.url}>
                        <a>
                            <img src={`${post.avatar_url}?width=100&height=100`}
                                 width="100px"
                                 height="100px"
                                 alt={post.title}/>
                        </a>
                    </Link>

                </div>
                <div className="content">
                    <p>
                        <Link href={post.url}>
                        <a href={post.url}>
                            {post.title}
                        </a>
                        </Link>
                    </p>
                    <small>
                        {post.release_at_2}
                    </small>
                </div>
            </li>

        </>
    );
}

export default SideBarPostList;