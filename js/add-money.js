document.getElementById("add-money-btn-nk").addEventListener('click', function(){
    const donate1 = getInputFieldValue("donation-form-1")
     
    if (isNaN(donate1) === false){
        const noakhaliBalance = getInnerText("noakhali-balance")
        const updatedBalance = donate1 + noakhaliBalance
        document.getElementById("noakhali-balance").innerText = `${updatedBalance} BDT` 
        const accountBalance = getInnerText("balance")
        const updatedAccountBalance = accountBalance - donate1
        document.getElementById("balance").innerText = `${updatedAccountBalance} BDT`

    }
    else{
        alert('Invalid Amount')
    }
})


document.getElementById("add-money-btn-feni").addEventListener('click', function(){
    const donate1 = getInputFieldValue("donation-form-2")
     
    if (isNaN(donate1) === false){
        const feniBalance = getInnerText("feni-balance")
        const updatedBalance = donate1 + feniBalance
        document.getElementById("feni-balance").innerText = `${updatedBalance} BDT` 
        const accountBalance = getInnerText("balance")
        const updatedAccountBalance = accountBalance - donate1
        document.getElementById("balance").innerText = `${updatedAccountBalance} BDT`

    }
    else{
        alert('Invalid Amount')
    }
})


document.getElementById("add-money-btn-quota").addEventListener('click', function(){
    const donate1 = getInputFieldValue("donation-form-3")
     
    if (isNaN(donate1) === false){
        const quotaBalance = getInnerText("quota-balance")
        const updatedBalance = donate1 + quotaBalance
        document.getElementById("quota-balance").innerText = `${updatedBalance} BDT` 
        const accountBalance = getInnerText("balance")
        const updatedAccountBalance = accountBalance - donate1
        document.getElementById("balance").innerText = `${updatedAccountBalance} BDT`

    }
    else{
        alert('Invalid Amount')
    }
})





