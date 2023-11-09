import UserName from "../../domain/UserName";

describe("Domain: Value Object", () => {
  test("Deve aceitar um nome", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const name: UserName = UserName.create("leonardo").getValue() as UserName;
    //Name { value: 'leonardo' }
    //then (Então faça isso)
    expect(name.value).toBe("leonardo");
  });

  test("Deve rejeitar on nome null", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const name = UserName.create(null);
    //then (Então faça isso)
    expect(name.isSuccess).toBeFalsy();
  });
});
