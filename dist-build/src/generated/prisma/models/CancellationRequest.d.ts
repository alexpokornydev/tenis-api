import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type CancellationRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$CancellationRequestPayload>;
export type AggregateCancellationRequest = {
    _count: CancellationRequestCountAggregateOutputType | null;
    _min: CancellationRequestMinAggregateOutputType | null;
    _max: CancellationRequestMaxAggregateOutputType | null;
};
export type CancellationRequestMinAggregateOutputType = {
    id: string | null;
    reservationId: string | null;
    requesterId: string | null;
    reason: string | null;
    status: $Enums.CancellationRequestStatus | null;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    reviewNote: string | null;
    createdAt: Date | null;
};
export type CancellationRequestMaxAggregateOutputType = {
    id: string | null;
    reservationId: string | null;
    requesterId: string | null;
    reason: string | null;
    status: $Enums.CancellationRequestStatus | null;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    reviewNote: string | null;
    createdAt: Date | null;
};
export type CancellationRequestCountAggregateOutputType = {
    id: number;
    reservationId: number;
    requesterId: number;
    reason: number;
    status: number;
    reviewedBy: number;
    reviewedAt: number;
    reviewNote: number;
    createdAt: number;
    _all: number;
};
export type CancellationRequestMinAggregateInputType = {
    id?: true;
    reservationId?: true;
    requesterId?: true;
    reason?: true;
    status?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    reviewNote?: true;
    createdAt?: true;
};
export type CancellationRequestMaxAggregateInputType = {
    id?: true;
    reservationId?: true;
    requesterId?: true;
    reason?: true;
    status?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    reviewNote?: true;
    createdAt?: true;
};
export type CancellationRequestCountAggregateInputType = {
    id?: true;
    reservationId?: true;
    requesterId?: true;
    reason?: true;
    status?: true;
    reviewedBy?: true;
    reviewedAt?: true;
    reviewNote?: true;
    createdAt?: true;
    _all?: true;
};
export type CancellationRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CancellationRequestWhereInput;
    orderBy?: Prisma.CancellationRequestOrderByWithRelationInput | Prisma.CancellationRequestOrderByWithRelationInput[];
    cursor?: Prisma.CancellationRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CancellationRequestCountAggregateInputType;
    _min?: CancellationRequestMinAggregateInputType;
    _max?: CancellationRequestMaxAggregateInputType;
};
export type GetCancellationRequestAggregateType<T extends CancellationRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateCancellationRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCancellationRequest[P]> : Prisma.GetScalarType<T[P], AggregateCancellationRequest[P]>;
};
export type CancellationRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CancellationRequestWhereInput;
    orderBy?: Prisma.CancellationRequestOrderByWithAggregationInput | Prisma.CancellationRequestOrderByWithAggregationInput[];
    by: Prisma.CancellationRequestScalarFieldEnum[] | Prisma.CancellationRequestScalarFieldEnum;
    having?: Prisma.CancellationRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CancellationRequestCountAggregateInputType | true;
    _min?: CancellationRequestMinAggregateInputType;
    _max?: CancellationRequestMaxAggregateInputType;
};
export type CancellationRequestGroupByOutputType = {
    id: string;
    reservationId: string;
    requesterId: string;
    reason: string | null;
    status: $Enums.CancellationRequestStatus;
    reviewedBy: string | null;
    reviewedAt: Date | null;
    reviewNote: string | null;
    createdAt: Date;
    _count: CancellationRequestCountAggregateOutputType | null;
    _min: CancellationRequestMinAggregateOutputType | null;
    _max: CancellationRequestMaxAggregateOutputType | null;
};
export type GetCancellationRequestGroupByPayload<T extends CancellationRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CancellationRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CancellationRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CancellationRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CancellationRequestGroupByOutputType[P]>;
}>>;
export type CancellationRequestWhereInput = {
    AND?: Prisma.CancellationRequestWhereInput | Prisma.CancellationRequestWhereInput[];
    OR?: Prisma.CancellationRequestWhereInput[];
    NOT?: Prisma.CancellationRequestWhereInput | Prisma.CancellationRequestWhereInput[];
    id?: Prisma.UuidFilter<"CancellationRequest"> | string;
    reservationId?: Prisma.UuidFilter<"CancellationRequest"> | string;
    requesterId?: Prisma.UuidFilter<"CancellationRequest"> | string;
    reason?: Prisma.StringNullableFilter<"CancellationRequest"> | string | null;
    status?: Prisma.EnumCancellationRequestStatusFilter<"CancellationRequest"> | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.UuidNullableFilter<"CancellationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"CancellationRequest"> | Date | string | null;
    reviewNote?: Prisma.StringNullableFilter<"CancellationRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CancellationRequest"> | Date | string;
    reservation?: Prisma.XOR<Prisma.ReservationScalarRelationFilter, Prisma.ReservationWhereInput>;
    requester?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type CancellationRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reservation?: Prisma.ReservationOrderByWithRelationInput;
    requester?: Prisma.ProfileOrderByWithRelationInput;
};
export type CancellationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.CancellationRequestWhereInput | Prisma.CancellationRequestWhereInput[];
    OR?: Prisma.CancellationRequestWhereInput[];
    NOT?: Prisma.CancellationRequestWhereInput | Prisma.CancellationRequestWhereInput[];
    reservationId?: Prisma.UuidFilter<"CancellationRequest"> | string;
    requesterId?: Prisma.UuidFilter<"CancellationRequest"> | string;
    reason?: Prisma.StringNullableFilter<"CancellationRequest"> | string | null;
    status?: Prisma.EnumCancellationRequestStatusFilter<"CancellationRequest"> | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.UuidNullableFilter<"CancellationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"CancellationRequest"> | Date | string | null;
    reviewNote?: Prisma.StringNullableFilter<"CancellationRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CancellationRequest"> | Date | string;
    reservation?: Prisma.XOR<Prisma.ReservationScalarRelationFilter, Prisma.ReservationWhereInput>;
    requester?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id">;
