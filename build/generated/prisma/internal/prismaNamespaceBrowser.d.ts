import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Profile: "Profile";
    readonly Membership: "Membership";
    readonly TrainingCredit: "TrainingCredit";
    readonly TrainingCreditLedger: "TrainingCreditLedger";
    readonly Court: "Court";
    readonly Reservation: "Reservation";
    readonly ReservationParticipant: "ReservationParticipant";
    readonly CancellationRequest: "CancellationRequest";
    readonly Announcement: "Announcement";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ProfileScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly fullName: "fullName";
    readonly phone: "phone";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum];
export declare const MembershipScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly type: "type";
    readonly status: "status";
    readonly validFrom: "validFrom";
    readonly validUntil: "validUntil";
    readonly annualFee: "annualFee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type MembershipScalarFieldEnum = (typeof MembershipScalarFieldEnum)[keyof typeof MembershipScalarFieldEnum];
export declare const TrainingCreditScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly balanceMinutes: "balanceMinutes";
    readonly reservedMinutes: "reservedMinutes";
    readonly updatedAt: "updatedAt";
};
export type TrainingCreditScalarFieldEnum = (typeof TrainingCreditScalarFieldEnum)[keyof typeof TrainingCreditScalarFieldEnum];
export declare const TrainingCreditLedgerScalarFieldEnum: {
    readonly id: "id";
    readonly profileId: "profileId";
    readonly participantId: "participantId";
    readonly minutes: "minutes";
    readonly reason: "reason";
    readonly createdAt: "createdAt";
};
export type TrainingCreditLedgerScalarFieldEnum = (typeof TrainingCreditLedgerScalarFieldEnum)[keyof typeof TrainingCreditLedgerScalarFieldEnum];
export declare const CourtScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly active: "active";
    readonly createdAt: "createdAt";
};
export type CourtScalarFieldEnum = (typeof CourtScalarFieldEnum)[keyof typeof CourtScalarFieldEnum];
export declare const ReservationScalarFieldEnum: {
    readonly id: "id";
    readonly courtId: "courtId";
    readonly trainerId: "trainerId";
    readonly startsAt: "startsAt";
    readonly endsAt: "endsAt";
    readonly status: "status";
    readonly paymentMethod: "paymentMethod";
    readonly priceCents: "priceCents";
    readonly capacity: "capacity";
    readonly notes: "notes";
    readonly cancelledAt: "cancelledAt";
    readonly cancelledBy: "cancelledBy";
    readonly createdBy: "createdBy";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum];
export declare const ReservationParticipantScalarFieldEnum: {
    readonly id: "id";
    readonly reservationId: "reservationId";
    readonly profileId: "profileId";
    readonly creditUsed: "creditUsed";
    readonly creditMinutes: "creditMinutes";
    readonly priceCents: "priceCents";
    readonly createdAt: "createdAt";
};
export type ReservationParticipantScalarFieldEnum = (typeof ReservationParticipantScalarFieldEnum)[keyof typeof ReservationParticipantScalarFieldEnum];
export declare const CancellationRequestScalarFieldEnum: {
    readonly id: "id";
    readonly reservationId: "reservationId";
    readonly requesterId: "requesterId";
    readonly reason: "reason";
    readonly status: "status";
    readonly reviewedBy: "reviewedBy";
    readonly reviewedAt: "reviewedAt";
    readonly reviewNote: "reviewNote";
    readonly createdAt: "createdAt";
};
export type CancellationRequestScalarFieldEnum = (typeof CancellationRequestScalarFieldEnum)[keyof typeof CancellationRequestScalarFieldEnum];
export declare const AnnouncementScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly body: "body";
    readonly audience: "audience";
    readonly publishedAt: "publishedAt";
    readonly authorId: "authorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
