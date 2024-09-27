function getInputFieldValue(id){
    const balance = document.getElementById(id).value
    const balanceAmount = parseFloat(balance)
    return balanceAmount

}

function getInnerText(id){
    const balance = document.getElementById(id).innerText
    const balanceAmount = parseFloat(balance)
    return balanceAmount

}