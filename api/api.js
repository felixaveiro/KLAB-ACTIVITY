const paragraph = document.getElementById("result");
const button = document.getElementById("btn");
const para1 = document.getElementById("result1");

let i = 1;

button.addEventListener('click', () => {
    
    // paragraph.innerHTML = "HELLOOO";
    i = i + 1;
    fetch('https://swapi.dev/api/people/'+i+'/')
        .then((response) => {
            return response.json()
        })
        .then((result) => {
            console.log(result);
            let name = result.name;
            let age = result.birth_year;
            let height = result.height;
            let eye = result.eye_color;
            paragraph.innerHTML = `<p>Name:${name}</P>
                                   <p>Age:${age}</p>
                                   <p>height:${height}</p>
                                   <p>eye_color:${eye}</p>`
            // para1.innerHTML = age;
            // paragraph.innerHTML = JSON.stringify(result);
        })   
})
