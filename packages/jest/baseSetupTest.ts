/// <reference types="@testing-library/jest-dom" />
require('@testing-library/jest-dom');

const { cleanup } = require('@testing-library/react');

afterEach(() => {
  cleanup();
});
