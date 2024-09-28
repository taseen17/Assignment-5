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

function showElement(id){
    const history = document.getElementById("donation-section").classList.add("hidden")
    const donation = document.getElementById("history-section").classList.add("hidden")
    const show = document.getElementById(id).classList.remove("hidden")  
}
