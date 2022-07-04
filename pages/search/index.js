import Head from "next/head";
import HeadInclude from "../include/headInclude";
import Header from "../include/header";
import Footer from "../include/footer";

function Search(props){
    const {search,searchKeyword} = props;
    return (
        <>
            <div className={`app`}
                 dir={`rtl`}>
                <Head>
                    <HeadInclude/>
                    <title>جستجو: { searchKeyword } | بانی ارز دیجیتال</title>
                    <meta name="description" content="Generated by create next app"/>

                </Head>

                <Header searchKeyword={searchKeyword}/>

                <main className={`main`}>
                </main>

                <Footer/>
            </div>
        </>
    );
}


export async function getServerSideProps(context) {
    const searchKeyword = context.query.keyword.length > 0 ? context.query.keyword : '';
    const res = await fetch('http://127.0.0.1:8000/api/v1/home?tt=7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD');
    const search = await res.json();
    return {
        props: {search,searchKeyword}
    }
}

export default Search;