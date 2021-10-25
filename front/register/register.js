const names = document.getElementById('name')
const email = document.getElementById('email')
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const msg = document.getElementById('msg')
const button = document.getElementById('button')
//
// const inputs = {
//     name: names.value,
//     email: email.value,
//     pass1: pass1.value,
//     pass2: pass2.value
// }

button.onclick = () => {
    const inputs = {
        name: names.value,
        email: email.value,
        pass1: pass1.value,
        pass2: pass2.value
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
    };
    fetch('http://localhost:3000/registrate')
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    console.log(inputs.name, inputs.email, inputs.pass1, inputs.pass2)
}
