let produtos = [
["TV one", "TV", "234€"],
["CD one", "CD", "654"],
["TV two", "TV", "332€"]];


let txt = "";

produtos.forEach(myFunction);
document.getElementById("produto").innerHTML = ("Nome Categoria Preço <br>" + txt);


function myFunction(value) {
  txt += value + "<br>"; 
}