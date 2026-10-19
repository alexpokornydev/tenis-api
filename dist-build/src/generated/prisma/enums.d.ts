export declare const UserRole: {
    readonly OWNER: "OWNER";
    readonly ADMIN: "ADMIN";
    readonly TRAINER: "TRAINER";
    readonly CLIENT: "CLIENT";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const MembershipStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly EXPIRED: "EXPIRED";
    readonly SUSPENDED: "SUSPENDED";
    readonly NONE: "NONE";
};
export type MembershipStatus = (typeof MembershipStatus)[keyof typeof MembershipStatus];
export declare const ReservationStatus: {
    readonly RESERVED: "RESERVED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus];
export declare const PaymentMethod: {
    readonly FREE_TRAINING: "FREE_TRAINING";
    readonly CASH: "CASH";
    readonly CARD: "CARD";
    readonly BANK_TRANSFER: "BANK_TRANSFER";
};
export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod];
export declare const CancellationRequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly REJECTED: "REJECTED";
};
export type CancellationRequestStatus = (typeof CancellationRequestStatus)[keyof typeof CancellationRequestStatus];
