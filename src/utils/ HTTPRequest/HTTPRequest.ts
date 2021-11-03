import Error500 from "../../pages/500/500";

const METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

type Options = {
    headers?: Record<string, string>,
    method?: string,
    data?: { [key: string]: any },
    timeout?: number,
}
function queryStringify(data) {
    if (typeof data !== 'object') {
        throw new Error('Data must be object');
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
    }, '?');
}

export default class HTTPrequest {
    baseUrl: string;
  
    constructor(baseUrl = '/') {
      this.baseUrl = baseUrl;
    }
    
    get = (url, options: { [key: string]: any } = {}) => {
        return this.request(this.baseUrl + url, {...options, method: METHODS.GET}, options.timeout);
    };

    post = (url, options: { [key: string]: any } = {}) => {
        return this.request(this.baseUrl + url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url, options: { [key: string]: any } = {}) => {
        return this.request(this.baseUrl + url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url, options: { [key: string]: any } = {}) => {
        return this.request(this.baseUrl + url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request = (url, options: { [key: string]: any } = {}, timeout = 5000) => {
        const {headers = {}, method, data} = options;

        return new Promise(function(resolve, reject) {
            if (!method) {
                reject('No method');
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;

            xhr.withCredentials = true;
            xhr.open(
                method,
                isGet && !!data
                    ? `${url}${queryStringify(data)}`
                    : url,
            );

            Object.keys(headers).forEach(key => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function() {
                if(xhr.status >= 200 && xhr.status < 300){
                    resolve(xhr.response);
                }
                else{
                    reject(xhr.response);
                }
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || !data) {
                xhr.send();
            } else {
                if (data instanceof FormData) {
                    xhr.send(data);
                } else {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify(data));
                }
            }
        });
    };
}