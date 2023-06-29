# Sistema de transações
Sistema de transações bancárias, existem contas e transações, cada conta tem um valor e um identificador, além de um dono
Uma transação tem um identificador, data, valor, pagador e beneficiario, além disso, um pagador não pode realizar uma transação com um valor maior do que aquele que está em sua conta

Transaction {
    _id: chave primaria
    value: number
    date: Date
    recipient: _id
    payer: _id
}

BankAccount {
    _id: chavePrimaria
    balance: number
    owner: string
}

RN 1
uma Transaction não pode acontecer se a BankAccount payer possuir um balance menor que o value da Transaction

RN 2 
uma Transaction deve possuir ID, Value, Date, Recipient, Payer

RN 3
uma BankAccount deve possuir Id, Balance e Number

RF 1
Quando uma transação não for autorizada deve enviar uma mensagem de erro

RF 2
As transações devem ser executadas por meio de uma API

RF 3
Deve seguir a arquitetura MVC

RNF 1
Deve ser feito em MongoDB

RNF 2
Deve ser feito em Express
