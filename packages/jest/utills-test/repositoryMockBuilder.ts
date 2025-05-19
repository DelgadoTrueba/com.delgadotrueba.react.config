export function repositoryMockBuilder<T extends object>(
  instance: T,
): { [K in keyof T]: jest.Mock } {
  const repositoryMock = Object.create(Object.getPrototypeOf(instance)) as {
    [K in keyof T]: jest.Mock;
  };

  Object.getOwnPropertyNames(Object.getPrototypeOf(instance)).forEach((key) => {
    const descriptor = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(instance),
      key,
    );

    if (
      descriptor &&
      typeof descriptor.value === 'function' &&
      key !== 'constructor'
    ) {
      repositoryMock[key as keyof T] = jest.fn() as jest.Mock;
      // eslint-disable-next-line no-param-reassign
      instance[key as keyof T] = repositoryMock[key as keyof T] as any; // Sobrescribe en la instancia original
    }
  });

  return repositoryMock;
}