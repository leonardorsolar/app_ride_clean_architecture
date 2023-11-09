import axios from "axios";

test("Deve testar a rota users", async function () {
  const response = await axios({
    url: "http://localhost:3000/users",
    method: "get",
  });
  const menssage = response.data;
  expect(menssage.message).toBe("Router module users - usersRouter");
});

test("Deve testar a rota users list", async function () {
  const response = await axios({
    url: "http://localhost:3000/users/list",
    method: "get",
  });
  const menssage = response.data;
  console.log(response.data.isSuccess);
  expect(response.data.isSuccess).toBeTruthy();
});
