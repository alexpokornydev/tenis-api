import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TrainingCreditLedgerModel = runtime.Types.Result.DefaultSelection<Prisma.$TrainingCreditLedgerPayload>;
export type AggregateTrainingCreditLedger = {
    _count: TrainingCreditLedgerCountAggregateOutputType | null;
    _avg: TrainingCreditLedgerAvgAggregateOutputType | null;
    _sum: TrainingCreditLedgerSumAggregateOutputType | null;
    _min: TrainingCreditLedgerMinAggregateOutputType | null;
    _max: TrainingCreditLedgerMaxAggregateOutputType | null;
};
export type TrainingCreditLedgerAvgAggregateOutputType = {
    minutes: number | null;
};
export type TrainingCreditLedgerSumAggregateOutputType = {
    minutes: number | null;
};
export type TrainingCreditLedgerMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    participantId: string | null;
    minutes: number | null;
    reason: string | null;
    createdAt: Date | null;
};
export type TrainingCreditLedgerMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    participantId: string | null;
    minutes: number | null;
    reason: string | null;
    createdAt: Date | null;
};
export type TrainingCreditLedgerCountAggregateOutputType = {
    id: number;
    profileId: number;
    participantId: number;
    minutes: number;
    reason: number;
    createdAt: number;
    _all: number;
};
export type TrainingCreditLedgerAvgAggregateInputType = {
    minutes?: true;
};
export type TrainingCreditLedgerSumAggregateInputType = {
    minutes?: true;
};
export type TrainingCreditLedgerMinAggregateInputType = {
    id?: true;
    profileId?: true;
    participantId?: true;
    minutes?: true;
    reason?: true;
    createdAt?: true;
};
export type TrainingCreditLedgerMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    participantId?: true;
    minutes?: true;
    reason?: true;
    createdAt?: true;
};
export type TrainingCreditLedgerCountAggregateInputType = {
    id?: true;
    profileId?: true;
    participantId?: true;
    minutes?: true;
    reason?: true;
    createdAt?: true;
    _all?: true;
};
export type TrainingCreditLedgerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditLedgerWhereInput;
    orderBy?: Prisma.TrainingCreditLedgerOrderByWithRelationInput | Prisma.TrainingCreditLedgerOrderByWithRelationInput[];
    cursor?: Prisma.TrainingCreditLedgerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TrainingCreditLedgerCountAggregateInputType;
    _avg?: TrainingCreditLedgerAvgAggregateInputType;
    _sum?: TrainingCreditLedgerSumAggregateInputType;
    _min?: TrainingCreditLedgerMinAggregateInputType;
    _max?: TrainingCreditLedgerMaxAggregateInputType;
};
export type GetTrainingCreditLedgerAggregateType<T extends TrainingCreditLedgerAggregateArgs> = {
    [P in keyof T & keyof AggregateTrainingCreditLedger]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrainingCreditLedger[P]> : Prisma.GetScalarType<T[P], AggregateTrainingCreditLedger[P]>;
};
export type TrainingCreditLedgerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditLedgerWhereInput;
    orderBy?: Prisma.TrainingCreditLedgerOrderByWithAggregationInput | Prisma.TrainingCreditLedgerOrderByWithAggregationInput[];
    by: Prisma.TrainingCreditLedgerScalarFieldEnum[] | Prisma.TrainingCreditLedgerScalarFieldEnum;
    having?: Prisma.TrainingCreditLedgerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingCreditLedgerCountAggregateInputType | true;
    _avg?: TrainingCreditLedgerAvgAggregateInputType;
    _sum?: TrainingCreditLedgerSumAggregateInputType;
    _min?: TrainingCreditLedgerMinAggregateInputType;
    _max?: TrainingCreditLedgerMaxAggregateInputType;
};
export type TrainingCreditLedgerGroupByOutputType = {
    id: string;
    profileId: string;
    participantId: string;
    minutes: number;
    reason: string;
    createdAt: Date;
    _count: TrainingCreditLedgerCountAggregateOutputType | null;
    _avg: TrainingCreditLedgerAvgAggregateOutputType | null;
    _sum: TrainingCreditLedgerSumAggregateOutputType | null;
    _min: TrainingCreditLedgerMinAggregateOutputType | null;
    _max: TrainingCreditLedgerMaxAggregateOutputType | null;
};
export type GetTrainingCreditLedgerGroupByPayload<T extends TrainingCreditLedgerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainingCreditLedgerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainingCreditLedgerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainingCreditLedgerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainingCreditLedgerGroupByOutputType[P]>;
}>>;
export type TrainingCreditLedgerWhereInput = {
    AND?: Prisma.TrainingCreditLedgerWhereInput | Prisma.TrainingCreditLedgerWhereInput[];
    OR?: Prisma.TrainingCreditLedgerWhereInput[];
    NOT?: Prisma.TrainingCreditLedgerWhereInput | Prisma.TrainingCreditLedgerWhereInput[];
    id?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    profileId?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    participantId?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    minutes?: Prisma.IntFilter<"TrainingCreditLedger"> | number;
    reason?: Prisma.StringFilter<"TrainingCreditLedger"> | string;
    createdAt?: Prisma.DateTimeFilter<"TrainingCreditLedger"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    participant?: Prisma.XOR<Prisma.ReservationParticipantScalarRelationFilter, Prisma.ReservationParticipantWhereInput>;
};
export type TrainingCreditLedgerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    minutes?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
    participant?: Prisma.ReservationParticipantOrderByWithRelationInput;
};
export type TrainingCreditLedgerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    participantId_reason?: Prisma.TrainingCreditLedgerParticipantIdReasonCompoundUniqueInput;
    AND?: Prisma.TrainingCreditLedgerWhereInput | Prisma.TrainingCreditLedgerWhereInput[];
    OR?: Prisma.TrainingCreditLedgerWhereInput[];
    NOT?: Prisma.TrainingCreditLedgerWhereInput | Prisma.TrainingCreditLedgerWhereInput[];
    profileId?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    participantId?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    minutes?: Prisma.IntFilter<"TrainingCreditLedger"> | number;
    reason?: Prisma.StringFilter<"TrainingCreditLedger"> | string;
    createdAt?: Prisma.DateTimeFilter<"TrainingCreditLedger"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    participant?: Prisma.XOR<Prisma.ReservationParticipantScalarRelationFilter, Prisma.ReservationParticipantWhereInput>;
}, "id" | "participantId_reason">;
export type TrainingCreditLedgerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    minutes?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TrainingCreditLedgerCountOrderByAggregateInput;
    _avg?: Prisma.TrainingCreditLedgerAvgOrderByAggregateInput;
    _max?: Prisma.TrainingCreditLedgerMaxOrderByAggregateInput;
    _min?: Prisma.TrainingCreditLedgerMinOrderByAggregateInput;
    _sum?: Prisma.TrainingCreditLedgerSumOrderByAggregateInput;
};
export type TrainingCreditLedgerScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrainingCreditLedgerScalarWhereWithAggregatesInput | Prisma.TrainingCreditLedgerScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrainingCreditLedgerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrainingCreditLedgerScalarWhereWithAggregatesInput | Prisma.TrainingCreditLedgerScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TrainingCreditLedger"> | string;
    profileId?: Prisma.UuidWithAggregatesFilter<"TrainingCreditLedger"> | string;
    participantId?: Prisma.UuidWithAggregatesFilter<"TrainingCreditLedger"> | string;
    minutes?: Prisma.IntWithAggregatesFilter<"TrainingCreditLedger"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"TrainingCreditLedger"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TrainingCreditLedger"> | Date | string;
};
export type TrainingCreditLedgerCreateInput = {
    id?: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutTrainingCreditLedgerInput;
    participant: Prisma.ReservationParticipantCreateNestedOneWithoutCreditLedgerInput;
};
export type TrainingCreditLedgerUncheckedCreateInput = {
    id?: string;
    profileId: string;
    participantId: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
};
export type TrainingCreditLedgerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutTrainingCreditLedgerNestedInput;
    participant?: Prisma.ReservationParticipantUpdateOneRequiredWithoutCreditLedgerNestedInput;
};
export type TrainingCreditLedgerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerCreateManyInput = {
    id?: string;
    profileId: string;
    participantId: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
};
export type TrainingCreditLedgerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerListRelationFilter = {
    every?: Prisma.TrainingCreditLedgerWhereInput;
    some?: Prisma.TrainingCreditLedgerWhereInput;
    none?: Prisma.TrainingCreditLedgerWhereInput;
};
export type TrainingCreditLedgerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TrainingCreditLedgerParticipantIdReasonCompoundUniqueInput = {
    participantId: string;
    reason: string;
};
export type TrainingCreditLedgerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    minutes?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TrainingCreditLedgerAvgOrderByAggregateInput = {
    minutes?: Prisma.SortOrder;
};
export type TrainingCreditLedgerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    minutes?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TrainingCreditLedgerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    participantId?: Prisma.SortOrder;
    minutes?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TrainingCreditLedgerSumOrderByAggregateInput = {
    minutes?: Prisma.SortOrder;
};
export type TrainingCreditLedgerCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput> | Prisma.TrainingCreditLedgerCreateWithoutProfileInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyProfileInputEnvelope;
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
};
export type TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput> | Prisma.TrainingCreditLedgerCreateWithoutProfileInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyProfileInputEnvelope;
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
};
export type TrainingCreditLedgerUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput> | Prisma.TrainingCreditLedgerCreateWithoutProfileInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutProfileInput | Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyProfileInputEnvelope;
    set?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    delete?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    update?: Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutProfileInput | Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutProfileInput | Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.TrainingCreditLedgerScalarWhereInput | Prisma.TrainingCreditLedgerScalarWhereInput[];
};
export type TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput> | Prisma.TrainingCreditLedgerCreateWithoutProfileInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutProfileInput[];
    upsert?: Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutProfileInput | Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutProfileInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyProfileInputEnvelope;
    set?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    delete?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    update?: Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutProfileInput | Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutProfileInput[];
    updateMany?: Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutProfileInput | Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutProfileInput[];
    deleteMany?: Prisma.TrainingCreditLedgerScalarWhereInput | Prisma.TrainingCreditLedgerScalarWhereInput[];
};
export type TrainingCreditLedgerCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput> | Prisma.TrainingCreditLedgerCreateWithoutParticipantInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyParticipantInputEnvelope;
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
};
export type TrainingCreditLedgerUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput> | Prisma.TrainingCreditLedgerCreateWithoutParticipantInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyParticipantInputEnvelope;
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
};
export type TrainingCreditLedgerUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput> | Prisma.TrainingCreditLedgerCreateWithoutParticipantInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutParticipantInput | Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyParticipantInputEnvelope;
    set?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    delete?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    update?: Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutParticipantInput | Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutParticipantInput | Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.TrainingCreditLedgerScalarWhereInput | Prisma.TrainingCreditLedgerScalarWhereInput[];
};
export type TrainingCreditLedgerUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput> | Prisma.TrainingCreditLedgerCreateWithoutParticipantInput[] | Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput[];
    connectOrCreate?: Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput | Prisma.TrainingCreditLedgerCreateOrConnectWithoutParticipantInput[];
    upsert?: Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutParticipantInput | Prisma.TrainingCreditLedgerUpsertWithWhereUniqueWithoutParticipantInput[];
    createMany?: Prisma.TrainingCreditLedgerCreateManyParticipantInputEnvelope;
    set?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    disconnect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    delete?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    connect?: Prisma.TrainingCreditLedgerWhereUniqueInput | Prisma.TrainingCreditLedgerWhereUniqueInput[];
    update?: Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutParticipantInput | Prisma.TrainingCreditLedgerUpdateWithWhereUniqueWithoutParticipantInput[];
    updateMany?: Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutParticipantInput | Prisma.TrainingCreditLedgerUpdateManyWithWhereWithoutParticipantInput[];
    deleteMany?: Prisma.TrainingCreditLedgerScalarWhereInput | Prisma.TrainingCreditLedgerScalarWhereInput[];
};
export type TrainingCreditLedgerCreateWithoutProfileInput = {
    id?: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
    participant: Prisma.ReservationParticipantCreateNestedOneWithoutCreditLedgerInput;
};
export type TrainingCreditLedgerUncheckedCreateWithoutProfileInput = {
    id?: string;
    participantId: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
};
export type TrainingCreditLedgerCreateOrConnectWithoutProfileInput = {
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput>;
};
export type TrainingCreditLedgerCreateManyProfileInputEnvelope = {
    data: Prisma.TrainingCreditLedgerCreateManyProfileInput | Prisma.TrainingCreditLedgerCreateManyProfileInput[];
    skipDuplicates?: boolean;
};
export type TrainingCreditLedgerUpsertWithWhereUniqueWithoutProfileInput = {
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutProfileInput>;
};
export type TrainingCreditLedgerUpdateWithWhereUniqueWithoutProfileInput = {
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateWithoutProfileInput, Prisma.TrainingCreditLedgerUncheckedUpdateWithoutProfileInput>;
};
export type TrainingCreditLedgerUpdateManyWithWhereWithoutProfileInput = {
    where: Prisma.TrainingCreditLedgerScalarWhereInput;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateManyMutationInput, Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileInput>;
};
export type TrainingCreditLedgerScalarWhereInput = {
    AND?: Prisma.TrainingCreditLedgerScalarWhereInput | Prisma.TrainingCreditLedgerScalarWhereInput[];
    OR?: Prisma.TrainingCreditLedgerScalarWhereInput[];
    NOT?: Prisma.TrainingCreditLedgerScalarWhereInput | Prisma.TrainingCreditLedgerScalarWhereInput[];
    id?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    profileId?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    participantId?: Prisma.UuidFilter<"TrainingCreditLedger"> | string;
    minutes?: Prisma.IntFilter<"TrainingCreditLedger"> | number;
    reason?: Prisma.StringFilter<"TrainingCreditLedger"> | string;
    createdAt?: Prisma.DateTimeFilter<"TrainingCreditLedger"> | Date | string;
};
export type TrainingCreditLedgerCreateWithoutParticipantInput = {
    id?: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutTrainingCreditLedgerInput;
};
export type TrainingCreditLedgerUncheckedCreateWithoutParticipantInput = {
    id?: string;
    profileId: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
};
export type TrainingCreditLedgerCreateOrConnectWithoutParticipantInput = {
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput>;
};
export type TrainingCreditLedgerCreateManyParticipantInputEnvelope = {
    data: Prisma.TrainingCreditLedgerCreateManyParticipantInput | Prisma.TrainingCreditLedgerCreateManyParticipantInput[];
    skipDuplicates?: boolean;
};
export type TrainingCreditLedgerUpsertWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    update: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedUpdateWithoutParticipantInput>;
    create: Prisma.XOR<Prisma.TrainingCreditLedgerCreateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedCreateWithoutParticipantInput>;
};
export type TrainingCreditLedgerUpdateWithWhereUniqueWithoutParticipantInput = {
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateWithoutParticipantInput, Prisma.TrainingCreditLedgerUncheckedUpdateWithoutParticipantInput>;
};
export type TrainingCreditLedgerUpdateManyWithWhereWithoutParticipantInput = {
    where: Prisma.TrainingCreditLedgerScalarWhereInput;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateManyMutationInput, Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutParticipantInput>;
};
export type TrainingCreditLedgerCreateManyProfileInput = {
    id?: string;
    participantId: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
};
export type TrainingCreditLedgerUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participant?: Prisma.ReservationParticipantUpdateOneRequiredWithoutCreditLedgerNestedInput;
};
export type TrainingCreditLedgerUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerUncheckedUpdateManyWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    participantId?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerCreateManyParticipantInput = {
    id?: string;
    profileId: string;
    minutes: number;
    reason: string;
    createdAt?: Date | string;
};
export type TrainingCreditLedgerUpdateWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutTrainingCreditLedgerNestedInput;
};
export type TrainingCreditLedgerUncheckedUpdateWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerUncheckedUpdateManyWithoutParticipantInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    minutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditLedgerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    participantId?: boolean;
    minutes?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.ReservationParticipantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingCreditLedger"]>;
