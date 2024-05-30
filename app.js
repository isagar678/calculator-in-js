str="";
nodelist=document.querySelectorAll(".btn");
mon=document.querySelector(".content");

nodelist.forEach(element => {
    element.addEventListener("click",()=>{
        txt=element.innerText;
        txt=txt.trim();
        if ((txt!==`=`) && (txt!='AC') && (txt!='DE')) {
            str+=txt;
            mon.innerText=str;
        }
        else if(txt=='='){
            try {
                if ((mon.innerText!='0')&&(mon.innerText!='ERROR')) {
                    
                    mon.innerText=eval(str);
                    str="";
                }
                else{
                    mon.innerText='0';
                }
            } catch (error) {
                mon.innerText="ERROR";
                str="";
            }
        }
        else if(txt=='DE'){
            str=str.slice(0,-1);
            if (str=="") {
                mon.innerText='0';
            }
            else{

                mon.innerText=str;
            }
        }
        else{
            mon.innerText="0";
            str="";
        }
    })
});
