import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('returns an ok liveness response', () => {
    const result = new HealthController().getHealth();
    expect(result.status).toBe('ok');
    expect(result.service).toBe('tenisplzen-api');
    expect(Number.isNaN(Date.parse(result.timestamp))).toBe(false);
  });
});
