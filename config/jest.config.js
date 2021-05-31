module.exports = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|js)x?$': 'ts-jest',
    },
    collectCoverage: false,
    modulePathIgnorePatterns: ['<rootDir>/dist'],
};
