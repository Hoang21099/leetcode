/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    const lengthS = s.length;

    const arrT = t.split('');

    let count = 0;

    for (let item of arrT) {
        if (item === s[count]) {
            count++
        }

        if (count === lengthS) {
            return true;
        }
    }

    return false


};

console.log(isSubsequence('abc', 'aaaa'))