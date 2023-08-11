function CustomerDetailRow({entry}) {
    return(
        <div>
        <span>{entry.name}</span>
        <span>{entry.addr}</span>
        <span>{entry.phone}</span>
        <span>{entry.age}</span>
    </div>
    )
}


export default CustomerDetailRow;