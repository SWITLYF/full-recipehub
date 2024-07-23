// const crypto = require('crypto');

// // Generate ACCESS_TOKEN_SECRET
// const accessTokenSecret = crypto.randomBytes(64).toString('hex');
// console.log(`ACCESS_TOKEN_SECRET=${accessTokenSecret}`);

// // Generate REFRESH_TOKEN_SECRET
// const refreshTokenSecret = crypto.randomBytes(64).toString('hex');
// console.log(`REFRESH_TOKEN_SECRET=${refreshTokenSecret}`);

const crypto = require('crypto');
const formikSecret = crypto.randomBytes(64).toString('hex');
console.log(`VITE_FORMIK_SECRET=${formikSecret}`);

