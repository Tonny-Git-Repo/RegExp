import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswCapLet = "dfjasd asdjhj!@"
test("verify that password has at last 1 Chapital letter", () =>{
    expect(pswService.capitalCHar(pswCapLet)).toBeTruthy();
});