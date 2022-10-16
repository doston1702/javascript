let alex_obj = {
    name: 'alex',
    money: 10000,
    account: 7777
}
let barbara_obj = {
    name: 'barbara',
    money: 12000,
    account: 6666
}
let doston_obj = {
    name: 'doston',
    money: 1000,
    account: 1234
}
let ask_name = prompt('Как тебя зовут?').trim().toLocaleLowerCase()

if (ask_name == alex_obj.name || ask_name == barbara_obj.name || ask_name == doston_obj.name) {
    if (ask_name == alex_obj.name) {
        let ask_password = +prompt('Какой у вас пароль?').trim()
        if (ask_password == alex_obj.account) {
            let ask_money = +prompt('Сколько вы хотите обналичить?').trim()
            if (ask_money <= alex_obj.money) {
                alert('✔Операция прошла успешно!✔')
                document.write(`<h1>Было денег: ${alex_obj.money} <br> Сняли денег: ${ask_money} <br> Осталось денег: ${alex_obj.money - ask_money}</h1>`)
            } else alert('❌Недостаточно средств!❌')
        } else alert('❌Неверный пароль!❌')
    }
    if (ask_name == barbara_obj.name) {
        let ask_password = +prompt('Какой у вас пароль?').trim()
        if (ask_password == barbara_obj.account) {
            let ask_money = +prompt('Сколько вы хотите обналичить?').trim()
            if (ask_money <= barbara_obj.money) {
                alert('✔Операция прошла успешно!✔')
                document.write(`<h1>Было денег: ${barbara_obj.money} <br> Сняли денег: ${ask_money} <br> Осталось денег: ${barbara_obj.money - ask_money}</h1>`)
            } else alert('❌Недостаточно средств!❌')
        } else alert('❌Неверный пароль!❌')
    }
    if (ask_name == doston_obj.name) {
        let ask_password = +prompt('Какой у вас пароль?').trim()
        if (ask_password == doston_obj.account) {
            let ask_money = +prompt('Сколько вы хотите обналичить?').trim()
            if (ask_money <= doston_obj.money) {
                alert('✔Операция прошла успешно!✔')
                document.write(`<h1>Было денег: ${doston_obj.money} <br> Сняли денег: ${ask_money} <br> Осталось денег: ${doston_obj.money - ask_money}</h1>`)
            } else alert('❌Недостаточно средств!❌')
        } else alert('❌Неверный пароль!❌')
    }
} else alert('❌Пользователь не найден!❌')