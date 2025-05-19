const originalConsoleError = console.error;
const jsDomError = [
  'Error: Could not parse CSS stylesheet',
  'Error: Test Error',
  'Error: Uncaught [Error: Test Error]',
  'Error capturado por Error Boundary:',
  'The above error occurred in the <BuggyComponent> component:',
  'The above error occurred in one of your React components',
];
console.error = (...params) => {
  if (
    !params.find((p) =>
      jsDomError.some((error) => p.toString().includes(error)),
    )
  ) {
    originalConsoleError(...params);
  }
};
