const $element = document.querySelectorAll('.desc__intense');


const createIntense = (elem, index, intenseCounter) => {
    const intense = document.createElement('span');
    intense.classList.add('span')
    if(index < intenseCounter) {
        intense.classList.add('span--active')
    }
    elem.append(intense);
}

$element.forEach((elem) => {
    let intenseCounter = Math.round(Math.random()*8) + 2;
    for (let i = 0; i < 10; i++) {
        createIntense(elem, i, intenseCounter)
    }
});