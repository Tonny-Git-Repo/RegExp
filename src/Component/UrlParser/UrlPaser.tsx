import React from "react";
import './urlParser.scss';

export const UrlPaser:React.FC<{ props: string[] | undefined; }> = React.memo((props) =>{
    const [display, setDisplay] = React.useState<boolean[] >([false, false, false, false, false]);
    const [text, setText ] =React.useState<string[]>([]);
    React.useEffect(() =>{
        if(props.props!= undefined){
            setDisplay(props.props?.map((elt) => elt!==undefined? true : false))
            setText(props.props.map((elt) => elt!== undefined ? elt : ""));
        }
    },[props])
    return(<div className="url-parser">
      <h1>Url parts:</h1>  
      <p className={display[0]? "display": "not-display"}><span className="span-text">Url :</span><span className="parts-text">{text[0]}</span></p>
      <p className={display[1]? "display": "not-display"}><span className="span-text">protocol :</span><span className="parts-text">{text[1]}</span></p>
      <p className={display[2]? "display": "not-display"}><span className="span-text">domaine :</span><span className="parts-text">{text[2]}</span></p>
      <p className={display[3]? "display": "not-display"}><span className="span-text">port :</span><span className="parts-text">{text[3]}</span></p>
      <p className={display[4]? "display": "not-display"}><span className="span-text">path :</span><span className="parts-text">{text[4]}</span></p>
      <p className={display[5]? "display": "not-display"}><span className="span-text">query :</span><span className="parts-text">{text[5]}</span></p>
      <p className={display[6]? "display": "not-display"}><span className="span-text">fragment :</span><span className="parts-text">{text[6]}</span></p>
    </div>)
})