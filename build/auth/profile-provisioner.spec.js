"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const profile_provisioner_1 = require("./profile-provisioner");
describe('ProfileProvisioner', () => {
    const profile = { id: 'u-1', email: 'client@example.com', fullName: 'Client', role: 'CLIENT' };
    const prisma = { profile: { upsert: jest.fn().mockResolvedValue(profile) } };
    const service = new profile_provisioner_1.ProfileProvisioner(prisma);
    beforeEach(() => jest.clearAllMocks());
    it('creates missing profiles as clients and uses no client-supplied role', async () => {
        await service.ensureProfile({ id: profile.id, email: profile.email, fullName: ' Client ' });
        expect(prisma.profile.upsert).toHaveBeenCalledWith({
            where: { id: profile.id },
            update: { email: profile.email, fullName: 'Client' },
            create: { id: profile.id, email: profile.email, fullName: 'Client', role: 'CLIENT' },
            select: { id: true, email: true, fullName: true, role: true },
        });
    });
    it('does not overwrite an existing profile role during sign-in', async () => {
        await service.ensureProfile({ id: profile.id, email: profile.email, fullName: profile.fullName });
        const call = prisma.profile.upsert.mock.calls[0][0];
        expect(call.update).not.toHaveProperty('role');
        expect(call.create.role).toBe('CLIENT');
    });
});
