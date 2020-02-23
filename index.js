

    const Headlineapi=`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=a9d3afa1e1a444ff92ddce370befbace`;
    window.fetch(Headlineapi).then(data=>{
        data.json().then(news => {
            console.log(news)
           var newinfo = news.articles;
           var object=[];
           for(let article of newinfo){
              object+=`
             <div class="container">
            <div class="card mb-5 bg-primary">

            <div class="card-body">
            <img src="${article.urlToImage}"/>
           
           <h3>${article.title}</h3>
           <p>${article.description}</p>
           <a href="${article.url}" class="btn btn-success btn-block" > Go to news </a></div>
           
           </div>
        </div>`;
               document.getElementById("template").innerHTML=object;
           }

}).catch(err=>console.log(err))
    }).catch(err=>console.log(err))



    const newsapi=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=a9d3afa1e1a444ff92ddce370befbace`;
    window.fetch(newsapi).then(data=>{
        data.json().then(news =>{
           var newinfo = news.articles;
           var object=[];
           for(let article of newinfo){
              object+=`
             <div class="container">
            <div class="card mb-5 bg-primary">

            <div class="card-body">
            <img src="${article.urlToImage}"/>
           
           <h3>${article.title}</h3>
           <p>${article.description}</p>
           <a href="${article.url}" class="btn btn-success btn-block" > Go to news </a></div>
           
           </div>
        </div>`;
               document.getElementById("entertainment").innerHTML=object;
           }

}).catch(err=>console.log(err))
    }).catch(err=>console.log(err))



    const healthapi=`https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=a9d3afa1e1a444ff92ddce370befbace`;
    window.fetch(healthapi).then(data=>{
        data.json().then(news =>{
           var newinfo = news.articles;
           var object=[];
           for(let article of newinfo){
              object+=`
             <div class="container">
            <div class="card mb-5 bg-primary">

            <div class="card-body">
            <img src="${article.urlToImage}"/>
           
           <h3>${article.title}</h3>
           <p>${article.description}</p>
           <a href="${article.url}" class="btn btn-success btn-block" > Go to news </a></div>
           
           </div>
        </div>`;
               document.getElementById("health").innerHTML=object;
           }

}).catch(err=>console.log(err))
    }).catch(err=>console.log(err))

// time
    setInterval(()=>{
        var time = new Date().toLocaleTimeString();
        document.getElementById("time").innerHTML=time;
    })

// weather

    var search = document.getElementById("search");

search.addEventListener('keyup', e =>{

    if(e.keyCode === 13){
      
        var getCityName = e.target.value
    }
    getWeather(getCityName);
});

function getWeather(getCityName){
    const weatherapi = `http://api.openweathermap.org/data/2.5/weather?q=${getCityName}&&mode=json&units=metric&APPID=6ade1eb40591bd40b2132d109419fb35`
   window.fetch(weatherapi)
   .then(data => {data.json().then(weather=>{


        var weatherData = weather.weather;
        for(let x of weatherData){
            output = `
            <h1 class="name">${getCityName}</h1>
            <div class="card  ">
 
  <div class="card-body">
  
  <p class="temp">${weather.main.temp}&deg;c</p>
  <span><img src="https://openweathermap.org/img/wn/${x.icon}.png"/></span>
   
    <h5 class="card-title display-5"> ${x.description}</h5>
   
  
    
  </div>
</div>
            
            
            `;
            document.getElementById("weather").innerHTML=output;
        }



   }).catch(err => console.log(err));
}).catch(err => console.log(err));

}