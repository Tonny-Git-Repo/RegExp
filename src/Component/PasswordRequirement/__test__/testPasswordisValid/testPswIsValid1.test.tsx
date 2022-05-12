import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";

const password ="m@1pT?";
const pswService = new PasswordRequestService();
test("verify if password requirements are meets", () => {
    expect(pswService.verifyPassword(password)).toBeTruthy();
})