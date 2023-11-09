CREATE TABLE
    contaBancaria (
        id INTEGER PRIMARY KEY AUTO_INCREMENT PRIMARY KEY,
        numero NUMERIC,
        proprietario TEXT,
        saldo BIGINT
    );

ALTER TABLE contaBancaria MODIFY COLUMN id INT AUTO_INCREMENT;

# criar transacao

CREATE TABLE
    transacoes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        idDaConta INT NOT NULL,
        valor BIGINT NOT NULL,
        data DATETIME NOT NULL,
        nota VARCHAR(255),
        idDaContaDono INT NOT NULL,
        idDaContaOrigem INT NOT NULL,
        idDaContaDestino INT NOT NULL,
        FOREIGN KEY (idDaConta) REFERENCES contaBancaria(id)
    );

CREATE TABLE
    users (
        id_user VARCHAR(100),
        name TEXT,
        email TEXT,
        password VARCHAR(300),
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id_user)
    );

ALTER TABLE contaBancaria
ADD id_user VARCHAR(100),
ADD
    FOREIGN KEY (id_user) REFERENCES users(id_user);