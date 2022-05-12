import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswM1Numb = "sfkdj!s8km";
test("verify if password contains at leat one number", () =>{
    expect(pswService.minOneNumber(pswM1Numb)).toBeTruthy();
})