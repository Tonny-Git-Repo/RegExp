import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";

const password ="t-123 ?iuQ";
const pswService = new PasswordRequestService();
test("verify if password requirements are meets", () => {
    expect(pswService.verifyPassword(password)).toBeTruthy();
})