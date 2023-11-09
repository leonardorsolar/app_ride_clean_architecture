// import pgp from "pg-promise";
// import IConnection from "./IConnection";

// export default class PgElephantSQLConnectionAdapter implements IConnection {
//   pgp: any;
//   //static instance: PostgreSQLConnectionAdapter;
//   constructor() {
//     this.pgp = pgp()("postgres://cgtwovnf:tmHiI37LaeBV4YeVRw3ey079_wzg75ac@peanut.db.elephantsql.com/cgtwovnf");
//     //this.pgp = pgp()("postgres://admin:tmHiI37LaeBV4YeVRw3ey079_wzg75ac@localhost:5432/cgtwovnf");
//     //You are now connected to database "postgres" as user "postgres".
//   }
//   // constructor() {
//   //   this.connection = pgp()("postgres://admin:12345@localhost:5440/auth_db");
//   // }

//   // static getInstance() {
//   //   if (!PostgreSQLConnectionAdapter.instance) {
//   //     PostgreSQLConnectionAdapter.instance = new PostgreSQLConnectionAdapter();
//   //   }
//   //   return PostgreSQLConnectionAdapter.instance;
//   // }
//   async query(statement: string, params: any): Promise<any> {
//     return this.pgp.query(statement, params);
//   }

//   async close(): Promise<void> {
//     return this.pgp.$pool.end();
//   }
// }
