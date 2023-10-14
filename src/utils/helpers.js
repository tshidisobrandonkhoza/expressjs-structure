
const bcrypt = require('bcryptjs');


function hashPassword(password) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

function compPassword(raw, hash) {
    return bcrypt.compareSync(raw, hash)
}

module.exports = {
    hashPassword,
    compPassword,
}