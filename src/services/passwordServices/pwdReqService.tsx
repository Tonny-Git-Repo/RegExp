export class PasswordRequestService{
    verifyPassword = (password: string) =>{
       /*  console.log(passwordLength(password) && passwordSpecialChar(password) && noWhiteSpace(password) && capitalCHar(password)
        && minOneLetter(password) && minOneNumber(password) && minTwoLowLetters(password)); */
        return this.passwordLength(password) && this.passwordSpecialChar(password) && this.noWhiteSpace(password) && this.capitalCHar(password)
        && this.minOneLetter(password) && this.minOneNumber(password) && this.minTwoLowLetters(password);
    }
    
    passwordLength = (psw: string):boolean =>{
      return /^(.{3,20})$/.test(psw) as boolean;
    }

    passwordSpecialChar = (psw: string):boolean => {    
      return /(.*[!@#$&?*]+.*[!@#$&?*]+)/.test(psw);
    }

    noWhiteSpace = (psw: string):boolean => {    
      return /(^\S*$)/.test(psw);
    }

    capitalCHar = (psw: string):boolean => {    
      return /(.*[A-Z])/.test(psw);
    }

    minOneLetter = (psw: string):boolean => {    
      return /.*[a-zA-Z]/.test(psw);
    }

    minOneNumber = (psw: string):boolean => {    
      return /.*\d+/.test(psw);
    }
    
    minTwoLowLetters = (psw: string):boolean =>{    
      return /.*[a-z].*[a-z]/.test(psw);
    }
}
