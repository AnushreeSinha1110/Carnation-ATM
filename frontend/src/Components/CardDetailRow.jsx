function CardDetailRow({entry}) {
    return(
        <div>
        <span>{entry.cardNumber}</span>
        <span>{entry.cardPIN}</span>
        <span>{entry.validity}</span>
       
    </div>
    )
}


export default CardDetailRow;