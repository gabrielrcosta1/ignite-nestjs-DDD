import { Content } from './content';

describe('Notification Content', () => {
  it('deve ser possivel eu criar o conteudo da notificação', () => {
    const content = new Content('bem vindo ao time da rocketseat');

    expect(content).toBeTruthy();
  });

  it('não deve ser possivel criar conteudo com 4 caracteres', () => {
    expect(() => new Content('ola')).toThrow();
  });

  it('não deve ser possivel criar conteudo com mais de 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
