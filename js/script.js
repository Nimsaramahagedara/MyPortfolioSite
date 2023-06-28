 /*SCROLL FUNCTION*/
 function smoothScrollToId(id){
    document.querySelector('#'+id).scrollIntoView({
    behavior: 'smooth'
});
}

function changeTheme(){
    const icon = document.getElementById("theme");
    const body = document.getElementsByTagName("body")[0];
    if (icon.className == "fa-regular fa-sun"){
        /*Light Theme*/
        icon.className = "fa-solid fa-moon";
        document.documentElement.style.setProperty('--black', '#4C4646');
        document.documentElement.style.setProperty('--blur', 'rgba(255, 255, 255, 0.4)');
        document.documentElement.style.setProperty('--shadeBlack', 'white');
        
    }else{
        /*Dark Theme*/
        icon.className = "fa-regular fa-sun";
        document.documentElement.style.setProperty('--black', 'white');
        document.documentElement.style.setProperty('--shadeBlack', '#0a0a0e');
        document.documentElement.style.setProperty('--blur', 'rgba(32,30,30, 0.4)');
    }
}

function menu(){
    const nav =  document.getElementsByClassName("menu")[0];
    var icon = document.getElementById('icon');
 
    if(nav.style.height == "0px" || nav.style.height == "" ){
         icon.setAttribute("class","fa-solid fa-bars-staggered menuico");
         nav.style.height = "150px";
    }else{
         nav.style.height = "0px";
         icon.setAttribute("class","fa-solid fa-bars menuico");
    }
 }

 function show_skill(name, id){
    var icon = document.getElementById(id);
    var skillset = document.getElementById(name);
    if(skillset.style.height == "0px" || skillset.style.height == "" ){
        console.log("true");
        icon.style.rotate = "180deg";
        skillset.style.height = "200px";
    }else{
        console.log("flase");
        icon.style.rotate = "0deg";
        skillset.style.height = "0px";
    }
    
 }

 function display_toggle(id){
    const element = document.getElementById(id);
    if(element.style.visibility == "hidden" || element.style.visibility == ""){
        element.style.visibility = "visible";
    }else{
        element.style.visibility = "hidden";
    }
    
 }