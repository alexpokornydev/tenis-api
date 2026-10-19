"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancellationRequestStatus = exports.PaymentMethod = exports.ReservationStatus = exports.MembershipStatus = exports.UserRole = void 0;
exports.UserRole = {
    OWNER: 'OWNER',
    ADMIN: 'ADMIN',
    TRAINER: 'TRAINER',
    CLIENT: 'CLIENT'
};
exports.MembershipStatus = {
    ACTIVE: 'ACTIVE',
    EXPIRED: 'EXPIRED',
    SUSPENDED: 'SUSPENDED',
    NONE: 'NONE'
};
exports.ReservationStatus = {
    RESERVED: 'RESERVED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED'
};
exports.PaymentMethod = {
    FREE_TRAINING: 'FREE_TRAINING',
    CASH: 'CASH',
    CARD: 'CARD',
    BANK_TRANSFER: 'BANK_TRANSFER'
};
exports.CancellationRequestStatus = {
    PENDING: 'PENDING',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
};
//# sourceMappingURL=enums.js.map