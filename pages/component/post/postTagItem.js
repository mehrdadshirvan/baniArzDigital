import Link from "next/link";

function PostTagItem({item}){
    return (
        <span className="px-2 py-1 badge bg-light border me-1 mb-1 rounded font-10 w-auto">
            <Link href={item.url}>
                <a className="text-decoration-none font-10 d-inline-block text-secondary">
                    <h3 className="font-12 m-0">{item.title}</h3>
                </a>
            </Link>
        </span>
    )
}

export default PostTagItem;