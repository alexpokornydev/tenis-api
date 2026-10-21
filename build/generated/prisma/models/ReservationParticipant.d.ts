import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReservationParticipantModel = runtime.Types.Result.DefaultSelection<Prisma.$ReservationParticipantPayload>;
export type AggregateReservationParticipant = {
    _count: ReservationParticipantCountAggregateOutputType | null;
    _avg: ReservationParticipantAvgAggregateOutputType | null;
    _sum: ReservationParticipantSumAggregateOutputType | null;
    _min: ReservationParticipantMinAggregateOutputType | null;
    _max: ReservationParticipantMaxAggregateOutputType | null;
};
export type ReservationParticipantAvgAggregateOutputType = {
    creditMinutes: number | null;
    priceCents: number | null;
};
export type ReservationParticipantSumAggregateOutputType = {
    creditMinutes: number | null;
    priceCents: number | null;
};
export type ReservationParticipantMinAggregateOutputType = {
    id: string | null;
    reservationId: string | null;
    profileId: string | null;
    creditUsed: boolean | null;
    creditMinutes: number | null;
    priceCents: number | null;
    createdAt: Date | null;
};
export type ReservationParticipantMaxAggregateOutputType = {
    id: string | null;
    reservationId: string | null;
    profileId: string | null;
    creditUsed: boolean | null;
    creditMinutes: number | null;
    priceCents: number | null;
    createdAt: Date | null;
};
export type ReservationParticipantCountAggregateOutputType = {
    id: number;
    reservationId: number;
    profileId: number;
    creditUsed: number;
    creditMinutes: number;
    priceCents: number;
    createdAt: number;
    _all: number;
};
export type ReservationParticipantAvgAggregateInputType = {
    creditMinutes?: true;
    priceCents?: true;
};
export type ReservationParticipantSumAggregateInputType = {
    creditMinutes?: true;
    priceCents?: true;
};
export type ReservationParticipantMinAggregateInputType = {
    id?: true;
    reservationId?: true;
    profileId?: true;
    creditUsed?: true;
    creditMinutes?: true;
    priceCents?: true;
    createdAt?: true;
};
export type ReservationParticipantMaxAggregateInputType = {
    id?: true;
    reservationId?: true;
    profileId?: true;
    creditUsed?: true;
    creditMinutes?: true;
    priceCents?: true;
    createdAt?: true;
};
export type ReservationParticipantCountAggregateInputType = {
    id?: true;
    reservationId?: true;
    profileId?: true;
    creditUsed?: true;
    creditMinutes?: true;
    priceCents?: true;
    createdAt?: true;
    _all?: true;
};
export type ReservationParticipantAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationParticipantWhereInput;
    orderBy?: Prisma.ReservationParticipantOrderByWithRelationInput | Prisma.ReservationParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ReservationParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReservationParticipantCountAggregateInputType;
    _avg?: ReservationParticipantAvgAggregateInputType;
    _sum?: ReservationParticipantSumAggregateInputType;
    _min?: ReservationParticipantMinAggregateInputType;
    _max?: ReservationParticipantMaxAggregateInputType;
};
export type GetReservationParticipantAggregateType<T extends ReservationParticipantAggregateArgs> = {
    [P in keyof T & keyof AggregateReservationParticipant]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReservationParticipant[P]> : Prisma.GetScalarType<T[P], AggregateReservationParticipant[P]>;
};
export type ReservationParticipantGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationParticipantWhereInput;
    orderBy?: Prisma.ReservationParticipantOrderByWithAggregationInput | Prisma.ReservationParticipantOrderByWithAggregationInput[];
    by: Prisma.ReservationParticipantScalarFieldEnum[] | Prisma.ReservationParticipantScalarFieldEnum;
    having?: Prisma.ReservationParticipantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReservationParticipantCountAggregateInputType | true;
    _avg?: ReservationParticipantAvgAggregateInputType;
    _sum?: ReservationParticipantSumAggregateInputType;
    _min?: ReservationParticipantMinAggregateInputType;
    _max?: ReservationParticipantMaxAggregateInputType;
};
export type ReservationParticipantGroupByOutputType = {
    id: string;
    reservationId: string;
    profileId: string;
    creditUsed: boolean;
    creditMinutes: number;
    priceCents: number;
    createdAt: Date;
    _count: ReservationParticipantCountAggregateOutputType | null;
    _avg: ReservationParticipantAvgAggregateOutputType | null;
    _sum: ReservationParticipantSumAggregateOutputType | null;
    _min: ReservationParticipantMinAggregateOutputType | null;
    _max: ReservationParticipantMaxAggregateOutputType | null;
};
export type GetReservationParticipantGroupByPayload<T extends ReservationParticipantGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReservationParticipantGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReservationParticipantGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReservationParticipantGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReservationParticipantGroupByOutputType[P]>;
}>>;
export type ReservationParticipantWhereInput = {
    AND?: Prisma.ReservationParticipantWhereInput | Prisma.ReservationParticipantWhereInput[];
    OR?: Prisma.ReservationParticipantWhereInput[];
    NOT?: Prisma.ReservationParticipantWhereInput | Prisma.ReservationParticipantWhereInput[];
    id?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    reservationId?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    profileId?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    creditUsed?: Prisma.BoolFilter<"ReservationParticipant"> | boolean;
    creditMinutes?: Prisma.IntFilter<"ReservationParticipant"> | number;
    priceCents?: Prisma.IntFilter<"ReservationParticipant"> | number;
    createdAt?: Prisma.DateTimeFilter<"ReservationParticipant"> | Date | string;
    reservation?: Prisma.XOR<Prisma.ReservationScalarRelationFilter, Prisma.ReservationWhereInput>;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    creditLedger?: Prisma.TrainingCreditLedgerListRelationFilter;
};
export type ReservationParticipantOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    creditUsed?: Prisma.SortOrder;
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reservation?: Prisma.ReservationOrderByWithRelationInput;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    creditLedger?: Prisma.TrainingCreditLedgerOrderByRelationAggregateInput;
};
export type ReservationParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    reservationId_profileId?: Prisma.ReservationParticipantReservationIdProfileIdCompoundUniqueInput;
    AND?: Prisma.ReservationParticipantWhereInput | Prisma.ReservationParticipantWhereInput[];
    OR?: Prisma.ReservationParticipantWhereInput[];
    NOT?: Prisma.ReservationParticipantWhereInput | Prisma.ReservationParticipantWhereInput[];
    reservationId?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    profileId?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    creditUsed?: Prisma.BoolFilter<"ReservationParticipant"> | boolean;
    creditMinutes?: Prisma.IntFilter<"ReservationParticipant"> | number;
    priceCents?: Prisma.IntFilter<"ReservationParticipant"> | number;
    createdAt?: Prisma.DateTimeFilter<"ReservationParticipant"> | Date | string;
    reservation?: Prisma.XOR<Prisma.ReservationScalarRelationFilter, Prisma.ReservationWhereInput>;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    creditLedger?: Prisma.TrainingCreditLedgerListRelationFilter;
}, "id" | "reservationId_profileId">;
export type ReservationParticipantOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    creditUsed?: Prisma.SortOrder;
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ReservationParticipantCountOrderByAggregateInput;
    _avg?: Prisma.ReservationParticipantAvgOrderByAggregateInput;
    _max?: Prisma.ReservationParticipantMaxOrderByAggregateInput;
    _min?: Prisma.ReservationParticipantMinOrderByAggregateInput;
    _sum?: Prisma.ReservationParticipantSumOrderByAggregateInput;
};
export type ReservationParticipantScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReservationParticipantScalarWhereWithAggregatesInput | Prisma.ReservationParticipantScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReservationParticipantScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReservationParticipantScalarWhereWithAggregatesInput | Prisma.ReservationParticipantScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ReservationParticipant"> | string;
    reservationId?: Prisma.UuidWithAggregatesFilter<"ReservationParticipant"> | string;
    profileId?: Prisma.UuidWithAggregatesFilter<"ReservationParticipant"> | string;
    creditUsed?: Prisma.BoolWithAggregatesFilter<"ReservationParticipant"> | boolean;
    creditMinutes?: Prisma.IntWithAggregatesFilter<"ReservationParticipant"> | number;
    priceCents?: Prisma.IntWithAggregatesFilter<"ReservationParticipant"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ReservationParticipant"> | Date | string;
};
export type ReservationParticipantCreateInput = {
    id?: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    reservation: Prisma.ReservationCreateNestedOneWithoutParticipantsInput;
    profile: Prisma.ProfileCreateNestedOneWithoutReservationsAsClientInput;
    creditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutParticipantInput;
};
export type ReservationParticipantUncheckedCreateInput = {
    id?: string;
    reservationId: string;
    profileId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    creditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutParticipantInput;
};
export type ReservationParticipantUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: Prisma.ReservationUpdateOneRequiredWithoutParticipantsNestedInput;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutReservationsAsClientNestedInput;
    creditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutParticipantNestedInput;
};
export type ReservationParticipantUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutParticipantNestedInput;
};
export type ReservationParticipantCreateManyInput = {
    id?: string;
    reservationId: string;
    profileId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
};
export type ReservationParticipantUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationParticipantUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationParticipantListRelationFilter = {
    every?: Prisma.ReservationParticipantWhereInput;
    some?: Prisma.ReservationParticipantWhereInput;
    none?: Prisma.ReservationParticipantWhereInput;
};
export type ReservationParticipantOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReservationParticipantScalarRelationFilter = {
    is?: Prisma.ReservationParticipantWhereInput;
    isNot?: Prisma.ReservationParticipantWhereInput;
};
export type ReservationParticipantReservationIdProfileIdCompoundUniqueInput = {
    reservationId: string;
    profileId: string;
};
export type ReservationParticipantCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    creditUsed?: Prisma.SortOrder;
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReservationParticipantAvgOrderByAggregateInput = {
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
};
export type ReservationParticipantMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    creditUsed?: Prisma.SortOrder;
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReservationParticipantMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    creditUsed?: Prisma.SortOrder;
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ReservationParticipantSumOrderByAggregateInput = {
    creditMinutes?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
};
export type ReservationParticipantCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutProfileInput, Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput> | Prisma.ReservationParticipantCreateWithoutProfileInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput | Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ReservationParticipantCreateManyProfileInputEnvelope;
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
};
export type ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutProfileInput, Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput> | Prisma.ReservationParticipantCreateWithoutProfileInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput | Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.ReservationParticipantCreateManyProfileInputEnvelope;
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
};
export type ReservationParticipantUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutProfileInput, Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput> | Prisma.ReservationParticipantCreateWithoutProfileInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput | Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutProfileInput | Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ReservationParticipantCreateManyProfileInputEnvelope;
    set?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    disconnect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    delete?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    update?: Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutProfileInput | Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ReservationParticipantUpdateManyWithWhereWithoutProfileInput | Prisma.ReservationParticipantUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ReservationParticipantScalarWhereInput | Prisma.ReservationParticipantScalarWhereInput[];
};
export type ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutProfileInput, Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput> | Prisma.ReservationParticipantCreateWithoutProfileInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput | Prisma.ReservationParticipantCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutProfileInput | Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.ReservationParticipantCreateManyProfileInputEnvelope;
    set?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    disconnect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    delete?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    update?: Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutProfileInput | Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.ReservationParticipantUpdateManyWithWhereWithoutProfileInput | Prisma.ReservationParticipantUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.ReservationParticipantScalarWhereInput | Prisma.ReservationParticipantScalarWhereInput[];
};
export type ReservationParticipantCreateNestedOneWithoutCreditLedgerInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutCreditLedgerInput, Prisma.ReservationParticipantUncheckedCreateWithoutCreditLedgerInput>;
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutCreditLedgerInput;
    connect?: Prisma.ReservationParticipantWhereUniqueInput;
};
export type ReservationParticipantUpdateOneRequiredWithoutCreditLedgerNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutCreditLedgerInput, Prisma.ReservationParticipantUncheckedCreateWithoutCreditLedgerInput>;
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutCreditLedgerInput;
    upsert?: Prisma.ReservationParticipantUpsertWithoutCreditLedgerInput;
    connect?: Prisma.ReservationParticipantWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReservationParticipantUpdateToOneWithWhereWithoutCreditLedgerInput, Prisma.ReservationParticipantUpdateWithoutCreditLedgerInput>, Prisma.ReservationParticipantUncheckedUpdateWithoutCreditLedgerInput>;
};
export type ReservationParticipantCreateNestedManyWithoutReservationInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutReservationInput, Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput> | Prisma.ReservationParticipantCreateWithoutReservationInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput | Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput[];
    createMany?: Prisma.ReservationParticipantCreateManyReservationInputEnvelope;
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
};
export type ReservationParticipantUncheckedCreateNestedManyWithoutReservationInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutReservationInput, Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput> | Prisma.ReservationParticipantCreateWithoutReservationInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput | Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput[];
    createMany?: Prisma.ReservationParticipantCreateManyReservationInputEnvelope;
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
};
export type ReservationParticipantUpdateManyWithoutReservationNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutReservationInput, Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput> | Prisma.ReservationParticipantCreateWithoutReservationInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput | Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput[];
    upsert?: Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutReservationInput | Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutReservationInput[];
    createMany?: Prisma.ReservationParticipantCreateManyReservationInputEnvelope;
    set?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    disconnect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    delete?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    update?: Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutReservationInput | Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutReservationInput[];
    updateMany?: Prisma.ReservationParticipantUpdateManyWithWhereWithoutReservationInput | Prisma.ReservationParticipantUpdateManyWithWhereWithoutReservationInput[];
    deleteMany?: Prisma.ReservationParticipantScalarWhereInput | Prisma.ReservationParticipantScalarWhereInput[];
};
export type ReservationParticipantUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutReservationInput, Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput> | Prisma.ReservationParticipantCreateWithoutReservationInput[] | Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput | Prisma.ReservationParticipantCreateOrConnectWithoutReservationInput[];
    upsert?: Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutReservationInput | Prisma.ReservationParticipantUpsertWithWhereUniqueWithoutReservationInput[];
    createMany?: Prisma.ReservationParticipantCreateManyReservationInputEnvelope;
    set?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    disconnect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    delete?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    connect?: Prisma.ReservationParticipantWhereUniqueInput | Prisma.ReservationParticipantWhereUniqueInput[];
    update?: Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutReservationInput | Prisma.ReservationParticipantUpdateWithWhereUniqueWithoutReservationInput[];
    updateMany?: Prisma.ReservationParticipantUpdateManyWithWhereWithoutReservationInput | Prisma.ReservationParticipantUpdateManyWithWhereWithoutReservationInput[];
    deleteMany?: Prisma.ReservationParticipantScalarWhereInput | Prisma.ReservationParticipantScalarWhereInput[];
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type ReservationParticipantCreateWithoutProfileInput = {
    id?: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    reservation: Prisma.ReservationCreateNestedOneWithoutParticipantsInput;
    creditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutParticipantInput;
};
export type ReservationParticipantUncheckedCreateWithoutProfileInput = {
    id?: string;
    reservationId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    creditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutParticipantInput;
};
export type ReservationParticipantCreateOrConnectWithoutProfileInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutProfileInput, Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput>;
};
export type ReservationParticipantCreateManyProfileInputEnvelope = {
    data: Prisma.ReservationParticipantCreateManyProfileInput | Prisma.ReservationParticipantCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type ReservationParticipantUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationParticipantUpdateWithoutProfileInput, Prisma.ReservationParticipantUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutProfileInput, Prisma.ReservationParticipantUncheckedCreateWithoutProfileInput>;
};
export type ReservationParticipantUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateWithoutProfileInput, Prisma.ReservationParticipantUncheckedUpdateWithoutProfileInput>;
};
export type ReservationParticipantUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.ReservationParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateManyMutationInput, Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileInput>;
};
export type ReservationParticipantScalarWhereInput = {
    AND?: Prisma.ReservationParticipantScalarWhereInput | Prisma.ReservationParticipantScalarWhereInput[];
    OR?: Prisma.ReservationParticipantScalarWhereInput[];
    NOT?: Prisma.ReservationParticipantScalarWhereInput | Prisma.ReservationParticipantScalarWhereInput[];
    id?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    reservationId?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    profileId?: Prisma.UuidFilter<"ReservationParticipant"> | string;
    creditUsed?: Prisma.BoolFilter<"ReservationParticipant"> | boolean;
    creditMinutes?: Prisma.IntFilter<"ReservationParticipant"> | number;
    priceCents?: Prisma.IntFilter<"ReservationParticipant"> | number;
    createdAt?: Prisma.DateTimeFilter<"ReservationParticipant"> | Date | string;
};
export type ReservationParticipantCreateWithoutCreditLedgerInput = {
    id?: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    reservation: Prisma.ReservationCreateNestedOneWithoutParticipantsInput;
    profile: Prisma.ProfileCreateNestedOneWithoutReservationsAsClientInput;
};
export type ReservationParticipantUncheckedCreateWithoutCreditLedgerInput = {
    id?: string;
    reservationId: string;
    profileId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
};
export type ReservationParticipantCreateOrConnectWithoutCreditLedgerInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutCreditLedgerInput, Prisma.ReservationParticipantUncheckedCreateWithoutCreditLedgerInput>;
};
export type ReservationParticipantUpsertWithoutCreditLedgerInput = {
    update: Prisma.XOR<Prisma.ReservationParticipantUpdateWithoutCreditLedgerInput, Prisma.ReservationParticipantUncheckedUpdateWithoutCreditLedgerInput>;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutCreditLedgerInput, Prisma.ReservationParticipantUncheckedCreateWithoutCreditLedgerInput>;
    where?: Prisma.ReservationParticipantWhereInput;
};
export type ReservationParticipantUpdateToOneWithWhereWithoutCreditLedgerInput = {
    where?: Prisma.ReservationParticipantWhereInput;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateWithoutCreditLedgerInput, Prisma.ReservationParticipantUncheckedUpdateWithoutCreditLedgerInput>;
};
export type ReservationParticipantUpdateWithoutCreditLedgerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: Prisma.ReservationUpdateOneRequiredWithoutParticipantsNestedInput;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutReservationsAsClientNestedInput;
};
export type ReservationParticipantUncheckedUpdateWithoutCreditLedgerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationParticipantCreateWithoutReservationInput = {
    id?: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutReservationsAsClientInput;
    creditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutParticipantInput;
};
export type ReservationParticipantUncheckedCreateWithoutReservationInput = {
    id?: string;
    profileId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
    creditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutParticipantInput;
};
export type ReservationParticipantCreateOrConnectWithoutReservationInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutReservationInput, Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput>;
};
export type ReservationParticipantCreateManyReservationInputEnvelope = {
    data: Prisma.ReservationParticipantCreateManyReservationInput | Prisma.ReservationParticipantCreateManyReservationInput[];
    skipDuplicates?: boolean;
};
export type ReservationParticipantUpsertWithWhereUniqueWithoutReservationInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationParticipantUpdateWithoutReservationInput, Prisma.ReservationParticipantUncheckedUpdateWithoutReservationInput>;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateWithoutReservationInput, Prisma.ReservationParticipantUncheckedCreateWithoutReservationInput>;
};
export type ReservationParticipantUpdateWithWhereUniqueWithoutReservationInput = {
    where: Prisma.ReservationParticipantWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateWithoutReservationInput, Prisma.ReservationParticipantUncheckedUpdateWithoutReservationInput>;
};
export type ReservationParticipantUpdateManyWithWhereWithoutReservationInput = {
    where: Prisma.ReservationParticipantScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateManyMutationInput, Prisma.ReservationParticipantUncheckedUpdateManyWithoutReservationInput>;
};
export type ReservationParticipantCreateManyProfileInput = {
    id?: string;
    reservationId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
};
export type ReservationParticipantUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: Prisma.ReservationUpdateOneRequiredWithoutParticipantsNestedInput;
    creditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutParticipantNestedInput;
};
export type ReservationParticipantUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutParticipantNestedInput;
};
export type ReservationParticipantUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationParticipantCreateManyReservationInput = {
    id?: string;
    profileId: string;
    creditUsed?: boolean;
    creditMinutes?: number;
    priceCents?: number;
    createdAt?: Date | string;
};
export type ReservationParticipantUpdateWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutReservationsAsClientNestedInput;
    creditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutParticipantNestedInput;
};
export type ReservationParticipantUncheckedUpdateWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutParticipantNestedInput;
};
export type ReservationParticipantUncheckedUpdateManyWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    creditUsed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    creditMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationParticipantCountOutputType = {
    creditLedger: number;
};
export type ReservationParticipantCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    creditLedger?: boolean | ReservationParticipantCountOutputTypeCountCreditLedgerArgs;
};
export type ReservationParticipantCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantCountOutputTypeSelect<ExtArgs> | null;
};
export type ReservationParticipantCountOutputTypeCountCreditLedgerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditLedgerWhereInput;
};
export type ReservationParticipantSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    profileId?: boolean;
    creditUsed?: boolean;
    creditMinutes?: boolean;
    priceCents?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    creditLedger?: boolean | Prisma.ReservationParticipant$creditLedgerArgs<ExtArgs>;
    _count?: boolean | Prisma.ReservationParticipantCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservationParticipant"]>;
