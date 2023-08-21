import { MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";

export default function CurrencyConversion({ amount }) {
    const currency = [
        { "symbol": "USD", "value": 0.012 },
        { "symbol": "EURO", "value": 0.011 },
        { "symbol": "GBP", "value": 0.0094 },
        { "symbol": "YEN", "value": 1.75 },
        { "symbol": "YUAN", "value": 0.088 },
        { "symbol": "RUB", "value": 1.15 },
    ]


    return (
        <>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th>#</th>
                        <th>Currency</th>
                        <th>Value</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        currency.map(({ symbol, value }, index) => {
                            return (
                                <tr>
                                    <td> {index}</td>
                                    <td>{symbol}</td>
                                    <td>{value * amount}</td></tr>)
                        })
                    }
                </MDBTableBody>
            </MDBTable>
        </>
    )
}