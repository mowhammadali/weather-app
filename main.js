// api.openweathermap.org/data/2.5/weather?q=tehran&appid=56f4ae0b95dea9ccd641a979ebfb53a9&units=metric

const form = document.querySelector(".top-banner form");
const input = document.querySelector(".city");
const message = document.querySelector(".message");
const container = document.querySelector(".ajax-section .container");


let apiKey = "56f4ae0b95dea9ccd641a979ebfb53a9";


form.addEventListener("submit" , event => {
    event.preventDefault();

    let inputValue = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    input.value = "";


    fetch(url)
        .then((res) => res.json())
            .then((data) => {

                const {main , name , sys , weather} = data;

                const markUp = `
                    <p class="city-name">${name} ${sys.country}</p>
                    <h2 class="temp">${Math.round(main.temp)}<span>°C</span></h2>
                    <i class="bi bi-hurricane"></i>
                    <p class="condition">${weather[0].description}</p>`;

                
                const ul = document.createElement("ul");
                ul.classList.add("cities");
                ul.innerHTML = markUp;


                container.appendChild(ul);

                message.innerText = "";

            })
                .catch(() => {
                    message.innerText = "please search for a valid city !"
                })
})
