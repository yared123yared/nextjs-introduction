import Layout from '../Components/Layout'
import Fetch from 'isomorphic-unfetch';
import Prices from '../Components/Prices'

const index = (props) => (
    <div>

        <Layout>
            <h1>Welcome to the index page.</h1>
        </Layout>

        <Prices bpi={props.bpi.bpi} />
        {/* {props.bpi.bpi.USD.description} */}




    </div>
);

index.getInitialProps = async function () {
    const res = await Fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
    const data = await res.json();
    return {
        bpi: data
    }
}

export default index;

