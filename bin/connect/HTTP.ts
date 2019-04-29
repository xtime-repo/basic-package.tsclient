
export class HTTP {
    GET_COMPONENT(arg0: string): Promise<string> {
        return new Promise(resolve => {
            this.GET(arg0, data => {
                resolve(data);
            })
        });
    }

    POST_COMPONENT(arg0: string ,values:any): Promise<string> {
        return new Promise(resolve => {
            this.POST(arg0,values ,  data => {
                resolve(data);
            })
        });
    }
    GET(Link: string, FNC: (data: string) => void) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (FNC) FNC(this.responseText)
            }
        };
        xhttp.open('GET', Link, true);
        xhttp.send();
    }
    POST(Link: string, data: any, FNC: (data: string) => void) {

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (FNC) FNC(this.responseText)
            }
        };
        xhttp.open('POST', Link, true);
        xhttp.send(JSON.stringify(data));
    }
}