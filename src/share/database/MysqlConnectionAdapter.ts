import { createPool, Pool, PoolConnection } from "mysql2/promise";
import IConnection from "./IConnection";

//a classe  Database define uma conexão com o banco de dados e fornece o método query para executar consultas SQL.
export class MysqlConnectionAdapter implements IConnection {
  //private connection: Pool;
  connection: any;
  databaseName: string = "db-bank";

  constructor() {
    //A classe cria uma conexão com o banco de dados MySQL usando createPool do módulo mysql2/promise
    this.connection = createPool({
      host: "localhost",
      user: "root",
      password: "root",
      database: this.databaseName,
      connectionLimit: 10,
    });
    console.log(`Conexão estabelecida com o banco de dados ${this.databaseName}`);
  }
  beginTransaction(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  commit(conn: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  rollback(conn: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  //const [query] = await connection.execute("SELECT * FROM book");
  //const [query] = await connection.query("SELECT * FROM book", []);

  //O método query permite executar consultas SQL na conexão e o método close fecha a conexão com o banco de dados.
  query(statement: string, params: any): Promise<any> {
    return this.connection.query(statement, params);
  }

  //o método close é responsável por encerrar a conexão com o banco de dados
  async close(): Promise<void> {
    await this.connection.end();
    console.log(`*** Conexão encerrada com o banco de dados ${this.databaseName}***`);
  }
}
