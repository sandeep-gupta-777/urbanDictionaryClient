/*this module will communicate with server*/
let ServerModule = (function () {
    let xhr;
    let init = function () {
      xhr = new XMLHttpRequest();

    };
    let getResults = function (url) {
        // url = 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=lit';

        return new Promise(function (resolve, reject) {

            xhr.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // alert(this.responseText);
                    resolve(this.responseText);
                }
            };
            xhr.open("GET", url, true);
            xhr.setRequestHeader('X-Mashape-Key','7YkP6uK3iumshZ00IYBJ2sesJRnsp1DVdJ0jsnwvcPGeQQgCNH');
            xhr.setRequestHeader('Accept','text/plain');
            xhr.send(null);
        });
    };
    return{
        init,
        getResults,
    }
})();