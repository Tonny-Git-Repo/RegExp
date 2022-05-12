import { PasswordRequestService } from "../../../../services/passwordServices/pwdReqService";

const password ="t-123?iuQjduugad@jduuga#ddfaiur346rwfwo";
const pswService = new PasswordRequestService();
test("verify if password requirements are meets", () => {
    expect(pswService.verifyPassword(password)).toBeTruthy();
})