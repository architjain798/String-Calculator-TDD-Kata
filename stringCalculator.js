function add(numbers) {
    if (numbers === "") {
        return 0;
    } else {
        const nums = numbers.split(/[,|\n]/);
        let sum = 0;
        nums.forEach(num => {
            sum += parseInt(num, 10);
        });
        return sum;
    }
}

module.exports = { add };
