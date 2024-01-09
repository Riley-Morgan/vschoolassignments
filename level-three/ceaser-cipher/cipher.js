const readline = require('readline-sync')

const input = readline.question('What phrase would you like to encrypt?').toLowerCase();

const shift = parseInt(readline.question('How many letters would you like to shift?'));

//[a, b, c, d, e ,f ,g ,h ,i ,j ,k ,l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

