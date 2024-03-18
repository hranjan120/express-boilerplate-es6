/*-----------*/
export const isNotNumber = (n) => {
    if (!n) return true;
    return Number.isNaN(Number(n));
};

/*-----------*/
export const isMongoId = (mId) => {
    if (!mId) { return false; }
    if (mId.match(/^[0-9a-fA-F]{24}$/)) { return true; } return false;
};
