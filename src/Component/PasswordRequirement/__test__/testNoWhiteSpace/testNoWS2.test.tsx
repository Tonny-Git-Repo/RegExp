import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const noWS = " esfdfg";
test("verify that there are no white space in password", () =>{
    expect(pswService.noWhiteSpace(noWS)).toBeTruthy();
})