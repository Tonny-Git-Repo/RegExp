import React from "react";
import { PasswordRequestService } from "../../services/passwordServices/pwdReqService";
import './passwordRequirement.scss'

export const PasswordRequirement:React.FC<{props:string}> = (props) =>{
    const PasswordService = new PasswordRequestService()
    return(
    <div className="password-requirement">
        <h1>Password requirements</h1>
        <p className={PasswordService.passwordLength(props.props)? "fullfiled": "not-fullfiled"}>Password size 3 - 20 </p>
        <p className={PasswordService.noWhiteSpace(props.props)? "fullfiled": "not-fullfiled"}>Password has no white Space</p>
        <p className={PasswordService.minOneNumber(props.props)? "fullfiled": "not-fullfiled"}>Password contains min 1 number</p>
        <p className={PasswordService.minOneLetter(props.props)? "fullfiled": "not-fullfiled"}>Password contains at least 1 letter</p>
        <p className={PasswordService.minTwoLowLetters(props.props)? "fullfiled": "not-fullfiled"}>Password contains min 2 low letters</p>
        <p className={PasswordService.capitalCHar(props.props)? "fullfiled": "not-fullfiled"}>Password contains at leat 1 capital letter</p>
        <p className={PasswordService.passwordSpecialChar(props.props)? "fullfiled": "not-fullfiled"}>Password has at leat 2 special characters</p>
    </div>)
}; 