export type ReservationParticipantSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    profileId?: boolean;
    creditUsed?: boolean;
    creditMinutes?: boolean;
    priceCents?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservationParticipant"]>;
export type ReservationParticipantSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    profileId?: boolean;
    creditUsed?: boolean;
    creditMinutes?: boolean;
    priceCents?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservationParticipant"]>;
export type ReservationParticipantSelectScalar = {
    id?: boolean;
    reservationId?: boolean;
    profileId?: boolean;
    creditUsed?: boolean;
    creditMinutes?: boolean;
    priceCents?: boolean;
    createdAt?: boolean;
};
export type ReservationParticipantOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reservationId" | "profileId" | "creditUsed" | "creditMinutes" | "priceCents" | "createdAt", ExtArgs["result"]["reservationParticipant"]>;
export type ReservationParticipantInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    creditLedger?: boolean | Prisma.ReservationParticipant$creditLedgerArgs<ExtArgs>;
    _count?: boolean | Prisma.ReservationParticipantCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReservationParticipantIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ReservationParticipantIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ReservationParticipantPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ReservationParticipant";
    objects: {
        reservation: Prisma.$ReservationPayload<ExtArgs>;
        profile: Prisma.$ProfilePayload<ExtArgs>;
        creditLedger: Prisma.$TrainingCreditLedgerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reservationId: string;
        profileId: string;
        creditUsed: boolean;
        creditMinutes: number;
        priceCents: number;
        createdAt: Date;
    }, ExtArgs["result"]["reservationParticipant"]>;
    composites: {};
};
export type ReservationParticipantGetPayload<S extends boolean | null | undefined | ReservationParticipantDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload, S>;
export type ReservationParticipantCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReservationParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReservationParticipantCountAggregateInputType | true;
};
export interface ReservationParticipantDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ReservationParticipant'];
        meta: {
            name: 'ReservationParticipant';
        };
    };
    findUnique<T extends ReservationParticipantFindUniqueArgs>(args: Prisma.SelectSubset<T, ReservationParticipantFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReservationParticipantFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReservationParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReservationParticipantFindFirstArgs>(args?: Prisma.SelectSubset<T, ReservationParticipantFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReservationParticipantFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReservationParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReservationParticipantFindManyArgs>(args?: Prisma.SelectSubset<T, ReservationParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReservationParticipantCreateArgs>(args: Prisma.SelectSubset<T, ReservationParticipantCreateArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReservationParticipantCreateManyArgs>(args?: Prisma.SelectSubset<T, ReservationParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReservationParticipantCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReservationParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReservationParticipantDeleteArgs>(args: Prisma.SelectSubset<T, ReservationParticipantDeleteArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReservationParticipantUpdateArgs>(args: Prisma.SelectSubset<T, ReservationParticipantUpdateArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReservationParticipantDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReservationParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReservationParticipantUpdateManyArgs>(args: Prisma.SelectSubset<T, ReservationParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReservationParticipantUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReservationParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReservationParticipantUpsertArgs>(args: Prisma.SelectSubset<T, ReservationParticipantUpsertArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReservationParticipantCountArgs>(args?: Prisma.Subset<T, ReservationParticipantCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReservationParticipantCountAggregateOutputType> : number>;
    aggregate<T extends ReservationParticipantAggregateArgs>(args: Prisma.Subset<T, ReservationParticipantAggregateArgs>): Prisma.PrismaPromise<GetReservationParticipantAggregateType<T>>;
    groupBy<T extends ReservationParticipantGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReservationParticipantGroupByArgs['orderBy'];
    } : {
        orderBy?: ReservationParticipantGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReservationParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReservationParticipantFieldRefs;
}
export interface Prisma__ReservationParticipantClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reservation<T extends Prisma.ReservationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservationDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    creditLedger<T extends Prisma.ReservationParticipant$creditLedgerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservationParticipant$creditLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReservationParticipantFieldRefs {
    readonly id: Prisma.FieldRef<"ReservationParticipant", 'String'>;
    readonly reservationId: Prisma.FieldRef<"ReservationParticipant", 'String'>;
    readonly profileId: Prisma.FieldRef<"ReservationParticipant", 'String'>;
    readonly creditUsed: Prisma.FieldRef<"ReservationParticipant", 'Boolean'>;
    readonly creditMinutes: Prisma.FieldRef<"ReservationParticipant", 'Int'>;
    readonly priceCents: Prisma.FieldRef<"ReservationParticipant", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"ReservationParticipant", 'DateTime'>;
}
export type ReservationParticipantFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where: Prisma.ReservationParticipantWhereUniqueInput;
};
export type ReservationParticipantFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where: Prisma.ReservationParticipantWhereUniqueInput;
};
export type ReservationParticipantFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where?: Prisma.ReservationParticipantWhereInput;
    orderBy?: Prisma.ReservationParticipantOrderByWithRelationInput | Prisma.ReservationParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ReservationParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationParticipantScalarFieldEnum | Prisma.ReservationParticipantScalarFieldEnum[];
};
export type ReservationParticipantFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where?: Prisma.ReservationParticipantWhereInput;
    orderBy?: Prisma.ReservationParticipantOrderByWithRelationInput | Prisma.ReservationParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ReservationParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationParticipantScalarFieldEnum | Prisma.ReservationParticipantScalarFieldEnum[];
};
export type ReservationParticipantFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where?: Prisma.ReservationParticipantWhereInput;
    orderBy?: Prisma.ReservationParticipantOrderByWithRelationInput | Prisma.ReservationParticipantOrderByWithRelationInput[];
    cursor?: Prisma.ReservationParticipantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationParticipantScalarFieldEnum | Prisma.ReservationParticipantScalarFieldEnum[];
};
export type ReservationParticipantCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationParticipantCreateInput, Prisma.ReservationParticipantUncheckedCreateInput>;
};
export type ReservationParticipantCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReservationParticipantCreateManyInput | Prisma.ReservationParticipantCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReservationParticipantCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    data: Prisma.ReservationParticipantCreateManyInput | Prisma.ReservationParticipantCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReservationParticipantIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReservationParticipantUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateInput, Prisma.ReservationParticipantUncheckedUpdateInput>;
    where: Prisma.ReservationParticipantWhereUniqueInput;
};
export type ReservationParticipantUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateManyMutationInput, Prisma.ReservationParticipantUncheckedUpdateManyInput>;
    where?: Prisma.ReservationParticipantWhereInput;
    limit?: number;
};
export type ReservationParticipantUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationParticipantUpdateManyMutationInput, Prisma.ReservationParticipantUncheckedUpdateManyInput>;
    where?: Prisma.ReservationParticipantWhereInput;
    limit?: number;
    include?: Prisma.ReservationParticipantIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReservationParticipantUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where: Prisma.ReservationParticipantWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationParticipantCreateInput, Prisma.ReservationParticipantUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReservationParticipantUpdateInput, Prisma.ReservationParticipantUncheckedUpdateInput>;
};
export type ReservationParticipantDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
    where: Prisma.ReservationParticipantWhereUniqueInput;
};
export type ReservationParticipantDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationParticipantWhereInput;
    limit?: number;
};
export type ReservationParticipant$creditLedgerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    where?: Prisma.TrainingCreditLedgerWhereInput;
    orderBy?: Prisma.TrainingCreditLedgerOrderByWithRelationInput | Prisma.TrainingCreditLedgerOrderByWithRelationInput[];
    cursor?: Prisma.TrainingCreditLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingCreditLedgerScalarFieldEnum | Prisma.TrainingCreditLedgerScalarFieldEnum[];
};
export type ReservationParticipantDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationParticipantSelect<ExtArgs> | null;
    omit?: Prisma.ReservationParticipantOmit<ExtArgs> | null;
    include?: Prisma.ReservationParticipantInclude<ExtArgs> | null;
};
