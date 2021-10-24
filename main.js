
async function getInfo() {
    let url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
    try {
        let res = await fetch(url)
        let data = await res.json()
        console.log(data.items[0].volumeInfo.title);
        console.log(data.items[0].volumeInfo.description);
    } catch (err) {
        console.log(err);
    }
}


getInfo()

// 
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