const BankAccountEntity = class {
    constructor (id, balance, owner) {
        this.id = id
        this.balance = balance
        this.owner = owner
    }

    addToBalance = (value) => {
        this.balance += value
    }
    
    removeFromBalance = (value) => {
        if(this.balance < value){
            return "invalid"
        }else{
            this.balance -= value
            return "succes"
        }
    }
}

export default BankAccountEntity