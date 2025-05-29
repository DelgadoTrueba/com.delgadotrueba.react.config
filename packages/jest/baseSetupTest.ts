/// <reference types="@testing-library/jest-dom" />
const { cleanup } = require('@testing-library/react');
require('@testing-library/jest-dom');

afterEach(() => {
  cleanup();
});
