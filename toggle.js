const toggle = () => {
    let plans = document.getElementsByClassName("plan");
      
    for (let i=0; i<plans.length; i++) {
        plans[i].innerHTML = "/Annually"
    }
    
    let number = document.getElementsByClassName("number");
        
    for (let i=0; i<number.length; i++) {
        number[i].innerHTML += "0";
    }
}

const reload = () => {
    window.location.reload();
}