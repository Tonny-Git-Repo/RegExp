import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswLength2= "s";
test('verify the length of the password', () =>{
    expect(pswService.passwordLength(pswLength2)).toBeTruthy();
});