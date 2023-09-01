quote = ["I","am","your","friend"];




quote.pop();
quote.push("father");
quote.unshift("Luke");
console.log(quote);

let erroneuosWord = "Luke"
lukeIsHere=quote.includes(erroneuosWord);
let lukeIsAt

if (lukeIsHere) {
    lukeIsAt = quote.indexOf(erroneuosWord);
    quote[lukeIsAt] = "No";
    console.log(quote)
}

output=""

for (let i = 0, j = quote.length; i < j; i++) {
    if (i === j - 1) {
        output += quote[i] + '!';
    } else if (quote[i] === 'No') {
        output += quote[i] + ', ';
    } else {
        output += quote[i] + ' '
    }
    console.log(output)
}
