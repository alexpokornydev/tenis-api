import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ProfileModel = runtime.Types.Result.DefaultSelection<Prisma.$ProfilePayload>;
export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type ProfileAvgAggregateOutputType = {
    trainerRateCents: number | null;
    clientHourlyRateCents: number | null;
};
export type ProfileSumAggregateOutputType = {
    trainerRateCents: number | null;
    clientHourlyRateCents: number | null;
};
export type ProfileMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    fullName: string | null;
    phone: string | null;
    trainerRateCents: number | null;
    clientHourlyRateCents: number | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    fullName: string | null;
    phone: string | null;
    trainerRateCents: number | null;
    clientHourlyRateCents: number | null;
    role: $Enums.UserRole | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type ProfileCountAggregateOutputType = {
    id: number;
    email: number;
    fullName: number;
    phone: number;
    trainerRateCents: number;
    clientHourlyRateCents: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type ProfileAvgAggregateInputType = {
    trainerRateCents?: true;
    clientHourlyRateCents?: true;
};
export type ProfileSumAggregateInputType = {
    trainerRateCents?: true;
    clientHourlyRateCents?: true;
};
export type ProfileMinAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    phone?: true;
    trainerRateCents?: true;
    clientHourlyRateCents?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileMaxAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    phone?: true;
    trainerRateCents?: true;
    clientHourlyRateCents?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type ProfileCountAggregateInputType = {
    id?: true;
    email?: true;
    fullName?: true;
    phone?: true;
    trainerRateCents?: true;
    clientHourlyRateCents?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type ProfileAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ProfileCountAggregateInputType;
    _avg?: ProfileAvgAggregateInputType;
    _sum?: ProfileSumAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
    [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProfile[P]> : Prisma.GetScalarType<T[P], AggregateProfile[P]>;
};
export type ProfileGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithAggregationInput | Prisma.ProfileOrderByWithAggregationInput[];
    by: Prisma.ProfileScalarFieldEnum[] | Prisma.ProfileScalarFieldEnum;
    having?: Prisma.ProfileScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProfileCountAggregateInputType | true;
    _avg?: ProfileAvgAggregateInputType;
    _sum?: ProfileSumAggregateInputType;
    _min?: ProfileMinAggregateInputType;
    _max?: ProfileMaxAggregateInputType;
};
export type ProfileGroupByOutputType = {
    id: string;
    email: string;
    fullName: string;
    phone: string | null;
    trainerRateCents: number | null;
    clientHourlyRateCents: number | null;
    role: $Enums.UserRole;
    createdAt: Date;
    updatedAt: Date;
    _count: ProfileCountAggregateOutputType | null;
    _avg: ProfileAvgAggregateOutputType | null;
    _sum: ProfileSumAggregateOutputType | null;
    _min: ProfileMinAggregateOutputType | null;
    _max: ProfileMaxAggregateOutputType | null;
};
export type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ProfileGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ProfileGroupByOutputType[P]>;
}>>;
export type ProfileWhereInput = {
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    id?: Prisma.UuidFilter<"Profile"> | string;
    email?: Prisma.StringFilter<"Profile"> | string;
    fullName?: Prisma.StringFilter<"Profile"> | string;
    phone?: Prisma.StringNullableFilter<"Profile"> | string | null;
    trainerRateCents?: Prisma.IntNullableFilter<"Profile"> | number | null;
    clientHourlyRateCents?: Prisma.IntNullableFilter<"Profile"> | number | null;
    role?: Prisma.EnumUserRoleFilter<"Profile"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    membership?: Prisma.XOR<Prisma.MembershipNullableScalarRelationFilter, Prisma.MembershipWhereInput> | null;
    credit?: Prisma.XOR<Prisma.TrainingCreditNullableScalarRelationFilter, Prisma.TrainingCreditWhereInput> | null;
    reservationsAsClient?: Prisma.ReservationParticipantListRelationFilter;
    reservationsAsTrainer?: Prisma.ReservationListRelationFilter;
    reservationsCreated?: Prisma.ReservationListRelationFilter;
    cancellationRequests?: Prisma.CancellationRequestListRelationFilter;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerListRelationFilter;
    announcementsCreated?: Prisma.AnnouncementListRelationFilter;
};
export type ProfileOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    trainerRateCents?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    membership?: Prisma.MembershipOrderByWithRelationInput;
    credit?: Prisma.TrainingCreditOrderByWithRelationInput;
    reservationsAsClient?: Prisma.ReservationParticipantOrderByRelationAggregateInput;
    reservationsAsTrainer?: Prisma.ReservationOrderByRelationAggregateInput;
    reservationsCreated?: Prisma.ReservationOrderByRelationAggregateInput;
    cancellationRequests?: Prisma.CancellationRequestOrderByRelationAggregateInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerOrderByRelationAggregateInput;
    announcementsCreated?: Prisma.AnnouncementOrderByRelationAggregateInput;
};
export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    OR?: Prisma.ProfileWhereInput[];
    NOT?: Prisma.ProfileWhereInput | Prisma.ProfileWhereInput[];
    fullName?: Prisma.StringFilter<"Profile"> | string;
    phone?: Prisma.StringNullableFilter<"Profile"> | string | null;
    trainerRateCents?: Prisma.IntNullableFilter<"Profile"> | number | null;
    clientHourlyRateCents?: Prisma.IntNullableFilter<"Profile"> | number | null;
    role?: Prisma.EnumUserRoleFilter<"Profile"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Profile"> | Date | string;
    membership?: Prisma.XOR<Prisma.MembershipNullableScalarRelationFilter, Prisma.MembershipWhereInput> | null;
    credit?: Prisma.XOR<Prisma.TrainingCreditNullableScalarRelationFilter, Prisma.TrainingCreditWhereInput> | null;
    reservationsAsClient?: Prisma.ReservationParticipantListRelationFilter;
    reservationsAsTrainer?: Prisma.ReservationListRelationFilter;
    reservationsCreated?: Prisma.ReservationListRelationFilter;
    cancellationRequests?: Prisma.CancellationRequestListRelationFilter;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerListRelationFilter;
    announcementsCreated?: Prisma.AnnouncementListRelationFilter;
}, "id" | "email">;
export type ProfileOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    trainerRateCents?: Prisma.SortOrderInput | Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ProfileCountOrderByAggregateInput;
    _avg?: Prisma.ProfileAvgOrderByAggregateInput;
    _max?: Prisma.ProfileMaxOrderByAggregateInput;
    _min?: Prisma.ProfileMinOrderByAggregateInput;
    _sum?: Prisma.ProfileSumOrderByAggregateInput;
};
export type ProfileScalarWhereWithAggregatesInput = {
    AND?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    OR?: Prisma.ProfileScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ProfileScalarWhereWithAggregatesInput | Prisma.ProfileScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Profile"> | string;
    email?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    fullName?: Prisma.StringWithAggregatesFilter<"Profile"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Profile"> | string | null;
    trainerRateCents?: Prisma.IntNullableWithAggregatesFilter<"Profile"> | number | null;
    clientHourlyRateCents?: Prisma.IntNullableWithAggregatesFilter<"Profile"> | number | null;
    role?: Prisma.EnumUserRoleWithAggregatesFilter<"Profile"> | $Enums.UserRole;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Profile"> | Date | string;
};
export type ProfileCreateInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateManyInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type ProfileUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ProfileCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    trainerRateCents?: Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileAvgOrderByAggregateInput = {
    trainerRateCents?: Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrder;
};
export type ProfileMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    trainerRateCents?: Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    fullName?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    trainerRateCents?: Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ProfileSumOrderByAggregateInput = {
    trainerRateCents?: Prisma.SortOrder;
    clientHourlyRateCents?: Prisma.SortOrder;
};
export type ProfileScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput;
    isNot?: Prisma.ProfileWhereInput;
};
export type ProfileNullableScalarRelationFilter = {
    is?: Prisma.ProfileWhereInput | null;
    isNot?: Prisma.ProfileWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole;
};
export type ProfileCreateNestedOneWithoutMembershipInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutMembershipInput, Prisma.ProfileUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutMembershipInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutMembershipNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutMembershipInput, Prisma.ProfileUncheckedCreateWithoutMembershipInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutMembershipInput;
    upsert?: Prisma.ProfileUpsertWithoutMembershipInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutMembershipInput, Prisma.ProfileUpdateWithoutMembershipInput>, Prisma.ProfileUncheckedUpdateWithoutMembershipInput>;
};
export type ProfileCreateNestedOneWithoutCreditInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCreditInput, Prisma.ProfileUncheckedCreateWithoutCreditInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCreditInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutCreditNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCreditInput, Prisma.ProfileUncheckedCreateWithoutCreditInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCreditInput;
    upsert?: Prisma.ProfileUpsertWithoutCreditInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutCreditInput, Prisma.ProfileUpdateWithoutCreditInput>, Prisma.ProfileUncheckedUpdateWithoutCreditInput>;
};
export type ProfileCreateNestedOneWithoutTrainingCreditLedgerInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutTrainingCreditLedgerInput, Prisma.ProfileUncheckedCreateWithoutTrainingCreditLedgerInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutTrainingCreditLedgerInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutTrainingCreditLedgerNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutTrainingCreditLedgerInput, Prisma.ProfileUncheckedCreateWithoutTrainingCreditLedgerInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutTrainingCreditLedgerInput;
    upsert?: Prisma.ProfileUpsertWithoutTrainingCreditLedgerInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutTrainingCreditLedgerInput, Prisma.ProfileUpdateWithoutTrainingCreditLedgerInput>, Prisma.ProfileUncheckedUpdateWithoutTrainingCreditLedgerInput>;
};
export type ProfileCreateNestedOneWithoutReservationsAsTrainerInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsTrainerInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsTrainerInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReservationsAsTrainerInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileCreateNestedOneWithoutReservationsCreatedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsCreatedInput, Prisma.ProfileUncheckedCreateWithoutReservationsCreatedInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReservationsCreatedInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneWithoutReservationsAsTrainerNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsTrainerInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsTrainerInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReservationsAsTrainerInput;
    upsert?: Prisma.ProfileUpsertWithoutReservationsAsTrainerInput;
    disconnect?: Prisma.ProfileWhereInput | boolean;
    delete?: Prisma.ProfileWhereInput | boolean;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutReservationsAsTrainerInput, Prisma.ProfileUpdateWithoutReservationsAsTrainerInput>, Prisma.ProfileUncheckedUpdateWithoutReservationsAsTrainerInput>;
};
export type ProfileUpdateOneRequiredWithoutReservationsCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsCreatedInput, Prisma.ProfileUncheckedCreateWithoutReservationsCreatedInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReservationsCreatedInput;
    upsert?: Prisma.ProfileUpsertWithoutReservationsCreatedInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutReservationsCreatedInput, Prisma.ProfileUpdateWithoutReservationsCreatedInput>, Prisma.ProfileUncheckedUpdateWithoutReservationsCreatedInput>;
};
export type ProfileCreateNestedOneWithoutReservationsAsClientInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsClientInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsClientInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReservationsAsClientInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutReservationsAsClientNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsClientInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsClientInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutReservationsAsClientInput;
    upsert?: Prisma.ProfileUpsertWithoutReservationsAsClientInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutReservationsAsClientInput, Prisma.ProfileUpdateWithoutReservationsAsClientInput>, Prisma.ProfileUncheckedUpdateWithoutReservationsAsClientInput>;
};
export type ProfileCreateNestedOneWithoutCancellationRequestsInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCancellationRequestsInput, Prisma.ProfileUncheckedCreateWithoutCancellationRequestsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCancellationRequestsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutCancellationRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutCancellationRequestsInput, Prisma.ProfileUncheckedCreateWithoutCancellationRequestsInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutCancellationRequestsInput;
    upsert?: Prisma.ProfileUpsertWithoutCancellationRequestsInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutCancellationRequestsInput, Prisma.ProfileUpdateWithoutCancellationRequestsInput>, Prisma.ProfileUncheckedUpdateWithoutCancellationRequestsInput>;
};
export type ProfileCreateNestedOneWithoutAnnouncementsCreatedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnnouncementsCreatedInput, Prisma.ProfileUncheckedCreateWithoutAnnouncementsCreatedInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnnouncementsCreatedInput;
    connect?: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateOneRequiredWithoutAnnouncementsCreatedNestedInput = {
    create?: Prisma.XOR<Prisma.ProfileCreateWithoutAnnouncementsCreatedInput, Prisma.ProfileUncheckedCreateWithoutAnnouncementsCreatedInput>;
    connectOrCreate?: Prisma.ProfileCreateOrConnectWithoutAnnouncementsCreatedInput;
    upsert?: Prisma.ProfileUpsertWithoutAnnouncementsCreatedInput;
    connect?: Prisma.ProfileWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ProfileUpdateToOneWithWhereWithoutAnnouncementsCreatedInput, Prisma.ProfileUpdateWithoutAnnouncementsCreatedInput>, Prisma.ProfileUncheckedUpdateWithoutAnnouncementsCreatedInput>;
};
export type ProfileCreateWithoutMembershipInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutMembershipInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutMembershipInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutMembershipInput, Prisma.ProfileUncheckedCreateWithoutMembershipInput>;
};
export type ProfileUpsertWithoutMembershipInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutMembershipInput, Prisma.ProfileUncheckedUpdateWithoutMembershipInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutMembershipInput, Prisma.ProfileUncheckedCreateWithoutMembershipInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutMembershipInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutMembershipInput, Prisma.ProfileUncheckedUpdateWithoutMembershipInput>;
};
export type ProfileUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutMembershipInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateWithoutCreditInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutCreditInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutCreditInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCreditInput, Prisma.ProfileUncheckedCreateWithoutCreditInput>;
};
export type ProfileUpsertWithoutCreditInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutCreditInput, Prisma.ProfileUncheckedUpdateWithoutCreditInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCreditInput, Prisma.ProfileUncheckedCreateWithoutCreditInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutCreditInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutCreditInput, Prisma.ProfileUncheckedUpdateWithoutCreditInput>;
};
export type ProfileUpdateWithoutCreditInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutCreditInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateWithoutTrainingCreditLedgerInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutTrainingCreditLedgerInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutTrainingCreditLedgerInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutTrainingCreditLedgerInput, Prisma.ProfileUncheckedCreateWithoutTrainingCreditLedgerInput>;
};
export type ProfileUpsertWithoutTrainingCreditLedgerInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutTrainingCreditLedgerInput, Prisma.ProfileUncheckedUpdateWithoutTrainingCreditLedgerInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutTrainingCreditLedgerInput, Prisma.ProfileUncheckedCreateWithoutTrainingCreditLedgerInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutTrainingCreditLedgerInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutTrainingCreditLedgerInput, Prisma.ProfileUncheckedUpdateWithoutTrainingCreditLedgerInput>;
};
export type ProfileUpdateWithoutTrainingCreditLedgerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutTrainingCreditLedgerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateWithoutReservationsAsTrainerInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutReservationsAsTrainerInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutReservationsAsTrainerInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsTrainerInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsTrainerInput>;
};
export type ProfileCreateWithoutReservationsCreatedInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutReservationsCreatedInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutReservationsCreatedInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsCreatedInput, Prisma.ProfileUncheckedCreateWithoutReservationsCreatedInput>;
};
export type ProfileUpsertWithoutReservationsAsTrainerInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutReservationsAsTrainerInput, Prisma.ProfileUncheckedUpdateWithoutReservationsAsTrainerInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsTrainerInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsTrainerInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutReservationsAsTrainerInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutReservationsAsTrainerInput, Prisma.ProfileUncheckedUpdateWithoutReservationsAsTrainerInput>;
};
export type ProfileUpdateWithoutReservationsAsTrainerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutReservationsAsTrainerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUpsertWithoutReservationsCreatedInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutReservationsCreatedInput, Prisma.ProfileUncheckedUpdateWithoutReservationsCreatedInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsCreatedInput, Prisma.ProfileUncheckedCreateWithoutReservationsCreatedInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutReservationsCreatedInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutReservationsCreatedInput, Prisma.ProfileUncheckedUpdateWithoutReservationsCreatedInput>;
};
export type ProfileUpdateWithoutReservationsCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutReservationsCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateWithoutReservationsAsClientInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutReservationsAsClientInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutReservationsAsClientInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsClientInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsClientInput>;
};
export type ProfileUpsertWithoutReservationsAsClientInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutReservationsAsClientInput, Prisma.ProfileUncheckedUpdateWithoutReservationsAsClientInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutReservationsAsClientInput, Prisma.ProfileUncheckedCreateWithoutReservationsAsClientInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutReservationsAsClientInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutReservationsAsClientInput, Prisma.ProfileUncheckedUpdateWithoutReservationsAsClientInput>;
};
export type ProfileUpdateWithoutReservationsAsClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutReservationsAsClientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateWithoutCancellationRequestsInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementCreateNestedManyWithoutAuthorInput;
};
export type ProfileUncheckedCreateWithoutCancellationRequestsInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedCreateNestedManyWithoutAuthorInput;
};
export type ProfileCreateOrConnectWithoutCancellationRequestsInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCancellationRequestsInput, Prisma.ProfileUncheckedCreateWithoutCancellationRequestsInput>;
};
export type ProfileUpsertWithoutCancellationRequestsInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutCancellationRequestsInput, Prisma.ProfileUncheckedUpdateWithoutCancellationRequestsInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutCancellationRequestsInput, Prisma.ProfileUncheckedCreateWithoutCancellationRequestsInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutCancellationRequestsInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutCancellationRequestsInput, Prisma.ProfileUncheckedUpdateWithoutCancellationRequestsInput>;
};
export type ProfileUpdateWithoutCancellationRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUpdateManyWithoutAuthorNestedInput;
};
export type ProfileUncheckedUpdateWithoutCancellationRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
    announcementsCreated?: Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput;
};
export type ProfileCreateWithoutAnnouncementsCreatedInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerCreateNestedManyWithoutProfileInput;
};
export type ProfileUncheckedCreateWithoutAnnouncementsCreatedInput = {
    id: string;
    email: string;
    fullName: string;
    phone?: string | null;
    trainerRateCents?: number | null;
    clientHourlyRateCents?: number | null;
    role?: $Enums.UserRole;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    membership?: Prisma.MembershipUncheckedCreateNestedOneWithoutProfileInput;
    credit?: Prisma.TrainingCreditUncheckedCreateNestedOneWithoutProfileInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedCreateNestedManyWithoutProfileInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedCreateNestedManyWithoutTrainerInput;
    reservationsCreated?: Prisma.ReservationUncheckedCreateNestedManyWithoutCreatorInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedCreateNestedManyWithoutRequesterInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedCreateNestedManyWithoutProfileInput;
};
export type ProfileCreateOrConnectWithoutAnnouncementsCreatedInput = {
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnnouncementsCreatedInput, Prisma.ProfileUncheckedCreateWithoutAnnouncementsCreatedInput>;
};
export type ProfileUpsertWithoutAnnouncementsCreatedInput = {
    update: Prisma.XOR<Prisma.ProfileUpdateWithoutAnnouncementsCreatedInput, Prisma.ProfileUncheckedUpdateWithoutAnnouncementsCreatedInput>;
    create: Prisma.XOR<Prisma.ProfileCreateWithoutAnnouncementsCreatedInput, Prisma.ProfileUncheckedCreateWithoutAnnouncementsCreatedInput>;
    where?: Prisma.ProfileWhereInput;
};
export type ProfileUpdateToOneWithWhereWithoutAnnouncementsCreatedInput = {
    where?: Prisma.ProfileWhereInput;
    data: Prisma.XOR<Prisma.ProfileUpdateWithoutAnnouncementsCreatedInput, Prisma.ProfileUncheckedUpdateWithoutAnnouncementsCreatedInput>;
};
export type ProfileUpdateWithoutAnnouncementsCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUpdateManyWithoutProfileNestedInput;
};
export type ProfileUncheckedUpdateWithoutAnnouncementsCreatedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    fullName?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    trainerRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    clientHourlyRateCents?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    role?: Prisma.EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    membership?: Prisma.MembershipUncheckedUpdateOneWithoutProfileNestedInput;
    credit?: Prisma.TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput;
    reservationsAsClient?: Prisma.ReservationParticipantUncheckedUpdateManyWithoutProfileNestedInput;
    reservationsAsTrainer?: Prisma.ReservationUncheckedUpdateManyWithoutTrainerNestedInput;
    reservationsCreated?: Prisma.ReservationUncheckedUpdateManyWithoutCreatorNestedInput;
    cancellationRequests?: Prisma.CancellationRequestUncheckedUpdateManyWithoutRequesterNestedInput;
    trainingCreditLedger?: Prisma.TrainingCreditLedgerUncheckedUpdateManyWithoutProfileNestedInput;
};
export type ProfileCountOutputType = {
    reservationsAsClient: number;
    reservationsAsTrainer: number;
    reservationsCreated: number;
    cancellationRequests: number;
    trainingCreditLedger: number;
    announcementsCreated: number;
};
export type ProfileCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservationsAsClient?: boolean | ProfileCountOutputTypeCountReservationsAsClientArgs;
    reservationsAsTrainer?: boolean | ProfileCountOutputTypeCountReservationsAsTrainerArgs;
    reservationsCreated?: boolean | ProfileCountOutputTypeCountReservationsCreatedArgs;
    cancellationRequests?: boolean | ProfileCountOutputTypeCountCancellationRequestsArgs;
    trainingCreditLedger?: boolean | ProfileCountOutputTypeCountTrainingCreditLedgerArgs;
    announcementsCreated?: boolean | ProfileCountOutputTypeCountAnnouncementsCreatedArgs;
};
export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileCountOutputTypeSelect<ExtArgs> | null;
};
export type ProfileCountOutputTypeCountReservationsAsClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationParticipantWhereInput;
};
export type ProfileCountOutputTypeCountReservationsAsTrainerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
};
export type ProfileCountOutputTypeCountReservationsCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReservationWhereInput;
};
export type ProfileCountOutputTypeCountCancellationRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CancellationRequestWhereInput;
};
export type ProfileCountOutputTypeCountTrainingCreditLedgerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditLedgerWhereInput;
};
export type ProfileCountOutputTypeCountAnnouncementsCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
};
export type ProfileSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    phone?: boolean;
    trainerRateCents?: boolean;
    clientHourlyRateCents?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    membership?: boolean | Prisma.Profile$membershipArgs<ExtArgs>;
    credit?: boolean | Prisma.Profile$creditArgs<ExtArgs>;
    reservationsAsClient?: boolean | Prisma.Profile$reservationsAsClientArgs<ExtArgs>;
    reservationsAsTrainer?: boolean | Prisma.Profile$reservationsAsTrainerArgs<ExtArgs>;
    reservationsCreated?: boolean | Prisma.Profile$reservationsCreatedArgs<ExtArgs>;
    cancellationRequests?: boolean | Prisma.Profile$cancellationRequestsArgs<ExtArgs>;
    trainingCreditLedger?: boolean | Prisma.Profile$trainingCreditLedgerArgs<ExtArgs>;
    announcementsCreated?: boolean | Prisma.Profile$announcementsCreatedArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    phone?: boolean;
    trainerRateCents?: boolean;
    clientHourlyRateCents?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    phone?: boolean;
    trainerRateCents?: boolean;
    clientHourlyRateCents?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["profile"]>;
