const CashOutUseCase = (bankAccount, value) => {
    return bankAccount.removeFromBalance(value)
}