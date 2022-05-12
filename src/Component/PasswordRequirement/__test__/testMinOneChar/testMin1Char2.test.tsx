import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswMOLetter ="123456!76*m*";
test("test if password has at least one character", () => {
    expect(pswService.minOneLetter(pswMOLetter)).toBeTruthy();
});