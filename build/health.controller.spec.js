"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const health_controller_1 = require("./health.controller");
describe('HealthController', () => {
    it('reports a healthy service', () => {
        const response = new health_controller_1.HealthController().getHealth();
        expect(response.status).toBe('ok');
        expect(response.service).toBe('tenisplzen-api');
    });
});
