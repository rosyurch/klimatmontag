const fixedBtn = document.querySelector('.go-up');
const body = document.querySelector('body');
const fixedHeader = document.querySelector('.header-bottom');
const fixedCallP = document.querySelector('.call-everyday');
const viberFixed = document.querySelector('.viber-mts');
const numberFixed = document.querySelector('.number');

window.addEventListener('scroll', showUpBtn);

function showUpBtn(event) {
    if (body.scrollTop > 180) {
        fixedBtn.style.display = 'block';

        fixedHeader.classList.add('header-bottom-fixed');
        fixedCallP.classList.add('call-everyday-fixed');
        viberFixed.classList.add('viber-mts-fixed');
        numberFixed.classList.add('number-fixed');
    } else {
        fixedBtn.style.display = 'none';

        fixedHeader.classList.remove('header-bottom-fixed');
        fixedCallP.classList.remove('call-everyday-fixed');
        viberFixed.classList.remove('viber-mts-fixed');
        numberFixed.classList.remove('number-fixed');
    }
}
