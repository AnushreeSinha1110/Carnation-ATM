function transferType(i){
    if (i===0){
        return <b>Deposit</b>
    } else if (i===1){
        return <b>Withdrawal</b>
    } else{
        return <b>Transfer</b>
    }
}

export default transferType;