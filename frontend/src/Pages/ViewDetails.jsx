import { useEffect, useState } from "react"
import CustomerDetailRow from "../Components/CustomerDetailRow"

function ViewDetails(props) {
    const [data, setData] = useState([])
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Customer/GetAllCustomers",
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
            return <CustomerDetailRow key ={entry.cid} entry={entry} />
        })}
    </div>)
    
}

export default ViewDetails;