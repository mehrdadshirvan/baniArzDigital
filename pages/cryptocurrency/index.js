
function CurrentPriceOfDigitalCurrencies(props){

}


export async function getServerSideProps(context) {
    const res = await fetch('http://127.0.0.1:8000/api/v1/home?tt=7Cm8Yiyz1OG2QEsRoWO3MU1SN4Be8wQdSEEElsJKft3b7vtP0jlAYjzBo0Kcs8W5Ux84GnnpwXGZcC2RgwYbOyh0CmXedmuyGCBD');
    const home = await res.json();

    return {
        props: {CurrentPriceOfDigitalCurrencies}
    }
}

export default CurrentPriceOfDigitalCurrencies;