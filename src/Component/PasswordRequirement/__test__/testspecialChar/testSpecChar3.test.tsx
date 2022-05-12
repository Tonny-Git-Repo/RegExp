import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();
const pswSpecChar = " * ?";

test("test if the password has at least 2 spechail characters", ()=>{
    expect(pswService.passwordSpecialChar(pswSpecChar)).toBeTruthy()
});