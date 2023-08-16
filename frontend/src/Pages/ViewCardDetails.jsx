import { useEffect, useState } from "react"
import CardDetailRow from "../Components/CardDetailRow"

function ViewCardDetails(props) {
    const [data, setData] = useState([])
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Card/GetAllCards",
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
            return <CardDetailRow key ={entry.AccountId} entry={entry} />
        })}
    </div>)
    
}

export default ViewCardDetails;