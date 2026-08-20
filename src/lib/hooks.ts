export function generateNumberList(firstNum: number, secondNum: number) {
    if (secondNum <= firstNum) {
        return []
    }
    const randomList: number[] = []
    const length = secondNum - firstNum + 1
    while (randomList.length !== length) {
        const random = Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum
        if (!randomList.includes(random)) {
            randomList.push(random)
        }
    }
    return randomList
}