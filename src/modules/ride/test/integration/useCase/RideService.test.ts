import AccountGateway from "../../../gateway/IAccountGateway";
import RequestRideUseCase from "../../../usecase/requestRide/RequestRideUseCase";
import RideRepositoryDatabase from "../../../repos/implementations/RideRepositoryDatabase";
import AcceptRideUseCase from "../../../usecase/acceptRide/AcceptRideUseCase";
import StartRideUseCase from "../../../usecase/startRide/StartRideUseCase";
import GetRideUseCase from "../../../usecase/getRide/GetRideUseCase";
import PgPromiseConnectionAdapter from "../../../../../share/database/PgPromiseConnectionAdapter";

import AccountGatewayHttp from "../../../infra/gateway/AccountGatewayHttp";
import IConnection from "../../../../../share/database/IConnection";
import IAccountGateway from "../../../gateway/IAccountGateway";

let accountGateway: IAccountGateway;
let requestRide: RequestRideUseCase;
let acceptRide: AcceptRideUseCase;
let startRide: StartRideUseCase;
let getRide: GetRideUseCase;
let connection: IConnection;
let rideRepository: RideRepositoryDatabase;

beforeEach(function () {
  //connection = new PgPromiseAdapter();
  connection = new PgPromiseConnectionAdapter();
  const rideRepository = new RideRepositoryDatabase(connection);
  //const signupUseCase = new SignupUseCase(accountRepository);
  accountGateway = new AccountGatewayHttp();
  requestRide = new RequestRideUseCase(rideRepository, accountGateway);
  acceptRide = new AcceptRideUseCase(rideRepository, accountGateway);
  startRide = new StartRideUseCase(rideRepository);
  getRide = new GetRideUseCase(rideRepository, accountGateway);
});

test("Deve solicitar uma corrida e receber a rideId", async function () {
  const inputSignup: any = {
    name: "John Doe",
    email: `john.doe${Math.random()}@gmail.com`,
    cpf: "95818705552",
    isPassenger: true,
  };
  const outputSignup = await accountGateway.signup(inputSignup);
  const inputRequestRide = {
    passengerId: outputSignup.accountId,
    from: {
      lat: -27.584905257808835,
      long: -48.545022195325124,
    },
    to: {
      lat: -27.496887588317275,
      long: -48.522234807851476,
    },
  };
  const outputRequestRide = await requestRide.execute(inputRequestRide);
  expect(outputRequestRide.rideId).toBeDefined();
});

// test("Deve solicitar e consultar uma corrida", async function () {
//   const inputSignup: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignup = await accountGateway.signup(inputSignup);
//   const inputRequestRide = {
//     passengerId: outputSignup.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const outputRequestRide = await requestRide.execute(inputRequestRide);
//   const outputGetRide = await getRide.execute(outputRequestRide.rideId);
//   expect(outputGetRide.status).toBe("requested");
//   expect(outputGetRide.passengerId).toBe(outputSignup.accountId);
//   expect(outputGetRide.fromLat).toBe(inputRequestRide.from.lat);
//   expect(outputGetRide.fromLong).toBe(inputRequestRide.from.long);
//   expect(outputGetRide.toLat).toBe(inputRequestRide.to.lat);
//   expect(outputGetRide.toLong).toBe(inputRequestRide.to.long);
//   expect(outputGetRide.date).toBeDefined();
// });

// test("Deve solicitar uma corrida e aceitar uma corrida", async function () {
//   const inputSignupPassenger: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupPassenger = await accountGateway.signup(inputSignupPassenger);
//   const inputRequestRide = {
//     passengerId: outputSignupPassenger.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const outputRequestRide = await requestRide.execute(inputRequestRide);
//   const inputSignupDriver: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     carPlate: "AAA9999",
//     isDriver: true,
//   };
//   const outputSignupDriver = await accountGateway.signup(inputSignupDriver);
//   const inputAcceptRide = {
//     rideId: outputRequestRide.rideId,
//     driverId: outputSignupDriver.accountId,
//   };
//   await acceptRide.execute(inputAcceptRide);
//   const outputGetRide = await getRide.execute(outputRequestRide.rideId);
//   expect(outputGetRide.status).toBe("accepted");
//   expect(outputGetRide.driverId).toBe(outputSignupDriver.accountId);
// });

// test("Caso uma corrida seja solicitada por uma conta que não seja de passageiro deve lançar um erro", async function () {
//   const inputSignup: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     carPlate: "AAA9999",
//     isDriver: true,
//   };
//   const outputSignup = await accountGateway.signup(inputSignup);
//   const inputRequestRide = {
//     passengerId: outputSignup.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   await expect(() => requestRide.execute(inputRequestRide)).rejects.toThrow(new Error("Account is not from a passenger"));
// });

