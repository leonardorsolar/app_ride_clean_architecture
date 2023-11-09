import pgp from "pg-promise";
import IConnection from "./IConnection";

export default class PgPromiseConnectionAdapter implements IConnection {
  pgp: any;
  constructor() {
    this.pgp = pgp()("postgres://postgres:tmHiI37LaeBV4YeVRw3ey079_wzg75ac@localhost:5432/cgtwovnf");
    //You are now connected to database "postgres" as user "postgres".
  }
  // constructor() {
  //   this.connection = pgp()("postgres://admin:12345@localhost:5440/auth_db");
  // }
  beginTransaction(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  commit(conn: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  rollback(conn: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async query(statement: string, params: any): Promise<any> {
    return this.pgp.query(statement, params);
  }

  async close(): Promise<void> {
    return this.pgp.$pool.end();
  }
}
