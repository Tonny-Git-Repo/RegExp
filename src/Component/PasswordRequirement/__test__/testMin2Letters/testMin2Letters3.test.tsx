import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswM2Let = "0 - 12 / 87";

test("verify if password contains at least 2 letters", () =>{
    expect(pswService.minTwoLowLetters(pswM2Let)).toBeTruthy();
})