export type CancellationRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CancellationRequestCountOrderByAggregateInput;
    _max?: Prisma.CancellationRequestMaxOrderByAggregateInput;
    _min?: Prisma.CancellationRequestMinOrderByAggregateInput;
};
export type CancellationRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.CancellationRequestScalarWhereWithAggregatesInput | Prisma.CancellationRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.CancellationRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CancellationRequestScalarWhereWithAggregatesInput | Prisma.CancellationRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"CancellationRequest"> | string;
    reservationId?: Prisma.UuidWithAggregatesFilter<"CancellationRequest"> | string;
    requesterId?: Prisma.UuidWithAggregatesFilter<"CancellationRequest"> | string;
    reason?: Prisma.StringNullableWithAggregatesFilter<"CancellationRequest"> | string | null;
    status?: Prisma.EnumCancellationRequestStatusWithAggregatesFilter<"CancellationRequest"> | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.UuidNullableWithAggregatesFilter<"CancellationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"CancellationRequest"> | Date | string | null;
    reviewNote?: Prisma.StringNullableWithAggregatesFilter<"CancellationRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"CancellationRequest"> | Date | string;
};
export type CancellationRequestCreateInput = {
    id?: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
    reservation: Prisma.ReservationCreateNestedOneWithoutCancellationRequestsInput;
    requester: Prisma.ProfileCreateNestedOneWithoutCancellationRequestsInput;
};
export type CancellationRequestUncheckedCreateInput = {
    id?: string;
    reservationId: string;
    requesterId: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
};
export type CancellationRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: Prisma.ReservationUpdateOneRequiredWithoutCancellationRequestsNestedInput;
    requester?: Prisma.ProfileUpdateOneRequiredWithoutCancellationRequestsNestedInput;
};
export type CancellationRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestCreateManyInput = {
    id?: string;
    reservationId: string;
    requesterId: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
};
export type CancellationRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestListRelationFilter = {
    every?: Prisma.CancellationRequestWhereInput;
    some?: Prisma.CancellationRequestWhereInput;
    none?: Prisma.CancellationRequestWhereInput;
};
export type CancellationRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CancellationRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CancellationRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CancellationRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    reservationId?: Prisma.SortOrder;
    requesterId?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reviewNote?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CancellationRequestCreateNestedManyWithoutRequesterInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutRequesterInput, Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput> | Prisma.CancellationRequestCreateWithoutRequesterInput[] | Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput | Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput[];
    createMany?: Prisma.CancellationRequestCreateManyRequesterInputEnvelope;
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
};
export type CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutRequesterInput, Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput> | Prisma.CancellationRequestCreateWithoutRequesterInput[] | Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput | Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput[];
    createMany?: Prisma.CancellationRequestCreateManyRequesterInputEnvelope;
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
};
export type CancellationRequestUpdateManyWithoutRequesterNestedInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutRequesterInput, Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput> | Prisma.CancellationRequestCreateWithoutRequesterInput[] | Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput | Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput[];
    upsert?: Prisma.CancellationRequestUpsertWithWhereUniqueWithoutRequesterInput | Prisma.CancellationRequestUpsertWithWhereUniqueWithoutRequesterInput[];
    createMany?: Prisma.CancellationRequestCreateManyRequesterInputEnvelope;
    set?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    disconnect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    delete?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    update?: Prisma.CancellationRequestUpdateWithWhereUniqueWithoutRequesterInput | Prisma.CancellationRequestUpdateWithWhereUniqueWithoutRequesterInput[];
    updateMany?: Prisma.CancellationRequestUpdateManyWithWhereWithoutRequesterInput | Prisma.CancellationRequestUpdateManyWithWhereWithoutRequesterInput[];
    deleteMany?: Prisma.CancellationRequestScalarWhereInput | Prisma.CancellationRequestScalarWhereInput[];
};
export type CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutRequesterInput, Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput> | Prisma.CancellationRequestCreateWithoutRequesterInput[] | Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput | Prisma.CancellationRequestCreateOrConnectWithoutRequesterInput[];
    upsert?: Prisma.CancellationRequestUpsertWithWhereUniqueWithoutRequesterInput | Prisma.CancellationRequestUpsertWithWhereUniqueWithoutRequesterInput[];
    createMany?: Prisma.CancellationRequestCreateManyRequesterInputEnvelope;
    set?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    disconnect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    delete?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    update?: Prisma.CancellationRequestUpdateWithWhereUniqueWithoutRequesterInput | Prisma.CancellationRequestUpdateWithWhereUniqueWithoutRequesterInput[];
    updateMany?: Prisma.CancellationRequestUpdateManyWithWhereWithoutRequesterInput | Prisma.CancellationRequestUpdateManyWithWhereWithoutRequesterInput[];
    deleteMany?: Prisma.CancellationRequestScalarWhereInput | Prisma.CancellationRequestScalarWhereInput[];
};
export type CancellationRequestCreateNestedManyWithoutReservationInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutReservationInput, Prisma.CancellationRequestUncheckedCreateWithoutReservationInput> | Prisma.CancellationRequestCreateWithoutReservationInput[] | Prisma.CancellationRequestUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutReservationInput | Prisma.CancellationRequestCreateOrConnectWithoutReservationInput[];
    createMany?: Prisma.CancellationRequestCreateManyReservationInputEnvelope;
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
};
export type CancellationRequestUncheckedCreateNestedManyWithoutReservationInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutReservationInput, Prisma.CancellationRequestUncheckedCreateWithoutReservationInput> | Prisma.CancellationRequestCreateWithoutReservationInput[] | Prisma.CancellationRequestUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutReservationInput | Prisma.CancellationRequestCreateOrConnectWithoutReservationInput[];
    createMany?: Prisma.CancellationRequestCreateManyReservationInputEnvelope;
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
};
export type CancellationRequestUpdateManyWithoutReservationNestedInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutReservationInput, Prisma.CancellationRequestUncheckedCreateWithoutReservationInput> | Prisma.CancellationRequestCreateWithoutReservationInput[] | Prisma.CancellationRequestUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutReservationInput | Prisma.CancellationRequestCreateOrConnectWithoutReservationInput[];
    upsert?: Prisma.CancellationRequestUpsertWithWhereUniqueWithoutReservationInput | Prisma.CancellationRequestUpsertWithWhereUniqueWithoutReservationInput[];
    createMany?: Prisma.CancellationRequestCreateManyReservationInputEnvelope;
    set?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    disconnect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    delete?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    update?: Prisma.CancellationRequestUpdateWithWhereUniqueWithoutReservationInput | Prisma.CancellationRequestUpdateWithWhereUniqueWithoutReservationInput[];
    updateMany?: Prisma.CancellationRequestUpdateManyWithWhereWithoutReservationInput | Prisma.CancellationRequestUpdateManyWithWhereWithoutReservationInput[];
    deleteMany?: Prisma.CancellationRequestScalarWhereInput | Prisma.CancellationRequestScalarWhereInput[];
};
export type CancellationRequestUncheckedUpdateManyWithoutReservationNestedInput = {
    create?: Prisma.XOR<Prisma.CancellationRequestCreateWithoutReservationInput, Prisma.CancellationRequestUncheckedCreateWithoutReservationInput> | Prisma.CancellationRequestCreateWithoutReservationInput[] | Prisma.CancellationRequestUncheckedCreateWithoutReservationInput[];
    connectOrCreate?: Prisma.CancellationRequestCreateOrConnectWithoutReservationInput | Prisma.CancellationRequestCreateOrConnectWithoutReservationInput[];
    upsert?: Prisma.CancellationRequestUpsertWithWhereUniqueWithoutReservationInput | Prisma.CancellationRequestUpsertWithWhereUniqueWithoutReservationInput[];
    createMany?: Prisma.CancellationRequestCreateManyReservationInputEnvelope;
    set?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    disconnect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    delete?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    connect?: Prisma.CancellationRequestWhereUniqueInput | Prisma.CancellationRequestWhereUniqueInput[];
    update?: Prisma.CancellationRequestUpdateWithWhereUniqueWithoutReservationInput | Prisma.CancellationRequestUpdateWithWhereUniqueWithoutReservationInput[];
    updateMany?: Prisma.CancellationRequestUpdateManyWithWhereWithoutReservationInput | Prisma.CancellationRequestUpdateManyWithWhereWithoutReservationInput[];
    deleteMany?: Prisma.CancellationRequestScalarWhereInput | Prisma.CancellationRequestScalarWhereInput[];
};
export type EnumCancellationRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.CancellationRequestStatus;
};
export type CancellationRequestCreateWithoutRequesterInput = {
    id?: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
    reservation: Prisma.ReservationCreateNestedOneWithoutCancellationRequestsInput;
};
export type CancellationRequestUncheckedCreateWithoutRequesterInput = {
    id?: string;
    reservationId: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
};
export type CancellationRequestCreateOrConnectWithoutRequesterInput = {
    where: Prisma.CancellationRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CancellationRequestCreateWithoutRequesterInput, Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput>;
};
export type CancellationRequestCreateManyRequesterInputEnvelope = {
    data: Prisma.CancellationRequestCreateManyRequesterInput | Prisma.CancellationRequestCreateManyRequesterInput[];
    skipDuplicates?: boolean;
};
export type CancellationRequestUpsertWithWhereUniqueWithoutRequesterInput = {
    where: Prisma.CancellationRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CancellationRequestUpdateWithoutRequesterInput, Prisma.CancellationRequestUncheckedUpdateWithoutRequesterInput>;
    create: Prisma.XOR<Prisma.CancellationRequestCreateWithoutRequesterInput, Prisma.CancellationRequestUncheckedCreateWithoutRequesterInput>;
};
export type CancellationRequestUpdateWithWhereUniqueWithoutRequesterInput = {
    where: Prisma.CancellationRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CancellationRequestUpdateWithoutRequesterInput, Prisma.CancellationRequestUncheckedUpdateWithoutRequesterInput>;
};
export type CancellationRequestUpdateManyWithWhereWithoutRequesterInput = {
    where: Prisma.CancellationRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CancellationRequestUpdateManyMutationInput, Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterInput>;
};
export type CancellationRequestScalarWhereInput = {
    AND?: Prisma.CancellationRequestScalarWhereInput | Prisma.CancellationRequestScalarWhereInput[];
    OR?: Prisma.CancellationRequestScalarWhereInput[];
    NOT?: Prisma.CancellationRequestScalarWhereInput | Prisma.CancellationRequestScalarWhereInput[];
    id?: Prisma.UuidFilter<"CancellationRequest"> | string;
    reservationId?: Prisma.UuidFilter<"CancellationRequest"> | string;
    requesterId?: Prisma.UuidFilter<"CancellationRequest"> | string;
    reason?: Prisma.StringNullableFilter<"CancellationRequest"> | string | null;
    status?: Prisma.EnumCancellationRequestStatusFilter<"CancellationRequest"> | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.UuidNullableFilter<"CancellationRequest"> | string | null;
    reviewedAt?: Prisma.DateTimeNullableFilter<"CancellationRequest"> | Date | string | null;
    reviewNote?: Prisma.StringNullableFilter<"CancellationRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"CancellationRequest"> | Date | string;
};
export type CancellationRequestCreateWithoutReservationInput = {
    id?: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
    requester: Prisma.ProfileCreateNestedOneWithoutCancellationRequestsInput;
};
export type CancellationRequestUncheckedCreateWithoutReservationInput = {
    id?: string;
    requesterId: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
};
export type CancellationRequestCreateOrConnectWithoutReservationInput = {
    where: Prisma.CancellationRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CancellationRequestCreateWithoutReservationInput, Prisma.CancellationRequestUncheckedCreateWithoutReservationInput>;
};
export type CancellationRequestCreateManyReservationInputEnvelope = {
    data: Prisma.CancellationRequestCreateManyReservationInput | Prisma.CancellationRequestCreateManyReservationInput[];
    skipDuplicates?: boolean;
};
export type CancellationRequestUpsertWithWhereUniqueWithoutReservationInput = {
    where: Prisma.CancellationRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.CancellationRequestUpdateWithoutReservationInput, Prisma.CancellationRequestUncheckedUpdateWithoutReservationInput>;
    create: Prisma.XOR<Prisma.CancellationRequestCreateWithoutReservationInput, Prisma.CancellationRequestUncheckedCreateWithoutReservationInput>;
};
export type CancellationRequestUpdateWithWhereUniqueWithoutReservationInput = {
    where: Prisma.CancellationRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.CancellationRequestUpdateWithoutReservationInput, Prisma.CancellationRequestUncheckedUpdateWithoutReservationInput>;
};
export type CancellationRequestUpdateManyWithWhereWithoutReservationInput = {
    where: Prisma.CancellationRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.CancellationRequestUpdateManyMutationInput, Prisma.CancellationRequestUncheckedUpdateManyWithoutReservationInput>;
};
export type CancellationRequestCreateManyRequesterInput = {
    id?: string;
    reservationId: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
};
export type CancellationRequestUpdateWithoutRequesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservation?: Prisma.ReservationUpdateOneRequiredWithoutCancellationRequestsNestedInput;
};
export type CancellationRequestUncheckedUpdateWithoutRequesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestUncheckedUpdateManyWithoutRequesterInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reservationId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestCreateManyReservationInput = {
    id?: string;
    requesterId: string;
    reason?: string | null;
    status?: $Enums.CancellationRequestStatus;
    reviewedBy?: string | null;
    reviewedAt?: Date | string | null;
    reviewNote?: string | null;
    createdAt?: Date | string;
};
export type CancellationRequestUpdateWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    requester?: Prisma.ProfileUpdateOneRequiredWithoutCancellationRequestsNestedInput;
};
export type CancellationRequestUncheckedUpdateWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestUncheckedUpdateManyWithoutReservationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requesterId?: Prisma.StringFieldUpdateOperationsInput | string;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumCancellationRequestStatusFieldUpdateOperationsInput | $Enums.CancellationRequestStatus;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CancellationRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    requesterId?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    reviewNote?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    requester?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cancellationRequest"]>;
export type CancellationRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    requesterId?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    reviewNote?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    requester?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cancellationRequest"]>;
export type CancellationRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    reservationId?: boolean;
    requesterId?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    reviewNote?: boolean;
    createdAt?: boolean;
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    requester?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["cancellationRequest"]>;
export type CancellationRequestSelectScalar = {
    id?: boolean;
    reservationId?: boolean;
    requesterId?: boolean;
    reason?: boolean;
    status?: boolean;
    reviewedBy?: boolean;
    reviewedAt?: boolean;
    reviewNote?: boolean;
    createdAt?: boolean;
};
export type CancellationRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "reservationId" | "requesterId" | "reason" | "status" | "reviewedBy" | "reviewedAt" | "reviewNote" | "createdAt", ExtArgs["result"]["cancellationRequest"]>;
export type CancellationRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    requester?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type CancellationRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    requester?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type CancellationRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservation?: boolean | Prisma.ReservationDefaultArgs<ExtArgs>;
    requester?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $CancellationRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "CancellationRequest";
    objects: {
        reservation: Prisma.$ReservationPayload<ExtArgs>;
        requester: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        reservationId: string;
        requesterId: string;
        reason: string | null;
        status: $Enums.CancellationRequestStatus;
        reviewedBy: string | null;
        reviewedAt: Date | null;
        reviewNote: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["cancellationRequest"]>;
    composites: {};
};
export type CancellationRequestGetPayload<S extends boolean | null | undefined | CancellationRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload, S>;
export type CancellationRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CancellationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CancellationRequestCountAggregateInputType | true;
};
export interface CancellationRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['CancellationRequest'];
        meta: {
            name: 'CancellationRequest';
        };
    };
    findUnique<T extends CancellationRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, CancellationRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CancellationRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CancellationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CancellationRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, CancellationRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CancellationRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CancellationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CancellationRequestFindManyArgs>(args?: Prisma.SelectSubset<T, CancellationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CancellationRequestCreateArgs>(args: Prisma.SelectSubset<T, CancellationRequestCreateArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CancellationRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, CancellationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CancellationRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CancellationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CancellationRequestDeleteArgs>(args: Prisma.SelectSubset<T, CancellationRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CancellationRequestUpdateArgs>(args: Prisma.SelectSubset<T, CancellationRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CancellationRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, CancellationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CancellationRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, CancellationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CancellationRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CancellationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CancellationRequestUpsertArgs>(args: Prisma.SelectSubset<T, CancellationRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__CancellationRequestClient<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CancellationRequestCountArgs>(args?: Prisma.Subset<T, CancellationRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CancellationRequestCountAggregateOutputType> : number>;
    aggregate<T extends CancellationRequestAggregateArgs>(args: Prisma.Subset<T, CancellationRequestAggregateArgs>): Prisma.PrismaPromise<GetCancellationRequestAggregateType<T>>;
    groupBy<T extends CancellationRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CancellationRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: CancellationRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CancellationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCancellationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CancellationRequestFieldRefs;
}
export interface Prisma__CancellationRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    reservation<T extends Prisma.ReservationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ReservationDefaultArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requester<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CancellationRequestFieldRefs {
    readonly id: Prisma.FieldRef<"CancellationRequest", 'String'>;
    readonly reservationId: Prisma.FieldRef<"CancellationRequest", 'String'>;
    readonly requesterId: Prisma.FieldRef<"CancellationRequest", 'String'>;
    readonly reason: Prisma.FieldRef<"CancellationRequest", 'String'>;
    readonly status: Prisma.FieldRef<"CancellationRequest", 'CancellationRequestStatus'>;
    readonly reviewedBy: Prisma.FieldRef<"CancellationRequest", 'String'>;
    readonly reviewedAt: Prisma.FieldRef<"CancellationRequest", 'DateTime'>;
    readonly reviewNote: Prisma.FieldRef<"CancellationRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"CancellationRequest", 'DateTime'>;
}
export type CancellationRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where: Prisma.CancellationRequestWhereUniqueInput;
};
export type CancellationRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where: Prisma.CancellationRequestWhereUniqueInput;
};
export type CancellationRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where?: Prisma.CancellationRequestWhereInput;
    orderBy?: Prisma.CancellationRequestOrderByWithRelationInput | Prisma.CancellationRequestOrderByWithRelationInput[];
    cursor?: Prisma.CancellationRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CancellationRequestScalarFieldEnum | Prisma.CancellationRequestScalarFieldEnum[];
};
export type CancellationRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where?: Prisma.CancellationRequestWhereInput;
    orderBy?: Prisma.CancellationRequestOrderByWithRelationInput | Prisma.CancellationRequestOrderByWithRelationInput[];
    cursor?: Prisma.CancellationRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CancellationRequestScalarFieldEnum | Prisma.CancellationRequestScalarFieldEnum[];
};
export type CancellationRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where?: Prisma.CancellationRequestWhereInput;
    orderBy?: Prisma.CancellationRequestOrderByWithRelationInput | Prisma.CancellationRequestOrderByWithRelationInput[];
    cursor?: Prisma.CancellationRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CancellationRequestScalarFieldEnum | Prisma.CancellationRequestScalarFieldEnum[];
};
export type CancellationRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CancellationRequestCreateInput, Prisma.CancellationRequestUncheckedCreateInput>;
};
export type CancellationRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CancellationRequestCreateManyInput | Prisma.CancellationRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CancellationRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    data: Prisma.CancellationRequestCreateManyInput | Prisma.CancellationRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CancellationRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CancellationRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CancellationRequestUpdateInput, Prisma.CancellationRequestUncheckedUpdateInput>;
    where: Prisma.CancellationRequestWhereUniqueInput;
};
export type CancellationRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CancellationRequestUpdateManyMutationInput, Prisma.CancellationRequestUncheckedUpdateManyInput>;
    where?: Prisma.CancellationRequestWhereInput;
    limit?: number;
};
export type CancellationRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CancellationRequestUpdateManyMutationInput, Prisma.CancellationRequestUncheckedUpdateManyInput>;
    where?: Prisma.CancellationRequestWhereInput;
    limit?: number;
    include?: Prisma.CancellationRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CancellationRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where: Prisma.CancellationRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.CancellationRequestCreateInput, Prisma.CancellationRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CancellationRequestUpdateInput, Prisma.CancellationRequestUncheckedUpdateInput>;
};
export type CancellationRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
    where: Prisma.CancellationRequestWhereUniqueInput;
};
export type CancellationRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CancellationRequestWhereInput;
    limit?: number;
};
export type CancellationRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CancellationRequestSelect<ExtArgs> | null;
    omit?: Prisma.CancellationRequestOmit<ExtArgs> | null;
    include?: Prisma.CancellationRequestInclude<ExtArgs> | null;
};
