
import { HealthController } from './health.controller';

describe('HealthController', () => {
  it('reports a healthy service', () => {
    const response = new HealthController().getHealth();
    expect(response.status).toBe('ok');
    expect(response.service).toBe('tenisplzen-api');
  });
});
