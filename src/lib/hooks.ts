import { DetailConfig } from "@/types/config"

export function generateRandomList(firstNum: number, secondNum: number) {
    if (secondNum <= firstNum) {
        return []
    }
    const randomList: number[] = []
    const length = secondNum - firstNum + 1
    while (randomList.length !== length) {
        const random = generateRandomNumber(firstNum, secondNum)
        if (!randomList.includes(random)) {
            randomList.push(random)
        }
    }
    return randomList
}

export function generateRandomNumber(firstNum: number, secondNum: number) {
    const random = Math.floor(Math.random() * (secondNum - firstNum + 1)) + firstNum
    return random
}
