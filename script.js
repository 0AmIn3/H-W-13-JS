let a = +prompt("число 1")
let metod = prompt("метод")
let b = +prompt("число 2")
switch (metod) {
    case "+":
        alert(`${a + b}`)
        break;
    case "-":
        alert(`${a - b}`)
        break;
    case "*":
        alert(`${a * b}`)
        break;
    case "/":
        alert(`${a / b}`)
        break;
    default:
        alert("error")
        break;
}





let mesto = 10
let zanayto = +prompt("zanyato")
if (zanayto <= mesto) {
    let ckolko = +prompt("сколько вас?")
    if(ckolko <= mesto - zanayto){
        let name = prompt("имя").toLowerCase().trim()
        if (name[0] === "a") {
            let age = prompt("возрост")
            if (age >= 20 && age <= 40) {
                let money = prompt("деньги")
                if (money >= 100) {
                    alert('welcome')
                }
            } else {
                alert("get out")
            }
        } else {
            alert("get out")
        }
    }else {
        alert("net mest")
    }
}else{
    alert("net mest")
}





let arr = [
    [
        {
            a: { price: 20 },
        }
    ],
    [
        {
            a: { price: 35 },
        }
    ],
    [
        {
            a: { price: 44 },
        }
    ]
]

let totol = 0 

arr = Object.entries(arr).flat(Infinity).filter((item, index) => index % 2).filter((item, index) => item.)

console.log(
    arr
)




