const originalUserAgent = window.navigator.userAgent;

const CLEARED = Symbol('cleared');

let fakeUserAgent: string | typeof CLEARED | null = null;

Object.defineProperty(global.navigator, 'userAgent', {
  get: () => {
    return fakeUserAgent === CLEARED ? originalUserAgent : fakeUserAgent || '';
  },
});

export function clear(): void {
  fakeUserAgent = CLEARED;
}

export function mockUserAgent(agent: string): void {
  fakeUserAgent = agent;
}
