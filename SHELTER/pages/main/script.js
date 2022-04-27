document.addEventListener('DOMContentLoaded', () => {
    const burgerButton = document.querySelector('.burger');
    const headerNav = document.querySelector('.header-nav');
    const body = document.querySelector('body');
    const navItems = document.querySelectorAll('.nav-item');
    const slidersContainer = document.querySelector('.sliders-container');
    const backBtn = document.querySelector('.back');
    const forwardBtn = document.querySelector('.forward');
    const btnSlider = document.querySelectorAll('.btn-slider');

    
    // burger menu
    function burgerMenu() {
        if (!burgerButton.classList.contains('open-burger')) {
            burgerAdd(burgerButton, 'open-burger');
        } else {
            burgerRemove(burgerButton, 'open-burger');
        }

        if (!headerNav.classList.contains('active-link')) {
            burgerAdd(headerNav, 'active-link');
        } else {
            burgerRemove(headerNav, 'active-link');
        }

        if (!body.classList.contains('body-hidden')) {
            burgerAdd(body, 'body-hidden');
        } else {
            burgerRemove(body, 'body-hidden');
        }
    }
    function burgerAdd(elem, className) {
        elem.classList.add(className);
    }
    function burgerRemove(elem, className) {
        elem.classList.remove(className);
    }
    burgerButton.addEventListener('click', () => burgerMenu());
    navItems.forEach(e => {e.addEventListener('click', () => {
        burgerRemove(burgerButton, 'open-burger');
        burgerRemove(headerNav, 'active-link');
        burgerRemove(body, 'body-hidden');
    })});
    headerNav.addEventListener('click', e => {
        // console.log(e.target);
        if (e.target.classList.contains('header-nav')) {
            burgerRemove(burgerButton, 'open-burger');
            burgerRemove(headerNav, 'active-link');
            burgerRemove(body, 'body-hidden');
        }
    })


    // карточки питомцев
    function cardPet(pet, style) {
        let item = document.createElement('div');
        item.classList.add('slider-item');
        if (style) item.classList.add(style);
        item.innerHTML = `
            <div class="slider-image">
                <img width="270" height="270" src="${pet.img}" alt="${pet.name}" class="pets-image">
            </div>
            <div class="slider-text">${pet.name}</div>
            <button class="slider-more">Learn more</button>
        `;

        item.addEventListener('click', () => {
            modal(pet.name, pet.breed, pet.description, pet.age, pet.inoculations, pet.diseases, pet.parasites, pet.img)
        })

        if (slidersContainer) slidersContainer.append(item)

        setTimeout(()=> {item.classList.remove(style)},1100)
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

    let sizeWindow = 0;
    function reWindow() {
        let sw = document.documentElement.clientWidth;
        if (sw >=1280) {
            return 3;
        }
        if (sw < 1280 && sw > 768) {
            return 2;
        }
        if (sw < 768) {
            return 1;
        }
    }
    sizeWindow = reWindow()

    fetch('../../pets.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if (data) {
            let arrPet = [];
            for (let i = 0; i < sizeWindow; i++) {
                arrPet.push(i);
            }
            arrPet.forEach(e => {
                cardPet(data[e])
            });

            function cardCar(transfer, dotTransfer, appearance){
                let sliderItem = document.querySelectorAll('.slider-item');
                sliderItem.forEach((e) => {
                    e.classList.add(transfer)
                })
                setTimeout(() => {
                    let animTransfer= document.querySelectorAll(dotTransfer);
                    animTransfer.forEach(e => {
                        e.remove(e)
                    });
                }, 1000)
        
                
                const arrNew = [];
                    
                for (let i = 0; i < sizeWindow; i++){
                    let rand = Math.round(Math.random() * ((data.length - 1)));
        
                    if (arrPet.indexOf(rand) == -1 && arrNew.indexOf(rand)  == -1 ) {
                        arrNew.push(rand);
                    } else {
                        i--;
                    }
                }
        
                arrPet = arrNew;
                
                setTimeout(() => {
                    arrPet.forEach(e => {
                        cardPet(data[e], appearance);
                    });
                }, 1000)

                btnSlider.forEach(e => {
                    e.style.pointerEvents = 'none';
                    setTimeout(()=> {e.style.pointerEvents = 'auto'},2000)
                })

            }
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    cardCar('animonLeft', '.animonLeft', 'animvisRight')
                });
            }
            if (forwardBtn) {
                forwardBtn.addEventListener('click', () => {
                    cardCar('animonRight', '.animonRight', 'animvisLeft')
                });
            }
            
        }
    })
    .catch((error) => {
        console.log(error);
    })
});