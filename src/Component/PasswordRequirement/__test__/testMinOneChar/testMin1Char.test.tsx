import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";
const pswService = new PasswordRequestService();

const pswMOLetter ="265!98@3#*";
test("test if password has at least one character", () => {
    expect(pswService.minOneLetter(pswMOLetter)).toBeTruthy();
});