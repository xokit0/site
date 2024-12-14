



//atribuindo um item a uma constante
const calendario = document.querySelector(".calendario");
const data = document.querySelector(".data");
const diasTela = document.querySelector(".dias");
const anterior = document.querySelector("#esquerdo");
const proximo = document.querySelector("#direito");


//pegando a data
let hojee = new Date();
let hoje = hojee.getDate();
let mes = hojee.getMonth();
let ano = hojee.getFullYear();

let messes =
[
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
]


function gerar()
{


    const divs = document.querySelectorAll('.diaMesAnterior');
    const divss = document.querySelectorAll('.hoje');
    const divsss = document.querySelectorAll('.dia');
    const divssss = document.querySelectorAll('.DiaProxMes');
    
    divs.forEach
    (
        div => 
        {
        div.remove(); // Remove cada div
        }
    );
    divss.forEach
    (
        div => 
        {
        div.remove(); // Remove cada div
        }
    );
    divsss.forEach
    (
        div => 
        {
        div.remove(); // Remove cada div
        }
    );
    divssss.forEach
    (
        div => 
        {
        div.remove(); // Remove cada div
        }
    );


    data.innerHTML = messes[mes] + " " + ano;

    const primeiroDia = new Date(ano, mes , 1);//primeiro dia mes atual
    const ultimoDia =  new Date(ano, mes + 1, 0);//ultimo dia mes atual
    const anteriorUltimoDia = new Date(ano, mes, 0);//ultimo dia mes anterior



    const dia = primeiroDia.getDay();
    const ultimo = ultimoDia.getDate();
    const diaAnterior = anteriorUltimoDia.getDate();


    const proximosDias = 7 - ultimoDia.getDay() - 1;
    //console.log(proximosDias);

    for(let i = dia;i > 0; i--)
        {
            diasTela.innerHTML += `<div class = "diaMesAnterior"> ${diaAnterior - i + 1}</div>`;
        }

    //console.log(dias);


    for(x = 1; x <= ultimo; x++)
    {
        if(x == hoje && ano == ano && mes == mes)
        {
            diasTela.innerHTML += `<div class = "hoje"> ${x}</div>`;
        }
        else
        {
            diasTela.innerHTML += `<div class = "dia"> ${x}</div>`;
        }
    }
    //console.log(dias);

    for(let j = 1; j <= proximosDias; j++)
    {
        diasTela.innerHTML += `<div class = "DiaProxMes"> ${j}</div>`;
    }

}


gerar();


function proximos()
{
    mes++;
    if(mes > 11)
    {
        mes = 0;
        ano++;
    }
    gerar();
}

function anteriores()
{
    mes--;
    if(mes < 0)
    {
        mes = 11;
        ano--;
    }
    gerar();
}

anterior.addEventListener
(
    'click', () => 
    {
        anteriores();
    }
)

proximo.addEventListener
(
    'click', () => 
    {
        proximos();
    }
)