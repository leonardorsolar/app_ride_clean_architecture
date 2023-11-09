export interface IUseCase {
  execute(request?: any, item?: any): Promise<any>;
}
