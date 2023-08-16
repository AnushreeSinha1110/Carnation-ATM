import { useEffect, useState } from "react"
import TransactionDetailRow from "../Components/TransactionDetailRow"

function ViewTransaction(props) {
    const [data, setData] = useState([])
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Transaction/GetAllTransactions",
        ).then((res) => res.json())
        .then((d) => setData(d))

        console.log("called fetch")
    }

    useEffect(() => {
        console.log("going to fetch some data")
        fetchInfo();
        console.log("data is:" + data);
    }, [])
    return (<div>
        Hello from the other side
        {props.id}

        {data.map((entry) => {
            return <TransactionDetailRow key ={entry.tid} entry={entry} />
        })}
    </div>)
    
}

export default ViewTransaction;