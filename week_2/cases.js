const permutation = (n, r) => {
    let ret = 1;
    for(let i = 1; i <= r; i++) {
        ret *= n;
        n--;
    }
    return ret;
};

const combination  = (n, r) => permutation(n, r) / permutation(r, r);

const multiPermutation = (n, r) => n ** r;

const multiCombination = (n, r) => combination(n + r - 1, r);


module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
};