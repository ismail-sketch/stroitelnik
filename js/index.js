
window.addEventListener('DOMContentLoaded', () => {
	'use strict'

const burger = document.querySelector('.burger');
const burgerSpan = document.querySelectorAll('.burger span');
const menuList = document.querySelector('.menu');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    burgerSpan.forEach(item => {
        item.classList.toggle('active');
    })
    menuList.classList.toggle('active');
    body.classList.toggle('active');
})

window.addEventListener('click', (e) => {
    if(!e.target.closest('.menu') && !e.target.closest('.burger')) {
        burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menuList.classList.remove('active');
        body.classList.remove('active');
    }
})


// PopUp с формой
const overlay = document.querySelector('.overlay');
const cross = document.querySelector('.cross');
const popupBtns = document.querySelectorAll('.popup-btn');

popupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    })
})
if(cross !== null && cross !== undefined) {
    cross.addEventListener('click', (e) => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    })
}

overlay.addEventListener('click', (e) => {
    if(!e.target.closest('.form')) {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
})

// Перемещение телефона из хедера в меню======
const headerContainer = document.querySelector('.header-container');
const headerContacts =  document.querySelector('.header__contacts');
const menuList2 = document.querySelector('.menu__list');

function telMove() {
	if(window.innerWidth < 445) {
		menuList2.insertAdjacentElement('beforeend', headerContacts);
	} else {
		headerContainer.insertAdjacentElement('beforeend', headerContacts);
	}
}

window.addEventListener('resize', telMove);
telMove();

//ПЛАВНАЯ ПРОКРУТКА - "МИНУС ШАПКА" ИЛИ БЕЗ "МИНУС-ШАПКА"
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function(e) {
        e.preventDefault();

		// Закрытие меню по клику на него
		burgerSpan.forEach(item => {
            item.classList.remove('active');
        })
        menuList.classList.remove('active');
        body.classList.remove('active');
		/////////////////////////////////////////

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        const topOffset = ((document.querySelector('.header').offsetHeight)); //Указать класс class элемента (навигации), чтобы вычислить его высоту
        //const topOffset = 0; // если не нужен отступ сверху
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

// Скрытие-показ кнопки "наверх"=======================================
const main = document.querySelector('.main');
const upBtn = document.querySelector('.up-btn');

window.addEventListener('scroll', () => {
	if(window.scrollY > main.clientHeight) {
		upBtn.classList.add('active');
	} else {
		upBtn.classList.remove('active');
	}
})

// Отправка данных с формы==============================================

const form = document.querySelector('.form');
const formSecusess =  document.querySelector('.form-secusess');
const formError =  document.querySelector('.form-error');
const formCross = document.querySelectorAll('.cross-form');
const inputName = document.getElementById('input__name');
const inputTel = document.getElementById('input__tel');

function closeSendModal() {
    formCross.forEach(item => {
        item.addEventListener('click', () => {
            formSecusess.classList.remove('active');
            formError.classList.remove('active');
        })
    })
}
closeSendModal();

form.addEventListener('submit', (e) => {
    e.preventDefault();
        if(inputName.value !== '' && inputTel.value !== '') {
            formSend();
        }

});


async function formSend() {
    let formData = new FormData(form);
    let respons = await fetch('../sendmail.php', {
        method: 'POST',
        body: formData
    });
    if(respons.ok) {
        formSecusess.classList.add('active');
        form.reset();
		setTimeout(() => {
			formSecusess.classList.remove('active');
		}, 2000)
    } else {
        formError.classList.add('active');
		setTimeout(() => {
			formError.classList.remove('active');
		}, 2000)
    }
}

// Маска телефона
let maskCode = '+7 (___) ___-__-__'
let maskCode2 = '+38(___) ___ __ __'
function maskPhone(selector, masked = maskCode) {
	const elems = document.querySelectorAll(selector);

	function mask(event) {
		const keyCode = event.keyCode;
		const template = masked,
			def = template.replace(/\D/g, ""),
			val = this.value.replace(/\D/g, "");
		//console.log(template);
		let i = 0,
			newValue = template.replace(/[_\d]/g, function (a) {
				return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
			});
		i = newValue.indexOf("_");
		if (i !== -1) {
			newValue = newValue.slice(0, i);
		}
		let reg = template.substr(0, this.value.length).replace(/_+/g,
			function (a) {
				return "\\d{1," + a.length + "}";
			}).replace(/[+()]/g, "\\$&");
		reg = new RegExp("^" + reg + "$");
		if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
			this.value = newValue;
		}
		if (event.type === "blur" && this.value.length < 5) {
			this.value = "";
		}

	}

	for (const elem of elems) {
		elem.addEventListener("input", mask);
		elem.addEventListener("focus", mask);
		elem.addEventListener("blur", mask);
	}

}
// use
maskPhone('.input-tel');



});//конец domcontent