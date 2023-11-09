import UserPassword from "../../domain/UserPassword";

describe("Domain: Value Object", () => {
  test("Deve aceitar um password valido", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const password: UserPassword = UserPassword.create("123456").getValue() as UserPassword;
    //then (Então faça isso)
    expect(password.getPassword()).toBe("123456");
  });

  test("Deve rejeitar um password inválido", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const error = UserPassword.create("12");
    //then (Então faça isso)
    expect(error.isSuccess).toBeFalsy();
  });
});
