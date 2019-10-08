module.exports = function check(str, bracketsConfig) {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    let matchingOpeningBracket, ch;
    let stack = [];

    let openingBrackets = [],
        closingBrackets = [];

    for (let j = 0; j < bracketsConfig.length; j++) {
        let bracketArray = bracketsConfig[j];
        openingBrackets.push(bracketArray[0]);
        closingBrackets.push(bracketArray[1]);
    }

    for (let i = 0; i < str.length; i++) {
        ch = str[i];

        if (closingBrackets.indexOf(ch) == -1 && openingBrackets.indexOf(ch) > -1) {
            stack.push(ch);
        } else if (closingBrackets.indexOf(ch) > -1 && openingBrackets.indexOf(ch) > -1) {
            if (stack.length == 0 || stack.last() != ch) {
                stack.push(ch)
            } else {
                stack.pop();
            }
        } else if (closingBrackets.indexOf(ch) > -1 && openingBrackets.indexOf(ch) == -1) {
            matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];
            if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
                return false
            }
        }
    }

    return (stack.length == 0)

}
