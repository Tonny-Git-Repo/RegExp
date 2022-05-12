
export class UrlService{
    parseUrl = (url:string) =>{
        return /^(?<protocol>.*)(?::\/\/)(?<domain>[\w\-\.]*)(?<port>:\d*)?(?<path>\/[\w\-\.\/]*)?(?<query>\?[\w\.\-\=\+\&]*)?(?<fragment>#[\w]*)?$/.exec(url)
    }
}

/**
 * retrun typ def
 * function apass
 */