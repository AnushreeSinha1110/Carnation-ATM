function CardDetailRow({entry}) {
    return(
        <tr>
        <td>{entry.accountId}</td>
        <td>{entry.cardPIN}</td>
        <td>{entry.validity}</td>
       
    </tr>
    )
}


export default CardDetailRow;