import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address("São Paulo", "Rua Exemplo 1")).toBeTruthy();
  });
});