export type TrainingCreditLedgerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    participantId?: boolean;
    minutes?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.ReservationParticipantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingCreditLedger"]>;
export type TrainingCreditLedgerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    participantId?: boolean;
    minutes?: boolean;
    reason?: boolean;
    createdAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.ReservationParticipantDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingCreditLedger"]>;
export type TrainingCreditLedgerSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    participantId?: boolean;
    minutes?: boolean;
    reason?: boolean;
    createdAt?: boolean;
};
export type TrainingCreditLedgerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "participantId" | "minutes" | "reason" | "createdAt", ExtArgs["result"]["trainingCreditLedger"]>;
export type TrainingCreditLedgerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.ReservationParticipantDefaultArgs<ExtArgs>;
};
export type TrainingCreditLedgerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.ReservationParticipantDefaultArgs<ExtArgs>;
};
export type TrainingCreditLedgerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participant?: boolean | Prisma.ReservationParticipantDefaultArgs<ExtArgs>;
};
export type $TrainingCreditLedgerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TrainingCreditLedger";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
        participant: Prisma.$ReservationParticipantPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        participantId: string;
        minutes: number;
        reason: string;
        createdAt: Date;
    }, ExtArgs["result"]["trainingCreditLedger"]>;
    composites: {};
};
export type TrainingCreditLedgerGetPayload<S extends boolean | null | undefined | TrainingCreditLedgerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload, S>;
export type TrainingCreditLedgerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrainingCreditLedgerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainingCreditLedgerCountAggregateInputType | true;
};
export interface TrainingCreditLedgerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TrainingCreditLedger'];
        meta: {
            name: 'TrainingCreditLedger';
        };
    };
    findUnique<T extends TrainingCreditLedgerFindUniqueArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TrainingCreditLedgerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TrainingCreditLedgerFindFirstArgs>(args?: Prisma.SelectSubset<T, TrainingCreditLedgerFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TrainingCreditLedgerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrainingCreditLedgerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TrainingCreditLedgerFindManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreditLedgerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TrainingCreditLedgerCreateArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerCreateArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TrainingCreditLedgerCreateManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreditLedgerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TrainingCreditLedgerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TrainingCreditLedgerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TrainingCreditLedgerDeleteArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerDeleteArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TrainingCreditLedgerUpdateArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerUpdateArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TrainingCreditLedgerDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreditLedgerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TrainingCreditLedgerUpdateManyArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TrainingCreditLedgerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TrainingCreditLedgerUpsertArgs>(args: Prisma.SelectSubset<T, TrainingCreditLedgerUpsertArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditLedgerClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TrainingCreditLedgerCountArgs>(args?: Prisma.Subset<T, TrainingCreditLedgerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainingCreditLedgerCountAggregateOutputType> : number>;
    aggregate<T extends TrainingCreditLedgerAggregateArgs>(args: Prisma.Subset<T, TrainingCreditLedgerAggregateArgs>): Prisma.PrismaPromise<GetTrainingCreditLedgerAggregateType<T>>;
    groupBy<T extends TrainingCreditLedgerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrainingCreditLedgerGroupByArgs['orderBy'];
    } : {
        orderBy?: TrainingCreditLedgerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrainingCreditLedgerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingCreditLedgerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TrainingCreditLedgerFieldRefs;
}
export interface Prisma__TrainingCreditLedgerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participant<T extends Prisma.ReservationParticipantDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservationParticipantDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservationParticipantClient<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TrainingCreditLedgerFieldRefs {
    readonly id: Prisma.FieldRef<"TrainingCreditLedger", 'String'>;
    readonly profileId: Prisma.FieldRef<"TrainingCreditLedger", 'String'>;
    readonly participantId: Prisma.FieldRef<"TrainingCreditLedger", 'String'>;
    readonly minutes: Prisma.FieldRef<"TrainingCreditLedger", 'Int'>;
    readonly reason: Prisma.FieldRef<"TrainingCreditLedger", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TrainingCreditLedger", 'DateTime'>;
}
export type TrainingCreditLedgerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
};
export type TrainingCreditLedgerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
};
export type TrainingCreditLedgerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrainingCreditLedgerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrainingCreditLedgerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type TrainingCreditLedgerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerCreateInput, Prisma.TrainingCreditLedgerUncheckedCreateInput>;
};
export type TrainingCreditLedgerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TrainingCreditLedgerCreateManyInput | Prisma.TrainingCreditLedgerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrainingCreditLedgerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    data: Prisma.TrainingCreditLedgerCreateManyInput | Prisma.TrainingCreditLedgerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TrainingCreditLedgerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TrainingCreditLedgerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateInput, Prisma.TrainingCreditLedgerUncheckedUpdateInput>;
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
};
export type TrainingCreditLedgerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateManyMutationInput, Prisma.TrainingCreditLedgerUncheckedUpdateManyInput>;
    where?: Prisma.TrainingCreditLedgerWhereInput;
    limit?: number;
};
export type TrainingCreditLedgerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateManyMutationInput, Prisma.TrainingCreditLedgerUncheckedUpdateManyInput>;
    where?: Prisma.TrainingCreditLedgerWhereInput;
    limit?: number;
    include?: Prisma.TrainingCreditLedgerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TrainingCreditLedgerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreditLedgerCreateInput, Prisma.TrainingCreditLedgerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TrainingCreditLedgerUpdateInput, Prisma.TrainingCreditLedgerUncheckedUpdateInput>;
};
export type TrainingCreditLedgerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditLedgerWhereUniqueInput;
};
export type TrainingCreditLedgerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditLedgerWhereInput;
    limit?: number;
};
export type TrainingCreditLedgerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditLedgerSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditLedgerOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditLedgerInclude<ExtArgs> | null;
};
