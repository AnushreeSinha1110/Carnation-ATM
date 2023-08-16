import { useEffect, useState } from "react"


function AddTransaction(props) {
    const [data, setData] = useState([])
    const fetchInfo = () => {
        console.log("calling fetch now")
        fetch(
            "http://localhost:5277/api/Transaction",
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
        
    </div>)
    
}

export default AddTransaction;