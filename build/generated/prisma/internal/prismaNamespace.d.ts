import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "profile" | "membership" | "trainingCredit" | "trainingCreditLedger" | "court" | "reservation" | "reservationParticipant" | "cancellationRequest" | "announcement";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Profile: {
            payload: Prisma.$ProfilePayload<ExtArgs>;
            fields: Prisma.ProfileFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ProfileFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findFirst: {
                    args: Prisma.ProfileFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                findMany: {
                    args: Prisma.ProfileFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                create: {
                    args: Prisma.ProfileCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                createMany: {
                    args: Prisma.ProfileCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                delete: {
                    args: Prisma.ProfileDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                update: {
                    args: Prisma.ProfileUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                deleteMany: {
                    args: Prisma.ProfileDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ProfileUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>[];
                };
                upsert: {
                    args: Prisma.ProfileUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ProfilePayload>;
                };
                aggregate: {
                    args: Prisma.ProfileAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProfile>;
                };
                groupBy: {
                    args: Prisma.ProfileGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ProfileCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ProfileCountAggregateOutputType> | number;
                };
            };
        };
        Membership: {
            payload: Prisma.$MembershipPayload<ExtArgs>;
            fields: Prisma.MembershipFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MembershipFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MembershipFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>;
                };
                findFirst: {
                    args: Prisma.MembershipFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MembershipFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>;
                };
                findMany: {
                    args: Prisma.MembershipFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>[];
                };
                create: {
                    args: Prisma.MembershipCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>;
                };
                createMany: {
                    args: Prisma.MembershipCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.MembershipCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>[];
                };
                delete: {
                    args: Prisma.MembershipDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>;
                };
                update: {
                    args: Prisma.MembershipUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>;
                };
                deleteMany: {
                    args: Prisma.MembershipDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MembershipUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.MembershipUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>[];
                };
                upsert: {
                    args: Prisma.MembershipUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MembershipPayload>;
                };
                aggregate: {
                    args: Prisma.MembershipAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMembership>;
                };
                groupBy: {
                    args: Prisma.MembershipGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MembershipGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MembershipCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MembershipCountAggregateOutputType> | number;
                };
            };
        };
        TrainingCredit: {
            payload: Prisma.$TrainingCreditPayload<ExtArgs>;
            fields: Prisma.TrainingCreditFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TrainingCreditFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TrainingCreditFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>;
                };
                findFirst: {
                    args: Prisma.TrainingCreditFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TrainingCreditFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>;
                };
                findMany: {
                    args: Prisma.TrainingCreditFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>[];
                };
                create: {
                    args: Prisma.TrainingCreditCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>;
                };
                createMany: {
                    args: Prisma.TrainingCreditCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TrainingCreditCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>[];
                };
                delete: {
                    args: Prisma.TrainingCreditDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>;
                };
                update: {
                    args: Prisma.TrainingCreditUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>;
                };
                deleteMany: {
                    args: Prisma.TrainingCreditDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TrainingCreditUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TrainingCreditUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>[];
                };
                upsert: {
                    args: Prisma.TrainingCreditUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditPayload>;
                };
                aggregate: {
                    args: Prisma.TrainingCreditAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrainingCredit>;
                };
                groupBy: {
                    args: Prisma.TrainingCreditGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrainingCreditGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TrainingCreditCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrainingCreditCountAggregateOutputType> | number;
                };
            };
        };
        TrainingCreditLedger: {
            payload: Prisma.$TrainingCreditLedgerPayload<ExtArgs>;
            fields: Prisma.TrainingCreditLedgerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.TrainingCreditLedgerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.TrainingCreditLedgerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>;
                };
                findFirst: {
                    args: Prisma.TrainingCreditLedgerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.TrainingCreditLedgerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>;
                };
                findMany: {
                    args: Prisma.TrainingCreditLedgerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>[];
                };
                create: {
                    args: Prisma.TrainingCreditLedgerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>;
                };
                createMany: {
                    args: Prisma.TrainingCreditLedgerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.TrainingCreditLedgerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>[];
                };
                delete: {
                    args: Prisma.TrainingCreditLedgerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>;
                };
                update: {
                    args: Prisma.TrainingCreditLedgerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>;
                };
                deleteMany: {
                    args: Prisma.TrainingCreditLedgerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.TrainingCreditLedgerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.TrainingCreditLedgerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>[];
                };
                upsert: {
                    args: Prisma.TrainingCreditLedgerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$TrainingCreditLedgerPayload>;
                };
                aggregate: {
                    args: Prisma.TrainingCreditLedgerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTrainingCreditLedger>;
                };
                groupBy: {
                    args: Prisma.TrainingCreditLedgerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrainingCreditLedgerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.TrainingCreditLedgerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TrainingCreditLedgerCountAggregateOutputType> | number;
                };
            };
        };
        Court: {
            payload: Prisma.$CourtPayload<ExtArgs>;
            fields: Prisma.CourtFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CourtFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CourtFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>;
                };
                findFirst: {
                    args: Prisma.CourtFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CourtFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>;
                };
                findMany: {
                    args: Prisma.CourtFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>[];
                };
                create: {
                    args: Prisma.CourtCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>;
                };
                createMany: {
                    args: Prisma.CourtCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CourtCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>[];
                };
                delete: {
                    args: Prisma.CourtDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>;
                };
                update: {
                    args: Prisma.CourtUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>;
                };
                deleteMany: {
                    args: Prisma.CourtDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CourtUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CourtUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>[];
                };
                upsert: {
                    args: Prisma.CourtUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CourtPayload>;
                };
                aggregate: {
                    args: Prisma.CourtAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCourt>;
                };
                groupBy: {
                    args: Prisma.CourtGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourtGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CourtCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CourtCountAggregateOutputType> | number;
                };
            };
        };
        Reservation: {
            payload: Prisma.$ReservationPayload<ExtArgs>;
            fields: Prisma.ReservationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReservationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                findFirst: {
                    args: Prisma.ReservationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                findMany: {
                    args: Prisma.ReservationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>[];
                };
                create: {
                    args: Prisma.ReservationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                createMany: {
                    args: Prisma.ReservationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>[];
                };
                delete: {
                    args: Prisma.ReservationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                update: {
                    args: Prisma.ReservationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                deleteMany: {
                    args: Prisma.ReservationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReservationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>[];
                };
                upsert: {
                    args: Prisma.ReservationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationPayload>;
                };
                aggregate: {
                    args: Prisma.ReservationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReservation>;
                };
                groupBy: {
                    args: Prisma.ReservationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReservationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationCountAggregateOutputType> | number;
                };
            };
        };
        ReservationParticipant: {
            payload: Prisma.$ReservationParticipantPayload<ExtArgs>;
            fields: Prisma.ReservationParticipantFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReservationParticipantFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReservationParticipantFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>;
                };
                findFirst: {
                    args: Prisma.ReservationParticipantFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReservationParticipantFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>;
                };
                findMany: {
                    args: Prisma.ReservationParticipantFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>[];
                };
                create: {
                    args: Prisma.ReservationParticipantCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>;
                };
                createMany: {
                    args: Prisma.ReservationParticipantCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReservationParticipantCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>[];
                };
                delete: {
                    args: Prisma.ReservationParticipantDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>;
                };
                update: {
                    args: Prisma.ReservationParticipantUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>;
                };
                deleteMany: {
                    args: Prisma.ReservationParticipantDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReservationParticipantUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReservationParticipantUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>[];
                };
                upsert: {
                    args: Prisma.ReservationParticipantUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReservationParticipantPayload>;
                };
                aggregate: {
                    args: Prisma.ReservationParticipantAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReservationParticipant>;
                };
                groupBy: {
                    args: Prisma.ReservationParticipantGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationParticipantGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReservationParticipantCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReservationParticipantCountAggregateOutputType> | number;
                };
            };
        };
        CancellationRequest: {
            payload: Prisma.$CancellationRequestPayload<ExtArgs>;
            fields: Prisma.CancellationRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CancellationRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CancellationRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>;
                };
                findFirst: {
                    args: Prisma.CancellationRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CancellationRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>;
                };
                findMany: {
                    args: Prisma.CancellationRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>[];
                };
                create: {
                    args: Prisma.CancellationRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>;
                };
                createMany: {
                    args: Prisma.CancellationRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CancellationRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>[];
                };
                delete: {
                    args: Prisma.CancellationRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>;
                };
                update: {
                    args: Prisma.CancellationRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.CancellationRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CancellationRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CancellationRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>[];
                };
                upsert: {
                    args: Prisma.CancellationRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CancellationRequestPayload>;
                };
                aggregate: {
                    args: Prisma.CancellationRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCancellationRequest>;
                };
                groupBy: {
                    args: Prisma.CancellationRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CancellationRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CancellationRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CancellationRequestCountAggregateOutputType> | number;
                };
            };
        };
        Announcement: {
            payload: Prisma.$AnnouncementPayload<ExtArgs>;
            fields: Prisma.AnnouncementFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findFirst: {
                    args: Prisma.AnnouncementFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                findMany: {
                    args: Prisma.AnnouncementFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                create: {
                    args: Prisma.AnnouncementCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                createMany: {
                    args: Prisma.AnnouncementCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                delete: {
                    args: Prisma.AnnouncementDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                update: {
                    args: Prisma.AnnouncementUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                deleteMany: {
                    args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AnnouncementUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>[];
                };
                upsert: {
                    args: Prisma.AnnouncementUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AnnouncementPayload>;
                };
                aggregate: {
                    args: Prisma.AnnouncementAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAnnouncement>;
                };
                groupBy: {
                    args: Prisma.AnnouncementGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AnnouncementCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AnnouncementCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus'>;
export type ListEnumMembershipStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MembershipStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>;
export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>;
export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>;
export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>;
export type EnumCancellationRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancellationRequestStatus'>;
export type ListEnumCancellationRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancellationRequestStatus[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    profile?: Prisma.ProfileOmit;
    membership?: Prisma.MembershipOmit;
    trainingCredit?: Prisma.TrainingCreditOmit;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerOmit;
    court?: Prisma.CourtOmit;
    reservation?: Prisma.ReservationOmit;
    reservationParticipant?: Prisma.ReservationParticipantOmit;
    cancellationRequest?: Prisma.CancellationRequestOmit;
    announcement?: Prisma.AnnouncementOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
