//import PgElephantSQLConnectionAdapter from "./PgElephantSQLConnectionAdapter";
import { MysqlConnectionAdapter } from "./MysqlConnectionAdapter";
import PgPromiseConnectionAdapter from "./PgPromiseConnectionAdapter";

//const connection = new PgElephantSQLConnectionAdapter();
//const connection = new PgPromiseConnectionAdapter();
const connection = new MysqlConnectionAdapter();
export { connection };
