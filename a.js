 function axjx(url){
    return new Promise((resolve,reject)=>{
            let xhr = new XMLHttpRequest();
            xhr.open('GET',url);
            xhr.responseType = 'json';
            xhr.onload = function (){
                if(this.status == 200){
                    resolve(this.response);
                }else{
                    reject(new Error(this.statusText))
                }
            };
            xhr.send();
    })
}

console.log(axjx('./data.json'));
    console.log('12321321')