const firstArray = ["Today is perfect for new endeavours. ", "The tensions of this week will feel heavier today than yesterday. ", 'Today is the day to cherish and embrace others. ', "Making yourself useful is a main component of a successful day. ", "Today, exercise caution when crossing the street. "]
const secondArray = ["Remember that good things come to those who work hard. ", "Don’t let the circumstances bring you down. ", "Patience is key, but sometimes a little push can get the job done. ", "A smile can get you a long way. "]
const thirdArray = ["Looking ahead may seem like a waste of time, but it pays off in the end. ", "Luck favours those who mind the risks and take them. ", "Today is the day for that thing you always wanted to do. ", "Luck is on your side today, so seize it! ", "Things are looking up for you! "]


const firstArrayIndex = Math.floor(Math.random() * firstArray.length)
const firstSentence = firstArray[firstArrayIndex]

const secondArrayIndex = Math.floor(Math.random() * secondArray.length)
const secondSentence = secondArray[secondArrayIndex]

const thirdArrayIndex = Math.floor(Math.random() * thirdArray.length)
const thirdSentence = thirdArray[thirdArrayIndex]

console.log(`${firstSentence}${secondSentence}${thirdSentence}`)
