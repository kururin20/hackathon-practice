let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count1')
  countElement.innerText = '回数: ' + count
}
const reset = () => {
    count = 0
    const countElement = document.querySelector('#count1')
    countElement.innerText = '回数: ' + count
}