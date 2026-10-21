import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ReservationModel = runtime.Types.Result.DefaultSelection<Prisma.$ReservationPayload>;
export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null;
    _avg: ReservationAvgAggregateOutputType | null;
    _sum: ReservationSumAggregateOutputType | null;
    _min: ReservationMinAggregateOutputType | null;
    _max: ReservationMaxAggregateOutputType | null;
};
export type ReservationAvgAggregateOutputType = {
    priceCents: number | null;
    capacity: number | null;
};
export type ReservationSumAggregateOutputType = {
    priceCents: number | null;
    capacity: number | null;
};
export type ReservationMinAggregateOutputType = {
    id: string | null;
    trainerId: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    status: $Enums.ReservationStatus | null;
    paymentMethod: $Enums.PaymentMethod | null;
    priceCents: number | null;
    capacity: number | null;
    notes: string | null;
    cancelledAt: Date | null;
    cancelledBy: string | null;
    createdBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReservationMaxAggregateOutputType = {
    id: string | null;
    trainerId: string | null;
    startsAt: Date | null;
    endsAt: Date | null;
    status: $Enums.ReservationStatus | null;
    paymentMethod: $Enums.PaymentMethod | null;
    priceCents: number | null;
    capacity: number | null;
    notes: string | null;
    cancelledAt: Date | null;
    cancelledBy: string | null;
    createdBy: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ReservationCountAggregateOutputType = {
    id: number;
    trainerId: number;
    startsAt: number;
    endsAt: number;
    status: number;
    paymentMethod: number;
    priceCents: number;
    capacity: number;
    notes: number;
    cancelledAt: number;
    cancelledBy: number;
    createdBy: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ReservationAvgAggregateInputType = {
    priceCents?: true;
    capacity?: true;
};
export type ReservationSumAggregateInputType = {
    priceCents?: true;
    capacity?: true;
};
export type ReservationMinAggregateInputType = {
    id?: true;
    trainerId?: true;
    startsAt?: true;
    endsAt?: true;
    status?: true;
    paymentMethod?: true;
    priceCents?: true;
    capacity?: true;
    notes?: true;
    cancelledAt?: true;
    cancelledBy?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReservationMaxAggregateInputType = {
    id?: true;
    trainerId?: true;
    startsAt?: true;
    endsAt?: true;
    status?: true;
    paymentMethod?: true;
    priceCents?: true;
    capacity?: true;
    notes?: true;
    cancelledAt?: true;
    cancelledBy?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ReservationCountAggregateInputType = {
    id?: true;
    trainerId?: true;
    startsAt?: true;
    endsAt?: true;
    status?: true;
    paymentMethod?: true;
    priceCents?: true;
    capacity?: true;
    notes?: true;
    cancelledAt?: true;
    cancelledBy?: true;
    createdBy?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ReservationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ReservationCountAggregateInputType;
    _avg?: ReservationAvgAggregateInputType;
    _sum?: ReservationSumAggregateInputType;
    _min?: ReservationMinAggregateInputType;
    _max?: ReservationMaxAggregateInputType;
};
export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
    [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateReservation[P]> : Prisma.GetScalarType<T[P], AggregateReservation[P]>;
};
export type ReservationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithAggregationInput | Prisma.ReservationOrderByWithAggregationInput[];
    by: Prisma.ReservationScalarFieldEnum[] | Prisma.ReservationScalarFieldEnum;
    having?: Prisma.ReservationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ReservationCountAggregateInputType | true;
    _avg?: ReservationAvgAggregateInputType;
    _sum?: ReservationSumAggregateInputType;
    _min?: ReservationMinAggregateInputType;
    _max?: ReservationMaxAggregateInputType;
};
export type ReservationGroupByOutputType = {
    id: string;
    trainerId: string | null;
    startsAt: Date;
    endsAt: Date;
    status: $Enums.ReservationStatus;
    paymentMethod: $Enums.PaymentMethod;
    priceCents: number;
    capacity: number;
    notes: string | null;
    cancelledAt: Date | null;
    cancelledBy: string | null;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ReservationCountAggregateOutputType | null;
    _avg: ReservationAvgAggregateOutputType | null;
    _sum: ReservationSumAggregateOutputType | null;
    _min: ReservationMinAggregateOutputType | null;
    _max: ReservationMaxAggregateOutputType | null;
};
export type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ReservationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ReservationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ReservationGroupByOutputType[P]>;
}>>;
export type ReservationWhereInput = {
    AND?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    OR?: Prisma.ReservationWhereInput[];
    NOT?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    id?: Prisma.UuidFilter<"Reservation"> | string;
    trainerId?: Prisma.UuidNullableFilter<"Reservation"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    status?: Prisma.EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Reservation"> | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFilter<"Reservation"> | number;
    capacity?: Prisma.IntFilter<"Reservation"> | number;
    notes?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Reservation"> | Date | string | null;
    cancelledBy?: Prisma.UuidNullableFilter<"Reservation"> | string | null;
    createdBy?: Prisma.UuidFilter<"Reservation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    trainer?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    creator?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    participants?: Prisma.ReservationParticipantListRelationFilter;
    cancellationRequests?: Prisma.CancellationRequestListRelationFilter;
};
export type ReservationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    trainerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    trainer?: Prisma.ProfileOrderByWithRelationInput;
    creator?: Prisma.ProfileOrderByWithRelationInput;
    participants?: Prisma.ReservationParticipantOrderByRelationAggregateInput;
    cancellationRequests?: Prisma.CancellationRequestOrderByRelationAggregateInput;
};
export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    OR?: Prisma.ReservationWhereInput[];
    NOT?: Prisma.ReservationWhereInput | Prisma.ReservationWhereInput[];
    trainerId?: Prisma.UuidNullableFilter<"Reservation"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    status?: Prisma.EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Reservation"> | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFilter<"Reservation"> | number;
    capacity?: Prisma.IntFilter<"Reservation"> | number;
    notes?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Reservation"> | Date | string | null;
    cancelledBy?: Prisma.UuidNullableFilter<"Reservation"> | string | null;
    createdBy?: Prisma.UuidFilter<"Reservation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    trainer?: Prisma.XOR<Prisma.ProfileNullableScalarRelationFilter, Prisma.ProfileWhereInput> | null;
    creator?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
    participants?: Prisma.ReservationParticipantListRelationFilter;
    cancellationRequests?: Prisma.CancellationRequestListRelationFilter;
}, "id">;
export type ReservationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    trainerId?: Prisma.SortOrderInput | Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    cancelledBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ReservationCountOrderByAggregateInput;
    _avg?: Prisma.ReservationAvgOrderByAggregateInput;
    _max?: Prisma.ReservationMaxOrderByAggregateInput;
    _min?: Prisma.ReservationMinOrderByAggregateInput;
    _sum?: Prisma.ReservationSumOrderByAggregateInput;
};
export type ReservationScalarWhereWithAggregatesInput = {
    AND?: Prisma.ReservationScalarWhereWithAggregatesInput | Prisma.ReservationScalarWhereWithAggregatesInput[];
    OR?: Prisma.ReservationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ReservationScalarWhereWithAggregatesInput | Prisma.ReservationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Reservation"> | string;
    trainerId?: Prisma.UuidNullableWithAggregatesFilter<"Reservation"> | string | null;
    startsAt?: Prisma.DateTimeWithAggregatesFilter<"Reservation"> | Date | string;
    endsAt?: Prisma.DateTimeWithAggregatesFilter<"Reservation"> | Date | string;
    status?: Prisma.EnumReservationStatusWithAggregatesFilter<"Reservation"> | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodWithAggregatesFilter<"Reservation"> | $Enums.PaymentMethod;
    priceCents?: Prisma.IntWithAggregatesFilter<"Reservation"> | number;
    capacity?: Prisma.IntWithAggregatesFilter<"Reservation"> | number;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Reservation"> | string | null;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Reservation"> | Date | string | null;
    cancelledBy?: Prisma.UuidNullableWithAggregatesFilter<"Reservation"> | string | null;
    createdBy?: Prisma.UuidWithAggregatesFilter<"Reservation"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Reservation"> | Date | string;
};
export type ReservationCreateInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainer?: Prisma.ProfileCreateNestedOneWithoutReservationsAsTrainerInput;
    creator: Prisma.ProfileCreateNestedOneWithoutReservationsCreatedInput;
    participants?: Prisma.ReservationParticipantCreateNestedManyWithoutReservationInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutReservationInput;
};
export type ReservationUncheckedCreateInput = {
    id?: string;
    trainerId?: string | null;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutReservationInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutReservationInput;
};
export type ReservationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainer?: Prisma.ProfileUpdateOneWithoutReservationsAsTrainerNestedInput;
    creator?: Prisma.ProfileUpdateOneRequiredWithoutReservationsCreatedNestedInput;
    participants?: Prisma.ReservationParticipantUpdateManyWithoutReservationNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trainerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutReservationNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutReservationNestedInput;
};
export type ReservationCreateManyInput = {
    id?: string;
    trainerId?: string | null;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trainerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationListRelationFilter = {
    every?: Prisma.ReservationWhereInput;
    some?: Prisma.ReservationWhereInput;
    none?: Prisma.ReservationWhereInput;
};
export type ReservationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ReservationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trainerId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    cancelledBy?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReservationAvgOrderByAggregateInput = {
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type ReservationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trainerId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    cancelledBy?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReservationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    trainerId?: Prisma.SortOrder;
    startsAt?: Prisma.SortOrder;
    endsAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    paymentMethod?: Prisma.SortOrder;
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    cancelledBy?: Prisma.SortOrder;
    createdBy?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ReservationSumOrderByAggregateInput = {
    priceCents?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type ReservationScalarRelationFilter = {
    is?: Prisma.ReservationWhereInput;
    isNot?: Prisma.ReservationWhereInput;
};
export type ReservationCreateNestedManyWithoutTrainerInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutTrainerInput, Prisma.ReservationUncheckedCreateWithoutTrainerInput> | Prisma.ReservationCreateWithoutTrainerInput[] | Prisma.ReservationUncheckedCreateWithoutTrainerInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutTrainerInput | Prisma.ReservationCreateOrConnectWithoutTrainerInput[];
    createMany?: Prisma.ReservationCreateManyTrainerInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutCreatorInput, Prisma.ReservationUncheckedCreateWithoutCreatorInput> | Prisma.ReservationCreateWithoutCreatorInput[] | Prisma.ReservationUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutCreatorInput | Prisma.ReservationCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ReservationCreateManyCreatorInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUncheckedCreateNestedManyWithoutTrainerInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutTrainerInput, Prisma.ReservationUncheckedCreateWithoutTrainerInput> | Prisma.ReservationCreateWithoutTrainerInput[] | Prisma.ReservationUncheckedCreateWithoutTrainerInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutTrainerInput | Prisma.ReservationCreateOrConnectWithoutTrainerInput[];
    createMany?: Prisma.ReservationCreateManyTrainerInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutCreatorInput, Prisma.ReservationUncheckedCreateWithoutCreatorInput> | Prisma.ReservationCreateWithoutCreatorInput[] | Prisma.ReservationUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutCreatorInput | Prisma.ReservationCreateOrConnectWithoutCreatorInput[];
    createMany?: Prisma.ReservationCreateManyCreatorInputEnvelope;
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
};
export type ReservationUpdateManyWithoutTrainerNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutTrainerInput, Prisma.ReservationUncheckedCreateWithoutTrainerInput> | Prisma.ReservationCreateWithoutTrainerInput[] | Prisma.ReservationUncheckedCreateWithoutTrainerInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutTrainerInput | Prisma.ReservationCreateOrConnectWithoutTrainerInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutTrainerInput | Prisma.ReservationUpsertWithWhereUniqueWithoutTrainerInput[];
    createMany?: Prisma.ReservationCreateManyTrainerInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutTrainerInput | Prisma.ReservationUpdateWithWhereUniqueWithoutTrainerInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutTrainerInput | Prisma.ReservationUpdateManyWithWhereWithoutTrainerInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutCreatorInput, Prisma.ReservationUncheckedCreateWithoutCreatorInput> | Prisma.ReservationCreateWithoutCreatorInput[] | Prisma.ReservationUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutCreatorInput | Prisma.ReservationCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ReservationUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ReservationCreateManyCreatorInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ReservationUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutCreatorInput | Prisma.ReservationUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationUncheckedUpdateManyWithoutTrainerNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutTrainerInput, Prisma.ReservationUncheckedCreateWithoutTrainerInput> | Prisma.ReservationCreateWithoutTrainerInput[] | Prisma.ReservationUncheckedCreateWithoutTrainerInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutTrainerInput | Prisma.ReservationCreateOrConnectWithoutTrainerInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutTrainerInput | Prisma.ReservationUpsertWithWhereUniqueWithoutTrainerInput[];
    createMany?: Prisma.ReservationCreateManyTrainerInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutTrainerInput | Prisma.ReservationUpdateWithWhereUniqueWithoutTrainerInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutTrainerInput | Prisma.ReservationUpdateManyWithWhereWithoutTrainerInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type ReservationUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutCreatorInput, Prisma.ReservationUncheckedCreateWithoutCreatorInput> | Prisma.ReservationCreateWithoutCreatorInput[] | Prisma.ReservationUncheckedCreateWithoutCreatorInput[];
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutCreatorInput | Prisma.ReservationCreateOrConnectWithoutCreatorInput[];
    upsert?: Prisma.ReservationUpsertWithWhereUniqueWithoutCreatorInput | Prisma.ReservationUpsertWithWhereUniqueWithoutCreatorInput[];
    createMany?: Prisma.ReservationCreateManyCreatorInputEnvelope;
    set?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    disconnect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    delete?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    connect?: Prisma.ReservationWhereUniqueInput | Prisma.ReservationWhereUniqueInput[];
    update?: Prisma.ReservationUpdateWithWhereUniqueWithoutCreatorInput | Prisma.ReservationUpdateWithWhereUniqueWithoutCreatorInput[];
    updateMany?: Prisma.ReservationUpdateManyWithWhereWithoutCreatorInput | Prisma.ReservationUpdateManyWithWhereWithoutCreatorInput[];
    deleteMany?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
};
export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus;
};
export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod;
};
export type ReservationCreateNestedOneWithoutParticipantsInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutParticipantsInput, Prisma.ReservationUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutParticipantsInput;
    connect?: Prisma.ReservationWhereUniqueInput;
};
export type ReservationUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutParticipantsInput, Prisma.ReservationUncheckedCreateWithoutParticipantsInput>;
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutParticipantsInput;
    upsert?: Prisma.ReservationUpsertWithoutParticipantsInput;
    connect?: Prisma.ReservationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReservationUpdateToOneWithWhereWithoutParticipantsInput, Prisma.ReservationUpdateWithoutParticipantsInput>, Prisma.ReservationUncheckedUpdateWithoutParticipantsInput>;
};
export type ReservationCreateNestedOneWithoutCancellationRequestsInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutCancellationRequestsInput, Prisma.ReservationUncheckedCreateWithoutCancellationRequestsInput>;
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutCancellationRequestsInput;
    connect?: Prisma.ReservationWhereUniqueInput;
};
export type ReservationUpdateOneRequiredWithoutCancellationRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ReservationCreateWithoutCancellationRequestsInput, Prisma.ReservationUncheckedCreateWithoutCancellationRequestsInput>;
    connectOrCreate?: Prisma.ReservationCreateOrConnectWithoutCancellationRequestsInput;
    upsert?: Prisma.ReservationUpsertWithoutCancellationRequestsInput;
    connect?: Prisma.ReservationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ReservationUpdateToOneWithWhereWithoutCancellationRequestsInput, Prisma.ReservationUpdateWithoutCancellationRequestsInput>, Prisma.ReservationUncheckedUpdateWithoutCancellationRequestsInput>;
};
export type ReservationCreateWithoutTrainerInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    creator: Prisma.ProfileCreateNestedOneWithoutReservationsCreatedInput;
    participants?: Prisma.ReservationParticipantCreateNestedManyWithoutReservationInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutTrainerInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutReservationInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutTrainerInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutTrainerInput, Prisma.ReservationUncheckedCreateWithoutTrainerInput>;
};
export type ReservationCreateManyTrainerInputEnvelope = {
    data: Prisma.ReservationCreateManyTrainerInput | Prisma.ReservationCreateManyTrainerInput[];
    skipDuplicates?: boolean;
};
export type ReservationCreateWithoutCreatorInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainer?: Prisma.ProfileCreateNestedOneWithoutReservationsAsTrainerInput;
    participants?: Prisma.ReservationParticipantCreateNestedManyWithoutReservationInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutCreatorInput = {
    id?: string;
    trainerId?: string | null;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutReservationInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutCreatorInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutCreatorInput, Prisma.ReservationUncheckedCreateWithoutCreatorInput>;
};
export type ReservationCreateManyCreatorInputEnvelope = {
    data: Prisma.ReservationCreateManyCreatorInput | Prisma.ReservationCreateManyCreatorInput[];
    skipDuplicates?: boolean;
};
export type ReservationUpsertWithWhereUniqueWithoutTrainerInput = {
    where: Prisma.ReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutTrainerInput, Prisma.ReservationUncheckedUpdateWithoutTrainerInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutTrainerInput, Prisma.ReservationUncheckedCreateWithoutTrainerInput>;
};
export type ReservationUpdateWithWhereUniqueWithoutTrainerInput = {
    where: Prisma.ReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutTrainerInput, Prisma.ReservationUncheckedUpdateWithoutTrainerInput>;
};
export type ReservationUpdateManyWithWhereWithoutTrainerInput = {
    where: Prisma.ReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyWithoutTrainerInput>;
};
export type ReservationScalarWhereInput = {
    AND?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
    OR?: Prisma.ReservationScalarWhereInput[];
    NOT?: Prisma.ReservationScalarWhereInput | Prisma.ReservationScalarWhereInput[];
    id?: Prisma.UuidFilter<"Reservation"> | string;
    trainerId?: Prisma.UuidNullableFilter<"Reservation"> | string | null;
    startsAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    endsAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    status?: Prisma.EnumReservationStatusFilter<"Reservation"> | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFilter<"Reservation"> | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFilter<"Reservation"> | number;
    capacity?: Prisma.IntFilter<"Reservation"> | number;
    notes?: Prisma.StringNullableFilter<"Reservation"> | string | null;
    cancelledAt?: Prisma.DateTimeNullableFilter<"Reservation"> | Date | string | null;
    cancelledBy?: Prisma.UuidNullableFilter<"Reservation"> | string | null;
    createdBy?: Prisma.UuidFilter<"Reservation"> | string;
    createdAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Reservation"> | Date | string;
};
export type ReservationUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutCreatorInput, Prisma.ReservationUncheckedUpdateWithoutCreatorInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutCreatorInput, Prisma.ReservationUncheckedCreateWithoutCreatorInput>;
};
export type ReservationUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Prisma.ReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutCreatorInput, Prisma.ReservationUncheckedUpdateWithoutCreatorInput>;
};
export type ReservationUpdateManyWithWhereWithoutCreatorInput = {
    where: Prisma.ReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyWithoutCreatorInput>;
};
export type ReservationCreateWithoutParticipantsInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainer?: Prisma.ProfileCreateNestedOneWithoutReservationsAsTrainerInput;
    creator: Prisma.ProfileCreateNestedOneWithoutReservationsCreatedInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutParticipantsInput = {
    id?: string;
    trainerId?: string | null;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutParticipantsInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutParticipantsInput, Prisma.ReservationUncheckedCreateWithoutParticipantsInput>;
};
export type ReservationUpsertWithoutParticipantsInput = {
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutParticipantsInput, Prisma.ReservationUncheckedUpdateWithoutParticipantsInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutParticipantsInput, Prisma.ReservationUncheckedCreateWithoutParticipantsInput>;
    where?: Prisma.ReservationWhereInput;
};
export type ReservationUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: Prisma.ReservationWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutParticipantsInput, Prisma.ReservationUncheckedUpdateWithoutParticipantsInput>;
};
export type ReservationUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainer?: Prisma.ProfileUpdateOneWithoutReservationsAsTrainerNestedInput;
    creator?: Prisma.ProfileUpdateOneRequiredWithoutReservationsCreatedNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutParticipantsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trainerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutReservationNestedInput;
};
export type ReservationCreateWithoutCancellationRequestsInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    trainer?: Prisma.ProfileCreateNestedOneWithoutReservationsAsTrainerInput;
    creator: Prisma.ProfileCreateNestedOneWithoutReservationsCreatedInput;
    participants?: Prisma.ReservationParticipantCreateNestedManyWithoutReservationInput;
};
export type ReservationUncheckedCreateWithoutCancellationRequestsInput = {
    id?: string;
    trainerId?: string | null;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    participants?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutReservationInput;
};
export type ReservationCreateOrConnectWithoutCancellationRequestsInput = {
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutCancellationRequestsInput, Prisma.ReservationUncheckedCreateWithoutCancellationRequestsInput>;
};
export type ReservationUpsertWithoutCancellationRequestsInput = {
    update: Prisma.XOR<Prisma.ReservationUpdateWithoutCancellationRequestsInput, Prisma.ReservationUncheckedUpdateWithoutCancellationRequestsInput>;
    create: Prisma.XOR<Prisma.ReservationCreateWithoutCancellationRequestsInput, Prisma.ReservationUncheckedCreateWithoutCancellationRequestsInput>;
    where?: Prisma.ReservationWhereInput;
};
export type ReservationUpdateToOneWithWhereWithoutCancellationRequestsInput = {
    where?: Prisma.ReservationWhereInput;
    data: Prisma.XOR<Prisma.ReservationUpdateWithoutCancellationRequestsInput, Prisma.ReservationUncheckedUpdateWithoutCancellationRequestsInput>;
};
export type ReservationUpdateWithoutCancellationRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainer?: Prisma.ProfileUpdateOneWithoutReservationsAsTrainerNestedInput;
    creator?: Prisma.ProfileUpdateOneRequiredWithoutReservationsCreatedNestedInput;
    participants?: Prisma.ReservationParticipantUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutCancellationRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trainerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutReservationNestedInput;
};
export type ReservationCreateManyTrainerInput = {
    id?: string;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdBy: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationCreateManyCreatorInput = {
    id?: string;
    trainerId?: string | null;
    startsAt: Date | string;
    endsAt: Date | string;
    status?: $Enums.ReservationStatus;
    paymentMethod?: $Enums.PaymentMethod;
    priceCents?: number;
    capacity?: number;
    notes?: string | null;
    cancelledAt?: Date | string | null;
    cancelledBy?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ReservationUpdateWithoutTrainerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    creator?: Prisma.ProfileUpdateOneRequiredWithoutReservationsCreatedNestedInput;
    participants?: Prisma.ReservationParticipantUpdateManyWithoutReservationNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutTrainerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutReservationNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateManyWithoutTrainerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdBy?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    trainer?: Prisma.ProfileUpdateOneWithoutReservationsAsTrainerNestedInput;
    participants?: Prisma.ReservationParticipantUpdateManyWithoutReservationNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trainerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    participants?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutReservationNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutReservationNestedInput;
};
export type ReservationUncheckedUpdateManyWithoutCreatorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    trainerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    startsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    endsAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    paymentMethod?: Prisma.EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod;
    priceCents?: Prisma.IntFieldUpdateOperationsInput | number;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    cancelledBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ReservationCountOutputType = {
    participants: number;
    cancellationRequests: number;
};
export type ReservationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    participants?: boolean | ReservationCountOutputTypeCountParticipantsArgs;
    cancellationRequests?: boolean | ReservationCountOutputTypeCountCancellationRequestsArgs;
};
export type ReservationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationCountOutputTypeSelect<ExtArgs> | null;
};
export type ReservationCountOutputTypeCountParticipantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationParticipantWhereInput;
};
export type ReservationCountOutputTypeCountCancellationRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CancellationRequestWhereInput;
};
export type ReservationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    trainerId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    priceCents?: boolean;
    capacity?: boolean;
    notes?: boolean;
    cancelledAt?: boolean;
    cancelledBy?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trainer?: boolean | Prisma.Reservation$trainerArgs<ExtArgs>;
    creator?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.Reservation$participantsArgs<ExtArgs>;
    cancellationRequests?: boolean | Prisma.Reservation$cancellationRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReservationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservation"]>;
