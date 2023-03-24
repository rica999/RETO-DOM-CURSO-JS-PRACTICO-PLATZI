const goku = document.getElementById("goku");

goku.addEventListener("mouseover",transformacion);
goku.addEventListener("mouseout",estadoBase);

function transformacion(){
    goku.setAttribute("src","images/goku-super-saiyan.webp");
}

function estadoBase(){
    goku.setAttribute("src","images/goku.jpg");
}