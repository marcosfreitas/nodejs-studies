import { UserModel } from "@models/UserModel";
import { UserInterface } from "@interfaces/UserInterface";

test("should save user", async () => {
  let user: UserInterface = new UserModel();
  user = {
    email: "magda01@getnada.com",
    firstName: "Magda",
    lastName: "Freire",
  };
  expect(user.email).toEqual("magda01@getnada.com");
});
