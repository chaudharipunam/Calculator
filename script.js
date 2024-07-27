let display=document.getElementById("display");
        let buttons=Array.from(document.getElementsByClassName("btn"));
        let input="";

        function updateDisplay(){
            display.innerText=input.slice(-10);
        }
        
        function factorial(number){
            if(number<0)return "Error";
            if(number===0||number===1)return 1;
            let res=1;
            for (let i=2; i<=number; i++){
                res*=i;
            }
            return res;
        }

        buttons.map((btn)=>{
            btn.addEventListener("click",(e)=>{
                let key=e.target.innerText;

                if(key==="AC"){
                    input = "";
                }else if(key==="="){
                    try{
                        let res=eval(input);
                        input=res.toString();
                    }
                    catch{
                        input="Error";
                    }
                }
                else if(key==="del"){
                    input=input.slice(0,-1);
                }
                else if(key==="sqrt"){
                   input=Math.sqrt(parseFloat(input)).toString();
                }
                else if(key==="exp"){
                   input+="**";
                }
                else if (key==="sq"){
                    input=Math.pow(parseFloat(input), 2).toString();
                } 
                else if(key==="1/x"){
                    let number = parseInt(input);
                    input = factorial(number).toString();
                } 
                else{
                    if(input==="0"&&key!=="."){
                        input=key;
                    }
                    else{
                        input+=key;
                    }
                }
                updateDisplay();
            });
        });