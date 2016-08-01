export const mandatory = (param) => {
    throw new Error(`Parameter {${param}} is required.`);
};
