import { values } from "core-js/fn/dict"

export const emailValidation = (value) =>({
    hasPassed: /^[A-Z0-9+_.-]+@[A-Z0-9.-]+$/.test(values),
    message: 'nooope1!'
})
export const passwordValidation = (value) =>({
    hasPassed: /^(?=.*[A_Za-z])(?=.*[\d]).{7,256}$/.test(values),
    message: 'oooppps'
})