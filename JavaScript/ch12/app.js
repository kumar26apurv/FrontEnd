let btn = document.querySelector("button");
btn.addEventListener("click", async() => {
    let fact = await getFacts();
    console.log(fact);
    let p =document.querySelector("#result");
    p.innerText = fact;
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("ERROR : ", e);
        return "no fact found";
    }
}


// fetch(url)
//     .then((response) => {
//         console.log(response);
//         return response.json()
//     })
//     .then((data) => {
//             console.log(data.fact);
//         })
//     .catch((err) => {
//         console.log("error: ", err);
//     });

// async function getFacts() {
//     let res = await fetch(url);
//     console.log(res);
// }