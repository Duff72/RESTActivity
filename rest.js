document.getElementById('btn1').addEventListener('click', function one() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .then(() => document.getElementById('pOne').innerHTML = `All posts logged to console.`);});


document.getElementById('btn2').addEventListener('click', function two() { 
    return fetch('https://jsonplaceholder.typicode.com/posts/10')
  .then((response) => response.json())
  .then((json) => console.log(json))
  .then(() => document.getElementById('pTwo').innerHTML = `Post 10 logged to console.`);});

document.getElementById('btn3').addEventListener('click',   function three() { 
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'hello',
            body: 'goodbye',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json.id))
    .then(() => document.getElementById('pThree').innerHTML = `New post created and ID logged to console.`);
});


document.getElementById('btn4').addEventListener('click',   function four() {
    return fetch('https://jsonplaceholder.typicode.com/posts/12', {
        method: 'PUT',
        body: JSON.stringify({
            title: 'hello',
            body: 'goodbye',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
  }).then((response) => response.json())
  .then((json) => document.getElementById('pFour').innerHTML = `<p>Title: ${json.title}</p><p>Body: ${json.body}</p>`);
  }
);

document.getElementById('btn5').addEventListener('click',   function five() {
    return fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'PUT',
    body: JSON.stringify({
        title: 'greetings',
        body: 'goodbye',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => response.json())
.then((json) => document.getElementById('pFive').innerHTML = `<p>Title: ${json.title}</p><p>Body: ${json.body}</p>`);



});
document.getElementById('btn6').addEventListener('click',  function six() {
    return fetch('https://jsonplaceholder.typicode.com/posts/12', {
    method: 'DELETE',}).then((response) => response.json())
    .then(() => document.getElementById('pSix').innerHTML = `Post 12 successfully deleted.`);
    });

