// import { LDAThemeProvider } from '@delgadotueba/catalogo-ui';
// import { renderHook, RenderHookOptions } from '@testing-library/react';
// import { ReactNode } from 'react';

// type CustomRenderHookOptions = RenderHookOptions<any> & {
//   wrapper?: React.FC<{ children: ReactNode }>;
// };

// export const customRenderHook = <T,>(
//   callback: () => T,
//   options: CustomRenderHookOptions = {},
// ) => {
//   const { wrapper: CustomWrapper, ...restOptions } = options;

//   const CombinedWrapper: React.FC<{ children: React.ReactNode }> = ({
//     children,
//   }) => (
//     <LDAThemeProvider business="lda" language="es">
//       {CustomWrapper ? <CustomWrapper>{children}</CustomWrapper> : children}
//     </LDAThemeProvider>
//   );

//   return renderHook<T, unknown>(callback, {
//     wrapper: CombinedWrapper,
//     ...restOptions,
//   });
// };
