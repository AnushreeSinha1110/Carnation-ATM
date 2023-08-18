function CardDetailRow({entry, edit, setCardrow, setEdit}) {
    const handleEditClick = (e) => {
        e.preventDefault();
        setEdit(!edit);
        setCardrow(entry);
    }
    
    return(
        <tr>
        <td>{entry.id}</td>   
        <td>{entry.cardNumber}</td>
        <td>{entry.accountId}</td>
        <td>{entry.cardPIN}</td>
        <td>{entry.validity}</td>
        <td onClick={(e) => handleEditClick(e)}><a href="#">Edit</a></td>
    </tr>
    )
}


export default CardDetailRow;