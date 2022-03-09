export default class NumberValidator {
    validate(arg) {
        return !isNaN(+arg);
    }
}
