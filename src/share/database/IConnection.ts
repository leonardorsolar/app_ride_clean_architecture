export default interface IConnection {
  query(statement: string, params: any): Promise<any>;
  close(): Promise<void>;
  beginTransaction(): Promise<any>;
  commit(conn: any): Promise<any>;
  rollback(conn: any): Promise<any>;
}
