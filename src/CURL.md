# criar uma conta

curl -X POST -H "Content-Type: application/json" -d '{
"proprietario": "leonardo",
"saldoInicial": 1000
}' http://localhost:3000/

# realizarDeposito

curl -X POST -H "Content-Type: application/json" -d '{
"proprietario": "leonardo",
"deposito": "100"
}' http://localhost:3000/contaId

curl -X POST -H "Content-Type: application/json" -d '{
"proprietario": "leonardo",
"deposito": "500"
}' http://localhost:3000/contaId

# saldo

curl -X POST -H "Content-Type: application/json" -d '{
"proprietario": "leonardo"
}' http://localhost:3000/saldoId

# historico

curl -X POST -H "Content-Type: application/json" -d '{
"proprietario": "leonardo"
}' http://localhost:3000/historico
