const BankAccountModel = class {
    constructor(_id, balance, owner){
        this._id = _id
        this.balance = balance
        this.owner = owner
        this.addToBalance = (value) => {
            this.balance += value
            return this.balance
        }
        this.removeFromBalance = (value) => {
            if(this.balance < value){
                return "Não possui o valor em conta"
            }else{
                this.balance -= value
            }
        }
    }
}

const contaEduardo = new BankAccountModel(1, 20, "Eduardo")
const contaRafael = new BankAccountModel(2, 0, "Rafael")

if(contaEduardo.removeFromBalance(30) != "Não possui o valor em conta"){
    contaRafael.addToBalance(30)
}


console.log("Eduardo: " + contaEduardo.balance)
console.log("Rafael: " + contaRafael.balance)