// test("Caso uma corrida seja solicitada por um passageiro e ele já tenha outra corrida em andamento lançar um erro", async function () {
//   const inputSignup: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignup = await accountGateway.signup(inputSignup);
//   const inputRequestRide = {
//     passengerId: outputSignup.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   await requestRide.execute(inputRequestRide);
//   await expect(() => requestRide.execute(inputRequestRide)).rejects.toThrow(new Error("This passenger already has an active ride"));
// });

// test("Não deve aceitar uma corrida se a account não for driver", async function () {
//   const inputSignupPassenger: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupPassenger = await accountGateway.signup(inputSignupPassenger);
//   const inputRequestRide = {
//     passengerId: outputSignupPassenger.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const outputRequestRide = await requestRide.execute(inputRequestRide);
//   const inputSignupDriver: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupDriver = await accountGateway.signup(inputSignupDriver);
//   const inputAcceptRide = {
//     rideId: outputRequestRide.rideId,
//     driverId: outputSignupDriver.accountId,
//   };
//   await expect(() => acceptRide.execute(inputAcceptRide)).rejects.toThrow("Account is not from a driver");
// });

// test("Não deve aceitar uma corrida se o status da corrida não for requested", async function () {
//   const inputSignupPassenger: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupPassenger = await accountGateway.signup(inputSignupPassenger);
//   const inputRequestRide = {
//     passengerId: outputSignupPassenger.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const outputRequestRide = await requestRide.execute(inputRequestRide);
//   const inputSignupDriver: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     carPlate: "AAA9999",
//     isDriver: true,
//   };
//   const outputSignupDriver = await accountGateway.signup(inputSignupDriver);
//   const inputAcceptRide = {
//     rideId: outputRequestRide.rideId,
//     driverId: outputSignupDriver.accountId,
//   };
//   await acceptRide.execute(inputAcceptRide);
//   await expect(() => acceptRide.execute(inputAcceptRide)).rejects.toThrow(new Error("Invalid status"));
// });

// test("Não deve aceitar uma corrida se o motorista já tiver outra corrida em andamento", async function () {
//   const inputSignupPassenger1: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupPassenger1 = await accountGateway.signup(inputSignupPassenger1);
//   const inputRequestRide1 = {
//     passengerId: outputSignupPassenger1.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const inputSignupPassenger2: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupPassenger2 = await accountGateway.signup(inputSignupPassenger2);
//   const inputRequestRide2 = {
//     passengerId: outputSignupPassenger2.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const outputRequestRide1 = await requestRide.execute(inputRequestRide1);
//   const outputRequestRide2 = await requestRide.execute(inputRequestRide2);

//   const inputSignupDriver: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     carPlate: "AAA9999",
//     isDriver: true,
//   };
//   const outputSignupDriver = await accountGateway.signup(inputSignupDriver);
//   const inputAcceptRide1 = {
//     rideId: outputRequestRide1.rideId,
//     driverId: outputSignupDriver.accountId,
//   };
//   const inputAcceptRide2 = {
//     rideId: outputRequestRide2.rideId,
//     driverId: outputSignupDriver.accountId,
//   };
//   await acceptRide.execute(inputAcceptRide1);
//   await expect(() => acceptRide.execute(inputAcceptRide2)).rejects.toThrow("Driver is already in another ride");
// });

// test("Deve solicitar, aceitar e iniciar uma corrida", async function () {
//   const inputSignupPassenger: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     isPassenger: true,
//   };
//   const outputSignupPassenger = await accountGateway.signup(inputSignupPassenger);
//   const inputRequestRide = {
//     passengerId: outputSignupPassenger.accountId,
//     from: {
//       lat: -27.584905257808835,
//       long: -48.545022195325124,
//     },
//     to: {
//       lat: -27.496887588317275,
//       long: -48.522234807851476,
//     },
//   };
//   const outputRequestRide = await requestRide.execute(inputRequestRide);
//   const inputSignupDriver: any = {
//     name: "John Doe",
//     email: `john.doe${Math.random()}@gmail.com`,
//     cpf: "95818705552",
//     carPlate: "AAA9999",
//     isDriver: true,
//   };
//   const outputSignupDriver = await accountGateway.signup(inputSignupDriver);
//   const inputAcceptRide = {
//     rideId: outputRequestRide.rideId,
//     driverId: outputSignupDriver.accountId,
//   };
//   await acceptRide.execute(inputAcceptRide);
//   const inputStartRide = {
//     rideId: outputRequestRide.rideId,
//   };
//   await startRide.execute(inputStartRide);
//   const outputGetRide = await getRide.execute(outputRequestRide.rideId);
//   expect(outputGetRide.status).toBe("in_progress");
//   expect(outputGetRide.driverId).toBe(outputSignupDriver.accountId);
// });

// afterEach(async function () {
//   await connection.close();
// });
