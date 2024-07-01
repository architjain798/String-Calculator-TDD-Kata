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
        nums.forEach(num => {
            sum += parseInt(num, 10);
        });
        return sum;
    }
}

module.exports = { add };
