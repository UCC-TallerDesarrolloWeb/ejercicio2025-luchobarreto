const sumNum1 = document.getElementById('nums1');
const sumNum2 = document.getElementById('nums2');
const totalSum = document.getElementById('totalS');

const subNum1 = document.getElementById('numr1');
const subNum2 = document.getElementById('numr2');
const totalSub = document.getElementById('totalR');

const mulNum1 = document.getElementById('numm1');
const mulNum2 = document.getElementById('numm2');
const totalMul = document.getElementById('totalM');

const divNum1 = document.getElementById('numd1');
const divNum2 = document.getElementById('numd2');
const totalDiv = document.getElementById('totalD');

let sumValue1 = null;
let sumValue2 = null;

let subValue1 = null;
let subValue2 = null;

let mulValue1 = null;
let mulValue2 = null;

let divValue1 = null;
let divValue2 = null;

const checkValidity = (value, element) => {
    if(isNaN(value) || !isFinite(value)) {
        alert("Solo se permiten valores numericos");
        element.value = "";
        return false;
    }
    return true;
}

const setResult = (value1, value2, result, element) => {
    if(value1 && value2) {
        element.value = result;
    }
}

sumNum1.addEventListener('change', (e) => {
    const value = parseFloat(e.target.value);
    if(checkValidity(value, sumNum1)) {
        sumValue1 = value;
        setResult(sumValue1, sumValue2, (sumValue1 + sumValue2), totalSum);
    }
});

subNum1.addEventListener('change', (e) => {
    const value = parseFloat(e.target.value);
    if(checkValidity(value, subNum1)) {
        subValue1 = value;
    }
});

mulNum1.addEventListener('change', (e) => {
    const value = parseFloat(e.target.value);
    if(checkValidity(value, mulNum1)) {
        mulValue1 = value;
    }
});

divNum1.addEventListener('change', (e) => {
    const value = parseFloat(e.target.value);
    if(checkValidity(value, divNum1)) {
        divValue1 = value;
    }
});

