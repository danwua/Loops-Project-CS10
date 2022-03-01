document.getElementById("imSoHappy").addEventListener("click", imsohappyfunction)

function imsohappyfunction(){
    for (let index = 1; index <= 500; index++) {
        console.log("bruh")
    }
}

document.getElementById("multiplesOfFour").addEventListener("click", xfourfunction)

function xfourfunction(){
    for (let index = 12; index <= 800; index=index+4) {
        console.log(index)
    }
}

document.getElementById("oddNumbers").addEventListener("click", oddfunction)

function oddfunction(){
    for (let index = 55; index >= 11; index=index-2) {
        console.log(index)
    }
}

document.getElementById("arithmeticSeries").addEventListener("click", arithmeticfunction)

function arithmeticfunction(){
    let sumIndex = 0
    for (let index = 5; index <= 50; index=index+1) {
        sumIndex = sumIndex+index
    }
    console.log(sumIndex)
}

document.getElementById("arithmeticSeriesTwo").addEventListener("click", arithmeticfunctiontwo)

function arithmeticfunctiontwo(){
    let sumIndex = 0
    for (let index = 10; index <= 100; index=index+10) {
        sumIndex = sumIndex+index
    }
    console.log(sumIndex)
}