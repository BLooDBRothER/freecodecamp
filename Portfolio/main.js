function toggleopen(){
    let ham = document.getElementById("ham");
    let nav = document.getElementById("navbar");
    if(nav.className === 'nav'){
        nav.className = 'nav nav-exp';
        ham.style.transform = 'rotate(180deg)'
    }
    else{
        nav.className = 'nav';
        ham.style.transform = 'rotate(0deg)'
    }
}
