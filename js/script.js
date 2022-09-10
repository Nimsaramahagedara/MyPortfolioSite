

function changeTheme(){
    const icon = document.getElementById("theme");
    const body = document.getElementsByTagName("body")[0];
    if (icon.className == "fa-regular fa-sun"){
        /*Light Theme*/
        icon.className = "fa-solid fa-moon";
        body.style.background = "white";
        document.documentElement.style.setProperty('--black', '#4C4646');
        document.documentElement.style.setProperty('--blur', 'rgba(255, 255, 255, 0.4)');
        document.documentElement.style.setProperty('--shadeBlack', 'white');
        
    }else{
        /*Dark Theme*/
        icon.className = "fa-regular fa-sun";
        body.style.background = "#4C4646";
        document.documentElement.style.setProperty('--black', 'white');
        document.documentElement.style.setProperty('--shadeBlack', '#665353');
        document.documentElement.style.setProperty('--blur', 'rgba(32,30,30, 0.4)');
    }
}

function menu(){
    const nav =  document.getElementsByClassName("menu")[0];
    var icon = document.getElementById('icon');
 
    if(nav.style.display == "none"){
         icon.setAttribute("class","fa-solid fa-bars-staggered menuico");
         nav.style.display = "block";
    }else{
         nav.style.display = "none";
         icon.setAttribute("class","fa-solid fa-bars menuico");
    }
 }

 function show_skill(name, id){
    var icon = document.getElementById(id);
    var skillset = document.getElementById(name);
    if(skillset.style.display == "none"){
        console.log("true");
        icon.className ="fa-solid fa-chevron-up";
        skillset.style.display = "block";
    }else{
        console.log("flase");
        icon.className = "fa-solid fa-chevron-down";
        skillset.style.display = "none";
    }
    
 }

 function display_toggle(id){
    if(document.getElementById(id).style.display == "none"){
        document.getElementById(id).style.display = "block";
    }else{
        document.getElementById(id).style.display = "none";
    }
    
 }