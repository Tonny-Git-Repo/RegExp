import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswLength1 ="qiuz";

test("verify the lenght of password", () =>{
    expect(pswService.passwordLength(pswLength1)).toBeTruthy;
}) 