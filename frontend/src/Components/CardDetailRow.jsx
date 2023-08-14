function CardDetailRow({entry}) {
    return(
        <div>
        <span>{entry.cnum}</span>
        <span>{entry.cpin}</span>
        <span>{entry.exp}</span>
       
    </div>
    )
}


export default CardDetailRow;