export type ReservationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    trainerId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    priceCents?: boolean;
    capacity?: boolean;
    notes?: boolean;
    cancelledAt?: boolean;
    cancelledBy?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trainer?: boolean | Prisma.Reservation$trainerArgs<ExtArgs>;
    creator?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservation"]>;
export type ReservationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    trainerId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    priceCents?: boolean;
    capacity?: boolean;
    notes?: boolean;
    cancelledAt?: boolean;
    cancelledBy?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    trainer?: boolean | Prisma.Reservation$trainerArgs<ExtArgs>;
    creator?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["reservation"]>;
export type ReservationSelectScalar = {
    id?: boolean;
    trainerId?: boolean;
    startsAt?: boolean;
    endsAt?: boolean;
    status?: boolean;
    paymentMethod?: boolean;
    priceCents?: boolean;
    capacity?: boolean;
    notes?: boolean;
    cancelledAt?: boolean;
    cancelledBy?: boolean;
    createdBy?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ReservationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "trainerId" | "startsAt" | "endsAt" | "status" | "paymentMethod" | "priceCents" | "capacity" | "notes" | "cancelledAt" | "cancelledBy" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["reservation"]>;
export type ReservationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trainer?: boolean | Prisma.Reservation$trainerArgs<ExtArgs>;
    creator?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
    participants?: boolean | Prisma.Reservation$participantsArgs<ExtArgs>;
    cancellationRequests?: boolean | Prisma.Reservation$cancellationRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.ReservationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ReservationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trainer?: boolean | Prisma.Reservation$trainerArgs<ExtArgs>;
    creator?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    trainer?: boolean | Prisma.Reservation$trainerArgs<ExtArgs>;
    creator?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $ReservationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Reservation";
    objects: {
        trainer: Prisma.$ProfilePayload<ExtArgs> | null;
        creator: Prisma.$ProfilePayload<ExtArgs>;
        participants: Prisma.$ReservationParticipantPayload<ExtArgs>[];
        cancellationRequests: Prisma.$CancellationRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        trainerId: string | null;
        startsAt: Date;
        endsAt: Date;
        status: $Enums.ReservationStatus;
        paymentMethod: $Enums.PaymentMethod;
        priceCents: number;
        capacity: number;
        notes: string | null;
        cancelledAt: Date | null;
        cancelledBy: string | null;
        createdBy: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["reservation"]>;
    composites: {};
};
export type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ReservationPayload, S>;
export type ReservationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ReservationCountAggregateInputType | true;
};
export interface ReservationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Reservation'];
        meta: {
            name: 'Reservation';
        };
    };
    findUnique<T extends ReservationFindUniqueArgs>(args: Prisma.SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ReservationFindFirstArgs>(args?: Prisma.SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ReservationFindManyArgs>(args?: Prisma.SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ReservationCreateArgs>(args: Prisma.SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ReservationCreateManyArgs>(args?: Prisma.SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ReservationDeleteArgs>(args: Prisma.SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ReservationUpdateArgs>(args: Prisma.SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ReservationDeleteManyArgs>(args?: Prisma.SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ReservationUpdateManyArgs>(args: Prisma.SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ReservationUpsertArgs>(args: Prisma.SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma.Prisma__ReservationClient<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ReservationCountArgs>(args?: Prisma.Subset<T, ReservationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ReservationCountAggregateOutputType> : number>;
    aggregate<T extends ReservationAggregateArgs>(args: Prisma.Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>;
    groupBy<T extends ReservationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ReservationGroupByArgs['orderBy'];
    } : {
        orderBy?: ReservationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ReservationFieldRefs;
}
export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    trainer<T extends Prisma.Reservation$trainerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reservation$trainerArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    creator<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    participants<T extends Prisma.Reservation$participantsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reservation$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cancellationRequests<T extends Prisma.Reservation$cancellationRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Reservation$cancellationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ReservationFieldRefs {
    readonly id: Prisma.FieldRef<"Reservation", 'String'>;
    readonly trainerId: Prisma.FieldRef<"Reservation", 'String'>;
    readonly startsAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
    readonly endsAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Reservation", 'ReservationStatus'>;
    readonly paymentMethod: Prisma.FieldRef<"Reservation", 'PaymentMethod'>;
    readonly priceCents: Prisma.FieldRef<"Reservation", 'Int'>;
    readonly capacity: Prisma.FieldRef<"Reservation", 'Int'>;
    readonly notes: Prisma.FieldRef<"Reservation", 'String'>;
    readonly cancelledAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
    readonly cancelledBy: Prisma.FieldRef<"Reservation", 'String'>;
    readonly createdBy: Prisma.FieldRef<"Reservation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Reservation", 'DateTime'>;
}
export type ReservationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationScalarFieldEnum | Prisma.ReservationScalarFieldEnum[];
};
export type ReservationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationScalarFieldEnum | Prisma.ReservationScalarFieldEnum[];
};
export type ReservationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where?: Prisma.ReservationWhereInput;
    orderBy?: Prisma.ReservationOrderByWithRelationInput | Prisma.ReservationOrderByWithRelationInput[];
    cursor?: Prisma.ReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReservationScalarFieldEnum | Prisma.ReservationScalarFieldEnum[];
};
export type ReservationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationCreateInput, Prisma.ReservationUncheckedCreateInput>;
};
export type ReservationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ReservationCreateManyInput | Prisma.ReservationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ReservationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    data: Prisma.ReservationCreateManyInput | Prisma.ReservationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ReservationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ReservationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationUpdateInput, Prisma.ReservationUncheckedUpdateInput>;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyInput>;
    where?: Prisma.ReservationWhereInput;
    limit?: number;
};
export type ReservationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ReservationUpdateManyMutationInput, Prisma.ReservationUncheckedUpdateManyInput>;
    where?: Prisma.ReservationWhereInput;
    limit?: number;
    include?: Prisma.ReservationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ReservationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.ReservationCreateInput, Prisma.ReservationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ReservationUpdateInput, Prisma.ReservationUncheckedUpdateInput>;
};
export type ReservationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
    where: Prisma.ReservationWhereUniqueInput;
};
export type ReservationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
    limit?: number;
};
export type Reservation$trainerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
};
export type Reservation$participantsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Reservation$cancellationRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ReservationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReservationSelect<ExtArgs> | null;
    omit?: Prisma.ReservationOmit<ExtArgs> | null;
    include?: Prisma.ReservationInclude<ExtArgs> | null;
};
