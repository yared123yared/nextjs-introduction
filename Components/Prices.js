import React from 'react'

class Prices extends React.Component {
    state = {
        currency: 'USD'
    }

    render() {
        return (<dev>
            <ul className="list-group">
                <li className="list-group-item">
                    Bitcoin rate for {this.props.bpi.USD.description} : <span className="badge badge-primary">
                        {this.props.bpi.USD.code}

                    </span> <strong>{this.props.bpi.USD.rate}</strong>
                </li>
            </ul>


        </dev>)
    }
}
export default Prices;