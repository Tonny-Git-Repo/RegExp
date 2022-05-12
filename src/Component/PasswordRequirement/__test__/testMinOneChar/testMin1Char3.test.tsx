import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswMOLetter =" 7645 !*@ p*";
test("test if password has at least one character", () => {
    expect(pswService.minOneLetter(pswMOLetter)).toBeTruthy();
});