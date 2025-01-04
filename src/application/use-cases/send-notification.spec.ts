import { InMemoryNotificationRepository } from '@test/repositories/in-memory-repository';
import { SendNotification } from './send-notification';

describe('send notificaion', () => {
  it('should send a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const sendNotification = new SendNotification(notificationRepository);
    await sendNotification.execute({
      content: 'Hello, world!',
      category: 'welcome',
      recipientId: '123',
    });

    console.log(notificationRepository.notifications);
    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
