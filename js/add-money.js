document.getElementById("add-money-btn-nk").addEventListener('click', function () {
    const donate1 = getInputFieldValue("donation-form-1")
    const accountBalance = getInnerText("balance")

    if (isNaN(donate1) === false && donate1<accountBalance) {
        const noakhaliBalance = getInnerText("noakhali-balance")
        const updatedBalance = donate1 + noakhaliBalance
        document.getElementById("noakhali-balance").innerText = `${updatedBalance} BDT`   
        const updatedAccountBalance = accountBalance - donate1
        document.getElementById("balance").innerText = `${updatedAccountBalance} BDT`
        
        const transactions = document.createElement('div')
        transactions.classList.add("border")
        transactions.classList.add("rounded-xl")
        transactions.classList.add("p-2")
        transactions.classList.add("mb-2")
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        transactions.innerHTML = `
        <h4 class="font-semibold"> ${donate1} Taka is donated for flood in Noakhali </h4>
        <p>Date: ${date} ${time} </p>
        `
        document.getElementById("transaction-container").appendChild(transactions)

    }
    else {
        alert('Invalid Amount')
    }
})


document.getElementById("add-money-btn-feni").addEventListener('click', function () {
    const donate1 = getInputFieldValue("donation-form-2")
    const feniBalance = getInnerText("feni-balance")
    const accountBalance = getInnerText("balance")

    if (isNaN(donate1) === false && donate1<accountBalance) {   
        const updatedBalance = donate1 + feniBalance
        document.getElementById("feni-balance").innerText = `${updatedBalance} BDT`    
        const updatedAccountBalance = accountBalance - donate1
        document.getElementById("balance").innerText = `${updatedAccountBalance} BDT`

        const transactions = document.createElement('div')
        transactions.classList.add("border")
        transactions.classList.add("rounded-xl")
        transactions.classList.add("p-2")
        transactions.classList.add("mb-2")
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        transactions.innerHTML = `
        <h4 class="font-semibold"> ${donate1} Taka is donated for flood in Feni </h4>
        <p>Date: ${date} ${time} </p>
        `
        document.getElementById("transaction-container").appendChild(transactions)

    }
    else {
        alert('Invalid Amount')
    }
})


document.getElementById("add-money-btn-quota").addEventListener('click', function () {
    const donate1 = getInputFieldValue("donation-form-3")
    const quotaBalance = getInnerText("quota-balance")
    const accountBalance = getInnerText("balance")

    if (isNaN(donate1) === false && donate1<accountBalance) {   
        const updatedBalance = donate1 + quotaBalance
        document.getElementById("quota-balance").innerText = `${updatedBalance} BDT`    
        const updatedAccountBalance = accountBalance - donate1
        document.getElementById("balance").innerText = `${updatedAccountBalance} BDT`

        const transactions = document.createElement('div')
        transactions.classList.add("border")
        transactions.classList.add("rounded-xl")
        transactions.classList.add("p-2")
        transactions.classList.add("mb-2")
        let now = new Date();
        let date = now.toLocaleDateString();
        let time = now.toLocaleTimeString();
        transactions.innerHTML = `
        <h4 class="font-semibold"> ${donate1} Taka is donated for Aid for Quota Reformation Movement </h4>
        <p>Date: ${date} ${time} </p>
        `
        document.getElementById("transaction-container").appendChild(transactions)

    }
    else {
        alert('Invalid Amount')
    }
})


document.getElementById("blog-btn").addEventListener('click',function(){
    window.location.href = '/blog.html'
})


document.getElementById("history-btn").addEventListener('click',function(){
    const bg1 = document.getElementById("history-btn").classList.add("bg-[#B4F461]") 
    const bg2 = document.getElementById("donation-btn").classList.remove("bg-[#B4F461]")
    showElement("history-section")
    
})

document.getElementById("donation-btn").addEventListener('click',function(){
    const bg1 = document.getElementById("donation-btn").classList.add("bg-[#B4F461]") 
    const bg2 = document.getElementById("history-btn").classList.remove("bg-[#B4F461]")
    showElement("donation-section")
    
})





