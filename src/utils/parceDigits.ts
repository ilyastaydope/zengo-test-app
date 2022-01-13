export const parseDigits = (num: string) => {

    if(!isNaN(+num))return +num

    return parseFloat(num.slice(2).replace(',', ''))

}
