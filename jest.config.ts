// import '@testing-library/jest-dom'

export default {
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    // moduleNameMapper: {
    //     '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    //     '\\.(css|less|sass|scss)$': '<rootDir>/src/__mocks__/CSSStub.js',
    // },
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts']


}