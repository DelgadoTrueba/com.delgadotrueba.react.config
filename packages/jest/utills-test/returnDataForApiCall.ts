// import { http, server, HttpResponse } from '@mocks/server'; 

// type Method = 'get' | 'post' | 'put' | 'patch' | 'delete';

// /**
//  * Overrides a dynamic handler for unit tests.
//  *
//  * @param url - The URL to be intercepted.
//  * @param dto - The data to be returned in the response.
//  * @param status - The status of the response.
//  * @param method - The HTTP method to be intercepted (default: 'get').
//  */
// export function returnDataForApiCall<T>(
//   url: string,
//   dto: T,
//   status: number,
//   method: Method,
// ) {
//     server.use(
//       http[method](
//         url,
//         () => {
//           return HttpResponse.json(dto as any, {status});
//         },
//         { once: true },
//       ),
//     );
  
// }
