# Test Config

Este paquete reúne las configuraciones estándar utilizadas en los Test Unitarios y también permite que otros proyectos lo adopten como base para extender sus propias configuraciones.

## Instalación

```sh
npm install --save-dev @types/jest jest jest-environment-jsdom jest-environment-node ts-jest
npm install --save-dev @delgadotrueba/react-config
```

## Uso

### Configuración de los test

La aplicación utiliza la biblioteca Jest para ejecutar los test unitarios. Cada componente cuenta con su propio archivo _.test.tsx o _.test.ts, donde se definen las pruebas específicas de ese componente. Al ejecutar los tests, se analiza el código de todos los componentes, generando métricas de cobertura que luego se consolidan en un único reporte.

### Configuración de Jest

Para utilizar la configuración, se debe extender la configuración de `@delgadotrueba/react-config/jest-preset` en el fichero `jest.config.js`:

```js
const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.paths.json");

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  displayName: 'my-app',
  preset: "@delgadotrueba/react-config/jest-preset",
  setupFilesAfterEnv: ["<rootDir>/src/utils-test/setupTest.ts"],
  transform: {
    "^.+\\.[tj]sx?$": ["ts-jest", { tsconfig: "<rootDir>/tsconfig.spec.json" }],
  },
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" }),
  },
    collectCoverageFrom: [
      'src/**/*.{js,jsx,ts,tsx}',
      'src/*.{js,jsx,ts,tsx}',
      '!src/**/*.stories.{js,jsx,ts,tsx}',
      '!src/**/*.examples.{js,jsx,ts,tsx}'
    ]
};
```

### Funciones utilitarias

Además, el paquete incluye funciones utilitarias que simplifican la escritura y mantenimiento de los tests.

### TODO

#### `customRender`

Función que permite renderizar un componente con el `ThemeProvider` y otros providers que se necesiten. Es un wrapper sobre la función `render` de `@testing-library/react`. (<https://testing-library.com/docs/react-testing-library/setup#custom-render>)

```js
import { customRender } from "@delgadotrueba/react-config/jest-preset/src/test-utils";

describe("MyComponent", () => {
  it("should render", () => {
    const { container } = customRender(<MyComponent />);
    expect(container).toBeInTheDocument();
  });
});
```
