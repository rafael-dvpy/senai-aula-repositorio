import CreateBankAccountUseCase from "../useCases/CreateBankAccountUseCase.js"

const createBankAccount = async (req, res) => {
    const data = {
        balance: req.body.balance,
        owner: req.body.owner
    }

    
}