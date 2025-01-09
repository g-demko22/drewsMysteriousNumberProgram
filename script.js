const conversionNums = [
    [5, 3],
    [10, 6],
    [15, 3],
    [25, -2],
    [30, 2],
    [40, 2],
    [50, 2],
    [70, -5],
    [90, 5]
]

const submitButton = document.getElementById('submit')
const resetButton = document.getElementById('reset')

const calculateResponse = event => {
    const responseArr = [];
    for(let i = 1; i < 11; i++) {
        responseArr.push(Number(document.getElementById('num' + i.toString()).value))
    }
    responseArr.forEach((responseNum, responseIndex) => {
        let changed = false;
        conversionNums.forEach(conversionNum => {
            if(responseNum === conversionNum[0]) {
                responseArr.splice(responseIndex, 1, conversionNum[1])
                changed = true;
            }
        })
        if(!changed) {
            responseArr.splice(responseIndex, 1, 0)
        }
    })

    const total = responseArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    
    document.getElementById('total').innerText = 'Total ' + total;
}

submitButton.addEventListener('click', calculateResponse)
resetButton.addEventListener('click', event => window.location.reload())
