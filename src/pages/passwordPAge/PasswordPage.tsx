import React from "react";
import { PasswordRequirement } from "../../Component/PasswordRequirement/PasswordRequirement";
import { PasswordRequestService } from "../../services/passwordServices/pwdReqService";
import './passwordPage.scss';
import { BiHide } from 'react-icons/bi';
import { BiShow } from "react-icons/bi";

export const PasswordPage: React.FC = () => {
    const PasswordService = new PasswordRequestService();
    const [password, setPassword] = React.useState<string>("");
    const [passwordIsValid, setPasswordIsValid] = React.useState<boolean>(false);
    const [passwordShow, setPasswordShown] = React.useState<boolean>(false);
    //console.log(passwordIsValid)
    const showHiddePassword = React.useCallback((e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setPasswordShown((prev) => !prev);
    }, [setPasswordShown]);

    React.useEffect(() => {
        console.log("body");
        setPasswordIsValid(PasswordService.verifyPassword(password));
        return ()=>{console.log("ret")}
    }, [password]);

    //console.log(passwordIsValid)
    return (
        <div className="password-page">
            <form>
                <label htmlFor="password-input">Password:</label>
                <div className="holder">
                    <input type={passwordShow ? "text" : "password"} placeholder="enter password" id="password-input" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="btn-function" onClick={showHiddePassword}>{passwordShow ? <BiHide className="icon" /> : <BiShow className="icon" />}</button>
                </div>
                <button type="submit" className={!passwordIsValid ? "not-active" : "active"} disabled={!passwordIsValid}>Submit</button>
            </form>
            <PasswordRequirement props={password} />
        </div>
    )
}