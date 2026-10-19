"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const health_controller_1 = require("./health.controller");
describe('HealthController', () => {
    it('returns an ok liveness response', () => {
        const result = new health_controller_1.HealthController().getHealth();
        expect(result.status).toBe('ok');
        expect(result.service).toBe('tenisplzen-api');
        expect(Number.isNaN(Date.parse(result.timestamp))).toBe(false);
    });
});
//# sourceMappingURL=health.controller.spec.js.map