import UserId from "../../domain/UserId";

describe("Domain: Value Object", () => {
  test("Deve gerar um id", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const id: UserId = UserId.create().getValue() as UserId;
    //console.log(id)
    //then (Então faça isso)
    expect(id.value).toBeTruthy();
  });

  test("Deve gerar um id personalizado", () => {
    //Give(dado que))
    //When (quando acontecer algo)
    const id: UserId = UserId.create("123").getValue() as UserId;
    //then (Então faça isso)
    expect(id.value).toEqual("123");
  });
});
