// //
// function loadNews(filename) {
//     fetch(filename).then(function(response) {
//         return response.text();
//     }).then(function(data) {
//         console.log(data);
//         let vid = document.createElement("video");
//         let src = document.createElement("source");
//         src.src = URL.createObjectURL(data);

//         document.getElementsByTagName("h1")[0].innerHTML = data;

//         return data;
//     });
// }
// let data = loadNews("raw.githubusercontent.com/ardakshalkar/foundationsofweb2017tasks/master/week8/task82.webm");
// console.log(data);