const isValid = (date: any) => {
    return !isNaN(new Date(date) as any);
};

export default isValid;
