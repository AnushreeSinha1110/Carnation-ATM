function transferType(i){
    if (i===0){
        return <b>Deposit</b>
    } else if (i===1){
        return <b>Withdrawal</b>
    } else if(i==2){
        return <b>Transfer</b>
    }
    else{
        return <b>Cheque</b>
    }
}

export default transferType;