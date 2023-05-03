const author = document.getElementById("author");
const job = document.getElementById("job");
const description = document.getElementById("description");
const image = document.getElementById("image"); 
const btnNext = document.getElementById("btn-next");
const btnBack = document.getElementById("btn-back");
const btnRandom = document.getElementById("btn-random");

let index = 0;

const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        image: "https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up"
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Design",
        image: "https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg",
        text: "Helvetica artisan kindfolk thundercats. Disrupt glossier gastropub deep v vice frazen.",
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        image: "https://images2.imgbox.com/56/88/oJvFN315_o.jpeg",
        text: "Glossier tattooed 8-bit, fixie waistcoat ooffal activated charcoal slow-carb marfa",
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        image: "https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg",
        text: "Edison bulp put a bird on it humblebrag, marfa pok pok heirloom fashion axe crazy stumptown venmo actually seitan.",
    },
];

btnNext.addEventListener("click", function(){

    if(index === 4) index = 0;
    author.innerText = reviews[index].name;

    job.innerText = reviews[index].job;

    description.innerText = reviews[index].text;

    image.setAttribute("src", reviews[index].image);
    index++;
})

btnBack.addEventListener("click", function(){
    if(index < 0) index = 3;

    author.innerText = reviews[index].name;

    job.innerText = reviews[index].job;

    description.innerText = reviews[index].text;

    image.setAttribute("src", reviews[index].image);
    index--;
})

btnRandom.addEventListener("click", function(){
    index = Math.floor(Math.random() * 4) + 0;
    console.log(index)

    author.innerText = reviews[index].name;

    job.innerText = reviews[index].job;

    description.innerText = reviews[index].text;
    console.log(index);

    image.setAttribute("src", reviews[index].image);
})