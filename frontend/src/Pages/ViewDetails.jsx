import { useEffect, useState } from "react"

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
            return(
                <div>
            <span>{entry.name}</span>
            <span>{entry.addr}</span>
            <span>{entry.phone}</span>
            <span>{entry.age}</span>
            </div>
            )
        })}
    </div>)
    
}

export default ViewDetails;