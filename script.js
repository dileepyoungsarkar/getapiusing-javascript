// // Create a request variable and assign a new XMLHttpRequest object to it.
// var request = new XMLHttpRequest();

// // Open a new connection, using the GET request on the URL endpoint
// request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

// request.onload = function () {
//   // Begin accessing JSON data here
// Begin accessing JSON data here
// var data = JSON.parse(this.response);

// data.forEach(movie => {
//   // Log each movie's title
//   console.log(movie.title);
// });
//   }
// }

// // Send request
// request.send();






let app = document.getElementById('root');
//console.log(app)
let logo = document.createElement('img');
logo.src = 'logo.png';

let container = document.createElement('div');
container.setAttribute('class','container');

app.appendChild(logo);
app.appendChild(container);


var request = new XMLHttpRequest();
request.open('GET','https://ghibliapi.herokuapp.com/films',true);
request.onload=function(){
//begin acces to the code json.
var data =JSON.parse(this.response);
if(request.status >=200 && request.status<400){
data.forEach(movie=>{
    const card = document.createElement('div');
    card.setAttribute('class','card');
    
    const h1 = document.createElement('h1');
    h1.textContent=movie.title;

    const p = document.createElement('p');
    movie.description = movie.description.substring(0,300);
    p.textContent =`${movie.description}`;

container.appendChild(card);
card.appendChild(h1);
card.appendChild(p);


});
} else{
   
}



    

}

request.send();


// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=a64fc1cecec1434985a3112eace6aac6';
// var req = new Request(url);
// fetch(req)
//     .then(response =>response.json() )
//      .then(json=>{
//         console.log(json.articles.title);
//      })   
       
     var request = new XMLHttpRequest();
request.open('GET','https://newsapi.org/v2/top-headlines?' +
'country=us&' +
'apiKey=a64fc1cecec1434985a3112eace6aac6',true);
request.onload=function(){
//begin acces to the code json.
var da =JSON.parse(this.response);
console.log(da)
if(request.status >=200 && request.status<400){
    da.articles.forEach(movie => {
        //   // Log each movie's title
       console.log(movie.title);
       console.log(movie.author)})}}

       request.send();