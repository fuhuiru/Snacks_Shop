let countDown = 60;
let timer;
let action;
import api from "../lib/api"

export function send(sendby,reciver,onsend){
    console.log(111);
    if(!countDown)
    return;

    timer = setInterval(() => {
        countDown--;
        if(countDown == 0){
            clearInterval(timer);
        }
    }, 1000);
    
    if(sendby == "phone"){
        action = "sms"
    }else{
        action = "mail"
    }

    return api(`captcha/${action}`,{[sendby]:reciver})
        .then(r=>{
            let code = atob(r.data.result);
            if(onsend){
                onsend(code)
            }
            return code;
        })

}