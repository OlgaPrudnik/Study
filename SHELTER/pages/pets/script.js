const data = [
    {
    "name": "Jennifer",
    "img": "../../assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Sophia",
    "img": "../../assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Woody",
    "img": "../../assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
    },
    {
    "name": "Scarlett",
    "img": "../../assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Katrine",
    "img": "../../assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Timmy",
    "img": "../../assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
    },
    {
    "name": "Freddie",
    "img": "../../assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
    },
    {
    "name": "Charly",
    "img": "../../assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
    }
];

const ourPetsCards = document.querySelector('.our-pets-cards'),
    body = document.querySelector('body'),
    navigButton = document.querySelectorAll('.searchBtn');

function burgerAdd(elem, className) {
    elem.classList.add(className);
}
function burgerRemove(elem, className) {
    elem.classList.remove(className);
}
function cardPet(pet) {
    let item = document.createElement('div');
    item.classList.add('pet-card');
    item.innerHTML = `
        <div class="pet-card-image">
            <img width="270" height="270" src=${pet.img} alt="${pet.name}" class="pets-image">
        </div>
        <div class="pet-card-text">${pet.name}</div>
        <button class="pet-card-more">Learn more</button>
    `;

    item.addEventListener('click', () => {
        modal(pet.name, pet.breed, pet.description, pet.age, pet.inoculations, pet.diseases, pet.parasites, pet.img)
    })

    ourPetsCards.append(item)
}
function modal(name, breed, description, age, inoculations, diseases, parasites, img) {
    burgerAdd(body, 'body-hidden');
    let modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
        <div class="modal-container">
            <div class="modal-image">
                <img src=${img} alt="katrine" class="${name}">
            </div>
            <div class="modal-content">
                <h3 class="modal-name">${name}</h3>
                <h4 class="modal-breed">${breed}</h4>
                <p class="modal-description">${description}</p>
                <ul class="characteristics-list">
                    <li class="characteristics-item"><p>Age: </p>${age}</li>
                    <li class="characteristics-item"><p>Inoculations: </p>${inoculations}</li>
                    <li class="characteristics-item"><p>Diseases: </p>${diseases}</li>
                    <li class="characteristics-item"><p>Parasites: </p>${parasites}</li>
                </ul>
            </div>
            <div class="modal-btn-close">
                <button class="modal-close">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/>
                    </svg>
                </button>
            </div>
        </div>
    `;

    let close = modal.querySelector('.modal-close');
    close.addEventListener('click', () => {
        modal.remove(modal)
        burgerRemove(body, 'body-hidden');
    })
    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.remove(modal)
            burgerRemove(body, 'body-hidden');
        }
    })

    body.append(modal)
}



let next = document.querySelector('.searchBtn-next');
let prev = document.querySelector('.searchBtn-prev');
let counts = document.querySelector('.searchBtn-count');
let lastBtn = document.querySelector('.searchBtn-end');
let firstBtn = document.querySelector('.searchBtn-first');

let sizeWindow = 0;
let r = Math.round(Math.random());

const arr = [1,2,3,4,5,6,7,8];
const newArr48 = [];

function creatArr48() {
    const arrCopy = [...data];
    for (let i = 0; i < 48/arr.length; i++) {
        let partArr = arrCopy.splice(0, 1);
        arrCopy.push(partArr)
        newArr48.push(arrCopy.flat());
    }
}
creatArr48()


if (r) {
    newArr48.reverse()
    newArr48.forEach(e => e.reverse())
}

function reWindow() {
    let sw = document.documentElement.clientWidth;
    if (sw >=1280) {
        return 8;
    }
    if (sw < 1280 && sw > 768) {
        return 6;
    }
    if (sw < 768) {
        return 3;
    }
}
sizeWindow = reWindow()

let activeFirstPet = 0;                            
let totalOutpuItem = 0;                             
let maxPages = newArr48.flat().length / sizeWindow; 
let currentSratePage = 0;                           
let currentPage = 0;                                

function blockBtn(){
    if (currentPage == maxPages){
        next.classList.add('searchBtn-disable');
        lastBtn.classList.add('searchBtn-disable');
    } else {
        next.classList.remove('searchBtn-disable');
        lastBtn.classList.remove('searchBtn-disable');
    }
    if (currentPage > 1) {
        prev.classList.remove('searchBtn-disable');
        firstBtn.classList.remove('searchBtn-disable');
    } else {
        prev.classList.add('searchBtn-disable');
        firstBtn.classList.add('searchBtn-disable');
    }
}

function loadPets(size, current){
    currentPage++;
    ourPetsCards.innerHTML = '';

    for (let i = current; i < current + size; i++) {
        cardPet(newArr48.flat()[i])
        currentSratePage = i;
    }

    counts.innerText = currentPage;

    blockBtn()
}
loadPets(sizeWindow, currentSratePage)

function loadPetsBack(size, current){
    currentPage--;
    ourPetsCards.innerHTML = '';
    counts.innerText = currentPage;

    for (let i = current - (size * 2); i < current - size; i++){
        console.log(i);
        cardPet(newArr48.flat()[i])
        currentSratePage = i;
    }

    blockBtn();
}

next.addEventListener('click', () => {
    loadPets(sizeWindow, currentSratePage+1);
    window.scrollTo(0, ourPetsCards.offsetTop-120);
})
prev.addEventListener('click', () => {
    loadPetsBack(sizeWindow, currentSratePage+1);
    window.scrollTo(0, ourPetsCards.offsetTop-120);
})
lastBtn.addEventListener('click', () => {
    ourPetsCards.innerHTML = '';
    currentPage = maxPages;
    counts.innerText = currentPage;

    let initElem = newArr48.flat().length - sizeWindow;

    for (let i = initElem; i < initElem + sizeWindow; i++) {
        cardPet(newArr48.flat()[i])
    }

    blockBtn();
    window.scrollTo(0, ourPetsCards.offsetTop-120);

    currentSratePage = newArr48.flat().length - 1;
})
firstBtn.addEventListener('click', () => {
    ourPetsCards.innerHTML = '';
    currentPage = 1;
    counts.innerText = currentPage;

    for (let i = 0; i < sizeWindow; i++) {
        cardPet(newArr48.flat()[i]);
        currentSratePage = i;
    }

    blockBtn();
    window.scrollTo(0, ourPetsCards.offsetTop-120);
})