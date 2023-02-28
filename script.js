var r = document.querySelector(':root')
var amountText = document.getElementById("amountText")
var typeText = document.getElementById("typeText")
var diceContainer = document.getElementsByClassName("dice-container")[0]
var amount = document.getElementById("amount")
var type = document.getElementById("type")
var rollButton = document.getElementById("rollButton")

function map(min, value, max, type){
    var diff = max - min
    var distance = value - min
    var percent = (Math.round(distance / diff * 100)).toString() + "%"
    var minPercent = "-" + percent
    if (type == 0){
        r.style.setProperty("--left", percent)
        r.style.setProperty("--left-", minPercent)
        amountText.textContent = value
    }
    else{
        r.style.setProperty("--right", percent)
        r.style.setProperty("--right-", minPercent)
        typeText.textContent = value
    }
}

async function roll(){
    diceContainer.innerHTML = ""
    var result = 0
    for (var i = 0; i < amount.value; i++){
        var dice = document.createElement("div")
        dice.classList.add("dice")
        diceContainer.appendChild(dice)
    }
    for (var i = 0; i < amount.value; i++){
        var rand = Math.ceil(Math.random() * type.value)
        result += rand
        for (var j = 0; j < 5; j++){
            diceContainer.children[i].textContent = Math.ceil(Math.random() * type.value)
            await new Promise(r => setTimeout(r, 100));
        }
        diceContainer.children[i].textContent = rand
    }
    rollButton.textContent = result.toString()
}

amount.addEventListener("input", function(){map(1,amount.value,5,0)}, false)
type.addEventListener("input", function(){map(3,type.value,9,1)}, false)