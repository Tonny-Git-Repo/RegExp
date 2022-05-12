import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswLength3 = "judshfklkasdfjahsodfjapoisdja psdapdiajfdsa";

test('verify the length of the password', () =>{
    expect(pswService.passwordLength(pswLength3)).toBeTruthy();
});
