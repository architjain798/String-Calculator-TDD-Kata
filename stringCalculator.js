function add(numbers) {
    if (numbers === "") {
        return 0;
    } else {
        let delimiter = /[,|\n]/;
        if (numbers.startsWith("//")) {
            const parts = numbers.split("\n", 2);
            delimiter = new RegExp(parts[0][2], 'g');
            numbers = parts[1];
        }
        const nums = numbers.split(delimiter);
        let sum = 0;
        const negatives = [];
        nums.forEach(num => {
            const n = parseInt(num, 10);
            if (n < 0) {
                negatives.push(n);
            } else {
                sum += n;
            }
        });
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(',')}`);
        }
        return sum;
    }
}

module.exports = { add };
