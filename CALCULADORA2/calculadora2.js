/* https://zellwk.com/blog/calculator-part-1/ */
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')


keys.addEventListener('click', e => {
    if (e.target.matches('button')) {

        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType

        if (!action) {
            if (displayedNum === '0' || previousKeyType === 'operator') {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }

        if (action === 'decimal') {
            display.textContent = displayedNum + '.'
        }

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            // Add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
            
        }
        
        if (action === 'clear') {
        }
        
        if (action === 'calculate') {
            const firstValue = calculator.dataset.firstValue
            const operator = calculator.dataset.operator
            const secondValue = displayedNum
            const calculate = (n1, op, n2) => {
                firstValue = n1
                secondValue = n2
                operator = op
                let result = ''
                if (op === 'add') {
                  result = parseFloat(n1) + parseFloat(n2)
                } else if (op === 'subtract') {
                  result = parseFloat(n1) - parseFloat(n2)
                } else if (op === 'multiply') {
                  result = parseFloat(n1) * parseFloat(n2)
                } else if (op === 'divide') {
                  result = parseFloat(n1) / parseFloat(n2)
                }
              
                display.textContent = result
              }
        }
        // Remove .is-depressed class from all keys
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))
    }
})
