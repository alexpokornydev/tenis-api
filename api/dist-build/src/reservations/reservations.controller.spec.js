"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const reservations_controller_1 = require("./reservations.controller");
describe('ReservationsController access and validation', () => {
    const createController = () => new reservations_controller_1.ReservationsController({}, {});
    it('does not expose another client reservation', () => {
        const controller = createController();
        const client = { id: 'client-a', role: 'CLIENT' };
        expect(() => controller.assertCanView({ trainerId: null, participants: [{ profileId: 'client-b' }] }, client)).toThrow(common_1.ForbiddenException);
    });
    it('does not expose a trainer assigned to someone else', () => {
        const controller = createController();
        const trainer = { id: 'trainer-a', role: 'TRAINER' };
        expect(() => controller.assertCanView({ trainerId: 'trainer-b', participants: [] }, trainer)).toThrow(common_1.ForbiddenException);
    });
    it('rejects invalid date filters', () => {
        const controller = createController();
        expect(() => controller.validDate('not-a-date')).toThrow(common_1.BadRequestException);
    });
});
//# sourceMappingURL=reservations.controller.spec.js.map