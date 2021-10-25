
// Previous Way to fetch
// fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699")
//     .then(res => res.json())
//     .then((result) => {
//           items= result.items;
//           console.log(items);
//         }),
//       // Note: it's important to handle errors here
//       // instead of a catch() block so that we don't swallow
//       // exceptions from actual bugs in components.
//       (error) => {
//        console.log(error);
//       }


//Abrar soluation
// New Way To fetch

async function getInfo() {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
    try {
        let res = await fetch(url)
        let data = await res.json()
        let tital = data.items[0].volumeInfo.title;
        let des= data.items[0].volumeInfo.description;

        showrsulat(tital , des)
    } catch (err) {
        console.log(err);
    }
}


getInfo()

function showrsulat(a , b ){
    console.log(a);
    console.log(b);

}


// Timing Event Exmaple 
let btn1 = document.getElementById("btn1")
let timeout_text = document.getElementById("timeout_text")
let bnt2 = document.getElementById("bnt2")
let time;

btn1.onclick = () => {
    timeout_text.textContent = 'The timeout has been started'
    time = setTimeout(() => {
            timeout_text.innerHTML = `The timeout has been <span style="color: green">triggered! </span>`
        }, 3000)
}

bnt2.onclick = () => {
    clearTimeout(time)
    timeout_text.textContent = 'The timeout has been cleared'
}