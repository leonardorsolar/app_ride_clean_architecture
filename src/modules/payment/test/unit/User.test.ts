import Name from "../../domain/UserName";
import User from "../../domain/User";

describe("Domain: Value Object", () => {
  test("Deve criar um usuário válido", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const user: User = User.create("leonardo", "leonardo@gmail.com", "123456").getValue() as User;
    //console.log(user);
    //then (Então faça isso)
    expect(user.email.getEmail()).toBe("leonardo@gmail.com");
  });
});
