import Head from "next/head";
import Header from "../../include/header";
import Footer from "../../include/footer";
import PostSinglePage from "../postSinglePage";

function PostWithSlug(props){
    const {post} = props;
    const {suggestionMostView} = props;
    return <PostSinglePage post={post} suggestionMostView={suggestionMostView}/>
}


export async function getServerSideProps(context) {

    const postID = context.query.id;
    const postSlug = context.query.slug;
    //current post
    const tt = "7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD";
    const baseURL = 'https://banibank.com';
    const url = baseURL + '/api/v1/posts/'+postID+'/'+postSlug+'?tt='+tt;
    const res = await fetch(url);
    let result = await res.json();
    let post = result.data.post;
    let suggestionMostView = result.data.suggestionMostView;
    // console.log(suggestionMostView)
    return {
        props: {post,suggestionMostView}, // will be passed to the page component as props
    }
}


export default PostWithSlug;