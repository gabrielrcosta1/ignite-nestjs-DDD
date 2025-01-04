import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('deve ser possivel eu criar o conteudo da notificação', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('bem vindo ao time da rocketseat'),
      category: 'welcome',
    });

    expect(notification).toBeTruthy();
  });
});
