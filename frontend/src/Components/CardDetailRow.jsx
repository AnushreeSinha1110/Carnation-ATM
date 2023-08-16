function CardDetailRow({entry}) {
    return(
        <div>
        <span>{entry.CardNumber}</span>
        <span>{entry.CardPIN}</span>
        <span>{entry.Validity}</span>
       
    </div>
    )
}


export default CardDetailRow;