const bcrypt = require('bcrypt');

const password = 'myPassword123';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        console.error('Hashing failed:', err);
    } else {
        console.log('Hashed password:', hash);
    }
});
