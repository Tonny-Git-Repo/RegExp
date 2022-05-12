import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const noWS = "esf@sdfik";
test("verify that there are no white space in password", () =>{
    expect(pswService.noWhiteSpace(noWS)).toBeTruthy();
})