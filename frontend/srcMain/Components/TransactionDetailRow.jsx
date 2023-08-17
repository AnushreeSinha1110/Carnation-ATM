function TransactionDetailRow({entry}) {
    return(
        <div>
        <span>{entry.aid}</span>
        <span>{entry.tid}</span>
        <span>{entry.amount}</span>
       
    </div>
    )
}


export default TransactionDetailRow;