export type ProfileSelectScalar = {
    id?: boolean;
    email?: boolean;
    fullName?: boolean;
    phone?: boolean;
    trainerRateCents?: boolean;
    clientHourlyRateCents?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type ProfileOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "fullName" | "phone" | "trainerRateCents" | "clientHourlyRateCents" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>;
export type ProfileInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    membership?: boolean | Prisma.Profile$membershipArgs<ExtArgs>;
    credit?: boolean | Prisma.Profile$creditArgs<ExtArgs>;
    reservationsAsClient?: boolean | Prisma.Profile$reservationsAsClientArgs<ExtArgs>;
    reservationsAsTrainer?: boolean | Prisma.Profile$reservationsAsTrainerArgs<ExtArgs>;
    reservationsCreated?: boolean | Prisma.Profile$reservationsCreatedArgs<ExtArgs>;
    cancellationRequests?: boolean | Prisma.Profile$cancellationRequestsArgs<ExtArgs>;
    trainingCreditLedger?: boolean | Prisma.Profile$trainingCreditLedgerArgs<ExtArgs>;
    announcementsCreated?: boolean | Prisma.Profile$announcementsCreatedArgs<ExtArgs>;
    _count?: boolean | Prisma.ProfileCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ProfileIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ProfilePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Profile";
    objects: {
        membership: Prisma.$MembershipPayload<ExtArgs> | null;
        credit: Prisma.$TrainingCreditPayload<ExtArgs> | null;
        reservationsAsClient: Prisma.$ReservationParticipantPayload<ExtArgs>[];
        reservationsAsTrainer: Prisma.$ReservationPayload<ExtArgs>[];
        reservationsCreated: Prisma.$ReservationPayload<ExtArgs>[];
        cancellationRequests: Prisma.$CancellationRequestPayload<ExtArgs>[];
        trainingCreditLedger: Prisma.$TrainingCreditLedgerPayload<ExtArgs>[];
        announcementsCreated: Prisma.$AnnouncementPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        fullName: string;
        phone: string | null;
        trainerRateCents: number | null;
        clientHourlyRateCents: number | null;
        role: $Enums.UserRole;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["profile"]>;
    composites: {};
};
export type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ProfilePayload, S>;
export type ProfileCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ProfileCountAggregateInputType | true;
};
export interface ProfileDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Profile'];
        meta: {
            name: 'Profile';
        };
    };
    findUnique<T extends ProfileFindUniqueArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ProfileFindFirstArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ProfileFindManyArgs>(args?: Prisma.SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ProfileCreateArgs>(args: Prisma.SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ProfileCreateManyArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ProfileDeleteArgs>(args: Prisma.SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ProfileUpdateArgs>(args: Prisma.SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ProfileDeleteManyArgs>(args?: Prisma.SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ProfileUpdateManyArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ProfileUpsertArgs>(args: Prisma.SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ProfileCountArgs>(args?: Prisma.Subset<T, ProfileCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ProfileCountAggregateOutputType> : number>;
    aggregate<T extends ProfileAggregateArgs>(args: Prisma.Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>;
    groupBy<T extends ProfileGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ProfileGroupByArgs['orderBy'];
    } : {
        orderBy?: ProfileGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ProfileFieldRefs;
}
export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    membership<T extends Prisma.Profile$membershipArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$membershipArgs<ExtArgs>>): Prisma.Prisma__MembershipClient<runtime.Types.Result.GetResult<Prisma.$MembershipPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    credit<T extends Prisma.Profile$creditArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$creditArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    reservationsAsClient<T extends Prisma.Profile$reservationsAsClientArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$reservationsAsClientArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservationsAsTrainer<T extends Prisma.Profile$reservationsAsTrainerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$reservationsAsTrainerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservationsCreated<T extends Prisma.Profile$reservationsCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$reservationsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cancellationRequests<T extends Prisma.Profile$cancellationRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$cancellationRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CancellationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    trainingCreditLedger<T extends Prisma.Profile$trainingCreditLedgerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$trainingCreditLedgerArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditLedgerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    announcementsCreated<T extends Prisma.Profile$announcementsCreatedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Profile$announcementsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ProfileFieldRefs {
    readonly id: Prisma.FieldRef<"Profile", 'String'>;
    readonly email: Prisma.FieldRef<"Profile", 'String'>;
    readonly fullName: Prisma.FieldRef<"Profile", 'String'>;
    readonly phone: Prisma.FieldRef<"Profile", 'String'>;
    readonly trainerRateCents: Prisma.FieldRef<"Profile", 'Int'>;
    readonly clientHourlyRateCents: Prisma.FieldRef<"Profile", 'Int'>;
    readonly role: Prisma.FieldRef<"Profile", 'UserRole'>;
    readonly createdAt: Prisma.FieldRef<"Profile", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Profile", 'DateTime'>;
}
export type ProfileFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where?: Prisma.ProfileWhereInput;
    orderBy?: Prisma.ProfileOrderByWithRelationInput | Prisma.ProfileOrderByWithRelationInput[];
    cursor?: Prisma.ProfileWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ProfileScalarFieldEnum | Prisma.ProfileScalarFieldEnum[];
};
export type ProfileCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
};
export type ProfileCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.ProfileCreateManyInput | Prisma.ProfileCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ProfileUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type ProfileUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ProfileUpdateManyMutationInput, Prisma.ProfileUncheckedUpdateManyInput>;
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type ProfileUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
    create: Prisma.XOR<Prisma.ProfileCreateInput, Prisma.ProfileUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ProfileUpdateInput, Prisma.ProfileUncheckedUpdateInput>;
};
export type ProfileDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
    where: Prisma.ProfileWhereUniqueInput;
};
export type ProfileDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ProfileWhereInput;
    limit?: number;
};
export type Profile$membershipArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MembershipSelect<ExtArgs> | null;
    omit?: Prisma.MembershipOmit<ExtArgs> | null;
    include?: Prisma.MembershipInclude<ExtArgs> | null;
    where?: Prisma.MembershipWhereInput;
};
export type Profile$creditArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where?: Prisma.TrainingCreditWhereInput;
};
export type Profile$reservationsAsClientArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$reservationsAsTrainerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$reservationsCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$cancellationRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$trainingCreditLedgerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Profile$announcementsCreatedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AnnouncementScalarFieldEnum | Prisma.AnnouncementScalarFieldEnum[];
};
export type ProfileDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ProfileSelect<ExtArgs> | null;
    omit?: Prisma.ProfileOmit<ExtArgs> | null;
    include?: Prisma.ProfileInclude<ExtArgs> | null;
};
