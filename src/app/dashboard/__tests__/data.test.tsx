import { groupCalls, mentors, notificationData, businessCards, kpiData } from '../data';

describe('Dashboard Mock Data', () => {
  describe('groupCalls', () => {
    it('has correct data structure', () => {
      groupCalls.forEach(call => {
        expect(call).toMatchObject({
          imageUrl: expect.any(String),
          title: expect.any(String),
          date: expect.any(String),
          time: expect.any(String),
          studyGroup: expect.objectContaining({
            name: expect.any(String),
            avatar: expect.any(String)
          }),
          mentors: expect.arrayContaining([
            expect.objectContaining({
              avatar: expect.any(String)
            })
          ])
        });
      });
    });

    it('has valid date format', () => {
      groupCalls.forEach(call => {
        expect(call.date).toMatch(/^[A-Za-z]+ \d{1,2}(st|nd|rd|th)$/);
      });
    });

    it('has valid time format', () => {
      groupCalls.forEach(call => {
        expect(call.time).toMatch(/^\d{1,2}:\d{2} (AM|PM)$/);
      });
    });
  });

  describe('mentors', () => {
    it('has correct data structure', () => {
      mentors.forEach(mentor => {
        expect(mentor).toMatchObject({
          avatar: expect.any(String),
          name: expect.any(String),
          email: expect.any(String),
          role: expect.any(String),
          experience: expect.any(String),
          location: expect.any(String),
          timezone: expect.any(String)
        });
      });
    });

    it('has valid email format', () => {
      mentors.forEach(mentor => {
        expect(mentor.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      });
    });
  });

  describe('notificationData', () => {
    it('has correct data structure', () => {
      notificationData.forEach(notification => {
        expect(notification).toMatchObject({
          avatar: expect.any(String),
          title: expect.any(String),
          message: expect.any(String),
          timestamp: expect.any(String)
        });
      });
    });

    it('has valid timestamp format', () => {
      notificationData.forEach(notification => {
        expect(notification.timestamp).toMatch(/^(\d+\s+\w+\s+Ago|Just Now)$/);
      });
    });
  });

  describe('businessCards', () => {
    it('has correct data structure', () => {
      businessCards.forEach(card => {
        expect(card).toMatchObject({
          profileImage: expect.any(String),
          name: expect.any(String),
          jobTitle: expect.any(String)
        });
      });
    });
  });

  describe('kpiData', () => {
    it('has correct data structure', () => {
      kpiData.forEach(item => {
        expect(item).toMatchObject({
          name: expect.any(String),
          value: expect.any(Number),
          color: expect.any(String)
        });
      });
    });

    it('has valid hex color codes', () => {
      kpiData.forEach(item => {
        expect(item.color).toMatch(/^#[0-9A-Fa-f]{6}$/);
      });
    });

    it('has positive numeric values', () => {
      kpiData.forEach(item => {
        expect(item.value).toBeGreaterThanOrEqual(0);
      });
    });
  });
});