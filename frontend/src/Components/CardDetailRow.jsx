function CardDetailRow({entry}) {
    return(
        <tr>
        <td>{entry.cardNumber}</td>
        <td>{entry.cardPIN}</td>
        <td>{entry.validity}</td>
       
    </tr>
    )
}


export default CardDetailRow;