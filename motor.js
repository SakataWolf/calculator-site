function insert(num){
    var numero
    numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean(){
    document.getElementById('resultado').innerHTML = '';
}
function back(){
    var resultado
    resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}
function vm(){
    var d,t,vm;

    d = parseInt(document.getElementById('Dis').value);
    t = parseInt(document.getElementById('Tem').value);

    vm = d / t;

    document.getElementById('vm').innerHTML = 
    "A velocidade média do objeto é: " + vm;
}
function muv(){
    var vi,ace,tem,vf;

    vi = parseInt(document.getElementById('vi').value);
    ace = parseInt(document.getElementById('ace').value);
    tem = parseInt(document.getElementById('tem').value);

    vf = vi + ace*tem;

    document.getElementById('muv').innerHTML = 
    "A velocidade Final do objeto é: " + vf;
}
function torricelli(){
    var vi,ace,tem,vf,x;

    vi = parseInt(document.getElementById('vel').value);
    ace = parseInt(document.getElementById('acel').value);
    tem = parseInt(document.getElementById('temp').value);
    x = vi * vi + (2*ace*tem);
    vf= Math.sqrt(x).toFixed(3);

    document.getElementById('tor').innerHTML = 
    "A velocidade Final do objeto é: " + vf;
}
function triangulo(){
    var b,a,res

    b = parseInt(document.getElementById('base').value);
    a = parseInt(document.getElementById('altura').value);
    res = b * a / 2;

    document.getElementById('res').innerHTML = 
    "A Área do triângulo é: " + res;
}