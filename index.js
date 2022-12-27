
    let hun_el = document.getElementById("hun");
    let ten_el = document.getElementById("ten");
    let one_el = document.getElementById("one");
    let start_el = document.getElementById("start");
    let stop_el = document.getElementById("stop");
    let reset_el = document.getElementById("reset");
    
    let seconds=0;
    let mili=0;
    let minutes = 0;
    let hour=0;
    let timing;

    start_el.addEventListener("click",starting);
    stop_el.addEventListener("click",stoped);
    reset_el.addEventListener("click",reseted);

    function stoped(){
        clearInterval(timing);
    }

    function reseted(){
        clearInterval(timing);
        mili=0;
        seconds=0;
        minutes=0;
        hour=0;
        hun_el.innerText = "00";
        ten_el.innerText="00";
        one_el.innerText="00";
    }


    function starting(){
        clearInterval(timing)
        timing = setInterval(go,10)
    }


    function go(){
        mili++;
        if(mili<9){
            one_el.innerText="0"+mili;
        }
        if(mili>9){
            one_el.innerText=mili;
        }
        if(mili>99){
            seconds++;
            ten_el.innerText="0"+seconds;
            mili=0;
            one_el.innerText="0"+mili;
        }
        if(seconds>9){
            ten_el.innerText=seconds;
        }
        if(seconds>59){
            minutes++;
            if(minutes<9){
                hun_el.innerText="0"+minutes;
            }            
            seconds=0;
            ten_el.innerText="0"+seconds;
        }
        if(minutes>9){
            hun_el.innerText=minutes;
        }
    }
