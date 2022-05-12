import React from "react"
import { ErrorModal } from "../../Component/Modal/errorModal/ErrorModal";
import { UrlPaser } from "../../Component/UrlParser/UrlPaser";
import { UrlService } from "../../services/url-service/urlService";


export const UrlPage: React.FC =() =>{
    const UrlServices = new UrlService();
    const [url, setUrl] = React.useState<string>("");
    const [urlparts, setUrlParts] = React.useState<string[]>();
    const [showError, setShowError] = React.useState<boolean>(false);

    const getUrlParts = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        const parsedUrl = UrlServices.parseUrl(url);
        if(parsedUrl != null){
            setUrlParts(Array.from(parsedUrl));
            setUrl("");
        }else{
            setUrlParts([]);
            displayError();
        }
    }
    const displayError= () =>{
        setShowError(true);
    }
    const closeModal = () =>{
        setShowError(false)
    }
    const clearUrl =(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{
        e.preventDefault();
        setUrl("");
    }
   // console.log(urlparts);
    return (<div>
         <div className="password-page">
        <form>
        <label htmlFor="password-input">url to parse:</label>
        <div className="holder">
         <input type="text" placeholder="enter url to parse" id="password-input" value={url} onChange={e=>setUrl(e.target.value)}/>
         <button className="btn-function" onClick={e => clearUrl(e)}>Clear</button>
        </div>
        <ErrorModal isOpen={showError} message = "Please provide a valid Url!"  onClose={closeModal}/>
        <button type="submit" className="active" onClick={e => getUrlParts(e)}>Submit</button>
        </form>
    </div>
    <UrlPaser props={urlparts}/>
    </div>)
}