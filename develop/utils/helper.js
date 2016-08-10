export const isEmpty = (val) => {
    if (!val) return true;

    if (typeof val === 'string') return !val.trim();

    return !Object.keys(val).length;
};
