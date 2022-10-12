const advArr = document.querySelectorAll(".rotator__case")
const rotators = Array.from(document.querySelectorAll(".rotator"))

//функция для счетчика индексов для массива
function getIndex(array, start = 0) {
    let counter = start;
    return function() {
        indexActivate = counter++ % array.length;
        return indexActivate;
    }
    
}

// объявляем переменные для счетчиков для массивов
let myCount = new Array(rotators.length)
for (i = 0; i < rotators.length; i++) {
    eval("var myCount" + i + " = getIndex(rotators[" + i + "].children)");
}


// включение элемента массива
function advOn1(array, i) {
    // for(i = 0; i < array.length; i++) {
        for(j = 0; j < array[i].children.length; j++) {
            array[i].children[j].classList.remove('rotator__case_active')
        }
    indexActivate = eval('myCount'+ i+'()')
    let colorNew = array[i].children[indexActivate].dataset.color
    let intervalNew = array[i].children[indexActivate].dataset.speed
    console.log(colorNew, intervalNew);
    array[i].children[indexActivate].style.color = colorNew
    array[i].children[indexActivate].classList.add('rotator__case_active')
    setTimeout(advOn1, intervalNew, rotators, i)
    // }
}
// setInterval(() => advOn1(rotators), 1000)

for (let i = 0; i < rotators.length; i++) {
    setTimeout(advOn1, 100, rotators, i)
    
}
