// api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b746d7bcfd47a92d2290581ff5fade0c
// b746d7bcfd47a92d2290581ff5fade0c
// const h3 = document.getElementsByTagName('h3');

// const btn = document.getElementById('btn');
const input = document.getElementById('input');
// const ul = document.querySelector('ul');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const h3 = document.querySelector('h3');
const h4 = document.querySelector('h4');
// const img = document.querySelector('img');
const h5 = document.querySelector('h5');
const h6 = document.querySelector('h6');


const api = {
    apiKey:'b746d7bcfd47a92d2290581ff5fade0c',
    url:'api.openweathermap.org/data/2.5/'
}

$('#input').keypress( function(e){
    if(e.which === 13){
        // let state = $(this).val();
        // console.log(state);
        console.log($(this).val());
        ajaxFun();
    }
});

function ajaxFun(){
    let state = input.value;
    
    fetch(`https://${api.url}weather?q=${state}&units=metric&APPID=${api.apiKey}`)
    .then((apiData)=>{
        console.log(apiData);
        return apiData.json();
    })
    .then((realData)=>{
        console.log(realData);
        h3.innerText = `${realData.name}, ${realData.sys.country}`;
        h1.innerHTML = `${Math.round(realData.main.temp)}<span>&#176;C </span>`;
        h4.innerText = currentDate();
        h5.innerText = realData.weather[0].main;
        h6.innerHTML = `${Math.round(realData.main.temp_min)}<span> &#176;C </span> /  ${Math.round(realData.main.temp_max)}<span>&#176;C </span>`;
        // var iconcode = realData.weather[0].icon;
        // var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
        // img.src = iconurl;
        input.value = "";
    }).catch((err) => {
        console.log(err);
    });
}


function currentDate() {
    var WeekDay = new Date;
    let week = ["Sunday", "Monday", "Tuesday", "Wednday", "Thrusday", "Friday", "Saturday"];
    let month = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = WeekDay.getDate();
    return `${week[WeekDay.getDay()]}, ${day}  ${month[WeekDay.getMonth()]} , ${WeekDay.getFullYear()}`;
}

