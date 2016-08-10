export const mandatory = (param) => {
    throw new Error(`Parameter(s) {${param}} is required.`);
};
