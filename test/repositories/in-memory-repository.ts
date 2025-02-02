import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationRepository implements NotificationsRepository {
  public notifications: Notification[] = [];
  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
