const hourArr = ['twelve','one','two','three','four','five',
                'six','seven','eight','nine','ten','eleven','twelve']

const oneTo19 = ["",'oh one','oh two','oh three','oh four','oh five',
                'oh six','oh seven','oh eight','oh nine','ten','eleven','twelve',
                'thirteen','fourteen','fifteen','sixteen','seventeen',
                'eighteen','nineteen']

const tensMin = ['', '','twenty','thirty','forty','fifty']

/**
 * 
 * @param {string} timeStr 
 * 
 * Given a string '00:00' return the time in words
 */
function timeWord(timeStr){
    if(timeStr=="00:00") return 'midnight'
    if(timeStr=="12:00") return 'noon'
    const arr = timeStr.split(":")
    const hour = +arr[0]
    let mins = +arr[1]
    let min1 = +arr[1][0]
    let min2 = +arr[1][1]
    let amPm = (hour/12)>=1 ? 'pm' : 'am'

    if(min1 ==0 && min2 ==0) return hourArr[hour % 12] + " o'clock " + amPm
    if(min1 <= 1) return hourArr[hour % 12] + " " + oneTo19[mins] + ' ' + amPm
    if(min2 == 0) return hourArr[hour % 12] + " " + tensMin[min1] + " " + amPm
    return hourArr[hour % 12] + " " + tensMin[min1] + " " + hourArr[min2] + ' ' + amPm
}

module.exports = timeWord