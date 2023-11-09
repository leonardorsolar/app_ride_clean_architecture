import pgp from "pg-promise";
import IConnection from "./IConnection";

export default class PgPromiseAdapter implements IConnection {
  connection: any;

  constructor() {
    this.connection = pgp()("postgres://postgres:123456@localhost:5432/app");
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

  query(statement: string, data: any): Promise<any> {
    return this.connection.query(statement, data);
  }

  async close(): Promise<void> {
    await this.connection.$pool.end();
  }
}
