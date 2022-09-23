const generatepassword = require ('generate-password')

var password = generatepassword.generate({
    length:20,
    symbols: '!@#$%&*_-',
    uppercase: true,
    numbers:false
})

console.log("Generated password :",password)