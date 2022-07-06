import { Address } from './address';
import { Residence } from './residence';

describe('Residence', () => {
  it('should create an instance', () => {
    let addressMock = new Address("São Paulo", "Rua Exemplo 1");
    expect(new Residence("apartamentoooo-exemplo", "apartamento", "R$999,00", addressMock, 50, 3)).toBeTruthy();
  });
});
