function getRandomChinese(length) {
    const startLength = length;
    const result = [];
    const createChineseString = new Promise((res, rej) => {
            setTimeout(function next() {
                const sign = String(Date.now()).slice(-5);
                const chineseSign = String.fromCharCode(sign);
                result.push(chineseSign);
                --length;
                if(length > 0){
                    setTimeout(next, 50);
                }
                if(!result.length){
                    rej("Щось пішло не так :(");
                } else if(result.length === startLength){
                    res(result.join(""));
                }
            }, 50);
    })
    createChineseString.then((res) => console.log(res));
    createChineseString.catch(rej => rej);
    return createChineseString;
}
getRandomChinese(5);