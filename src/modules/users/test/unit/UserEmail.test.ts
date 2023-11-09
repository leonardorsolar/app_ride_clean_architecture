import UserEmail from "../../domain/UserEmail";

describe("Domain: Value Object", () => {
  test("Deve aceitar um email válido", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const valor = UserEmail.create("leonardo@gmail.com");
    //console.log(valor);
    //then (Então faça isso)
    expect(valor.getValue().value).toBe("leonardo@gmail.com");
  });

  test("Deve aceitar um email válido - getValue", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const email: UserEmail = UserEmail.create("leonardo@gmail.com").getValue() as UserEmail;
    //console.log(email);
    //then (Então faça isso)
    expect(email.getEmail()).toBe("leonardo@gmail.com");
  });

  test("Deve rejeitar o email null - getErrorValue", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const email: UserEmail = UserEmail.create(null).getErrorValue();
    //then (Então faça isso)
    expect(email).toBe("Email inválido");
  });

  test("Deve rejeitar o email null - result", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const email = UserEmail.create(null);
    //then (Então faça isso)
    expect(email.isSuccess).toBeFalsy();
  });

  test("Deve rejeitar o email vazio", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const email = UserEmail.create("");
    //then (Então faça isso)
    expect(email.isSuccess).toBeFalsy();
  });

  test("Deve rejeitar o email incompleto", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const email = UserEmail.create("leonardo@gmail");
    //then (Então faça isso)
    expect(email.isSuccess).toBeFalsy();
  });
});
