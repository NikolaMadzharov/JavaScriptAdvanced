class Request{
    response = undefined;
    fulfilled = false;

    constructor(method ,url , version, message){
        this.message = message;
        this.url = url;
        this.version = version;
        this.method = method;

    }
}

let myData = new Request('GET', 'http://google.com', 'HTTP/1.1', '')
console.log(myData);
