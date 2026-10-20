import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type AnnouncementModel = runtime.Types.Result.DefaultSelection<Prisma.$AnnouncementPayload>;
export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null;
    _min: AnnouncementMinAggregateOutputType | null;
    _max: AnnouncementMaxAggregateOutputType | null;
};
export type AnnouncementMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    body: string | null;
    publishedAt: Date | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AnnouncementMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    body: string | null;
    publishedAt: Date | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type AnnouncementCountAggregateOutputType = {
    id: number;
    title: number;
    body: number;
    audience: number;
    publishedAt: number;
    authorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type AnnouncementMinAggregateInputType = {
    id?: true;
    title?: true;
    body?: true;
    publishedAt?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AnnouncementMaxAggregateInputType = {
    id?: true;
    title?: true;
    body?: true;
    publishedAt?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type AnnouncementCountAggregateInputType = {
    id?: true;
    title?: true;
    body?: true;
    audience?: true;
    publishedAt?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type AnnouncementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithRelationInput | Prisma.AnnouncementOrderByWithRelationInput[];
    cursor?: Prisma.AnnouncementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AnnouncementCountAggregateInputType;
    _min?: AnnouncementMinAggregateInputType;
    _max?: AnnouncementMaxAggregateInputType;
};
export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
    [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAnnouncement[P]> : Prisma.GetScalarType<T[P], AggregateAnnouncement[P]>;
};
export type AnnouncementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
    orderBy?: Prisma.AnnouncementOrderByWithAggregationInput | Prisma.AnnouncementOrderByWithAggregationInput[];
    by: Prisma.AnnouncementScalarFieldEnum[] | Prisma.AnnouncementScalarFieldEnum;
    having?: Prisma.AnnouncementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AnnouncementCountAggregateInputType | true;
    _min?: AnnouncementMinAggregateInputType;
    _max?: AnnouncementMaxAggregateInputType;
};
export type AnnouncementGroupByOutputType = {
    id: string;
    title: string;
    body: string;
    audience: string[];
    publishedAt: Date | null;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: AnnouncementCountAggregateOutputType | null;
    _min: AnnouncementMinAggregateOutputType | null;
    _max: AnnouncementMaxAggregateOutputType | null;
};
export type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AnnouncementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AnnouncementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AnnouncementGroupByOutputType[P]>;
}>>;
export type AnnouncementWhereInput = {
    AND?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    OR?: Prisma.AnnouncementWhereInput[];
    NOT?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    id?: Prisma.UuidFilter<"Announcement"> | string;
    title?: Prisma.StringFilter<"Announcement"> | string;
    body?: Prisma.StringFilter<"Announcement"> | string;
    audience?: Prisma.StringNullableListFilter<"Announcement">;
    publishedAt?: Prisma.DateTimeNullableFilter<"Announcement"> | Date | string | null;
    authorId?: Prisma.UuidFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    author?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type AnnouncementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    author?: Prisma.ProfileOrderByWithRelationInput;
};
export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    OR?: Prisma.AnnouncementWhereInput[];
    NOT?: Prisma.AnnouncementWhereInput | Prisma.AnnouncementWhereInput[];
    title?: Prisma.StringFilter<"Announcement"> | string;
    body?: Prisma.StringFilter<"Announcement"> | string;
    audience?: Prisma.StringNullableListFilter<"Announcement">;
    publishedAt?: Prisma.DateTimeNullableFilter<"Announcement"> | Date | string | null;
    authorId?: Prisma.UuidFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    author?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id">;
export type AnnouncementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.AnnouncementCountOrderByAggregateInput;
    _max?: Prisma.AnnouncementMaxOrderByAggregateInput;
    _min?: Prisma.AnnouncementMinOrderByAggregateInput;
};
export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: Prisma.AnnouncementScalarWhereWithAggregatesInput | Prisma.AnnouncementScalarWhereWithAggregatesInput[];
    OR?: Prisma.AnnouncementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AnnouncementScalarWhereWithAggregatesInput | Prisma.AnnouncementScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Announcement"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    body?: Prisma.StringWithAggregatesFilter<"Announcement"> | string;
    audience?: Prisma.StringNullableListFilter<"Announcement">;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Announcement"> | Date | string | null;
    authorId?: Prisma.UuidWithAggregatesFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Announcement"> | Date | string;
};
export type AnnouncementCreateInput = {
    id?: string;
    title: string;
    body: string;
    audience?: Prisma.AnnouncementCreateaudienceInput | string[];
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.ProfileCreateNestedOneWithoutAnnouncementsCreatedInput;
};
export type AnnouncementUncheckedCreateInput = {
    id?: string;
    title: string;
    body: string;
    audience?: Prisma.AnnouncementCreateaudienceInput | string[];
    publishedAt?: Date | string | null;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.ProfileUpdateOneRequiredWithoutAnnouncementsCreatedNestedInput;
};
export type AnnouncementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementCreateManyInput = {
    id?: string;
    title: string;
    body: string;
    audience?: Prisma.AnnouncementCreateaudienceInput | string[];
    publishedAt?: Date | string | null;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementListRelationFilter = {
    every?: Prisma.AnnouncementWhereInput;
    some?: Prisma.AnnouncementWhereInput;
    none?: Prisma.AnnouncementWhereInput;
};
export type AnnouncementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    has?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    hasEvery?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    hasSome?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    isEmpty?: boolean;
};
export type AnnouncementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    audience?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnnouncementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnnouncementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type AnnouncementCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutAuthorInput, Prisma.AnnouncementUncheckedCreateWithoutAuthorInput> | Prisma.AnnouncementCreateWithoutAuthorInput[] | Prisma.AnnouncementUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutAuthorInput | Prisma.AnnouncementCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.AnnouncementCreateManyAuthorInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutAuthorInput, Prisma.AnnouncementUncheckedCreateWithoutAuthorInput> | Prisma.AnnouncementCreateWithoutAuthorInput[] | Prisma.AnnouncementUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutAuthorInput | Prisma.AnnouncementCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.AnnouncementCreateManyAuthorInputEnvelope;
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
};
export type AnnouncementUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutAuthorInput, Prisma.AnnouncementUncheckedCreateWithoutAuthorInput> | Prisma.AnnouncementCreateWithoutAuthorInput[] | Prisma.AnnouncementUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutAuthorInput | Prisma.AnnouncementCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutAuthorInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.AnnouncementCreateManyAuthorInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutAuthorInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutAuthorInput | Prisma.AnnouncementUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.AnnouncementCreateWithoutAuthorInput, Prisma.AnnouncementUncheckedCreateWithoutAuthorInput> | Prisma.AnnouncementCreateWithoutAuthorInput[] | Prisma.AnnouncementUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.AnnouncementCreateOrConnectWithoutAuthorInput | Prisma.AnnouncementCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.AnnouncementUpsertWithWhereUniqueWithoutAuthorInput | Prisma.AnnouncementUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.AnnouncementCreateManyAuthorInputEnvelope;
    set?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    disconnect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    delete?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    connect?: Prisma.AnnouncementWhereUniqueInput | Prisma.AnnouncementWhereUniqueInput[];
    update?: Prisma.AnnouncementUpdateWithWhereUniqueWithoutAuthorInput | Prisma.AnnouncementUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.AnnouncementUpdateManyWithWhereWithoutAuthorInput | Prisma.AnnouncementUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
};
export type AnnouncementCreateaudienceInput = {
    set: string[];
};
export type AnnouncementUpdateaudienceInput = {
    set?: string[];
    push?: string | string[];
};
export type AnnouncementCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    body: string;
    audience?: Prisma.AnnouncementCreateaudienceInput | string[];
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUncheckedCreateWithoutAuthorInput = {
    id?: string;
    title: string;
    body: string;
    audience?: Prisma.AnnouncementCreateaudienceInput | string[];
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementCreateOrConnectWithoutAuthorInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutAuthorInput, Prisma.AnnouncementUncheckedCreateWithoutAuthorInput>;
};
export type AnnouncementCreateManyAuthorInputEnvelope = {
    data: Prisma.AnnouncementCreateManyAuthorInput | Prisma.AnnouncementCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    update: Prisma.XOR<Prisma.AnnouncementUpdateWithoutAuthorInput, Prisma.AnnouncementUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.AnnouncementCreateWithoutAuthorInput, Prisma.AnnouncementUncheckedCreateWithoutAuthorInput>;
};
export type AnnouncementUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.AnnouncementWhereUniqueInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateWithoutAuthorInput, Prisma.AnnouncementUncheckedUpdateWithoutAuthorInput>;
};
export type AnnouncementUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.AnnouncementScalarWhereInput;
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyWithoutAuthorInput>;
};
export type AnnouncementScalarWhereInput = {
    AND?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
    OR?: Prisma.AnnouncementScalarWhereInput[];
    NOT?: Prisma.AnnouncementScalarWhereInput | Prisma.AnnouncementScalarWhereInput[];
    id?: Prisma.UuidFilter<"Announcement"> | string;
    title?: Prisma.StringFilter<"Announcement"> | string;
    body?: Prisma.StringFilter<"Announcement"> | string;
    audience?: Prisma.StringNullableListFilter<"Announcement">;
    publishedAt?: Prisma.DateTimeNullableFilter<"Announcement"> | Date | string | null;
    authorId?: Prisma.UuidFilter<"Announcement"> | string;
    createdAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Announcement"> | Date | string;
};
export type AnnouncementCreateManyAuthorInput = {
    id?: string;
    title: string;
    body: string;
    audience?: Prisma.AnnouncementCreateaudienceInput | string[];
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type AnnouncementUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    audience?: Prisma.AnnouncementUpdateaudienceInput | string[];
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AnnouncementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    body?: boolean;
    audience?: boolean;
    publishedAt?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcement"]>;
export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    body?: boolean;
    audience?: boolean;
    publishedAt?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcement"]>;
export type AnnouncementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    body?: boolean;
    audience?: boolean;
    publishedAt?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    author?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["announcement"]>;
export type AnnouncementSelectScalar = {
    id?: boolean;
    title?: boolean;
    body?: boolean;
    audience?: boolean;
    publishedAt?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type AnnouncementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "body" | "audience" | "publishedAt" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["announcement"]>;
export type AnnouncementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type AnnouncementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    author?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $AnnouncementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Announcement";
    objects: {
        author: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        body: string;
        audience: string[];
        publishedAt: Date | null;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["announcement"]>;
    composites: {};
};
export type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload, S>;
export type AnnouncementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AnnouncementCountAggregateInputType | true;
};
export interface AnnouncementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Announcement'];
        meta: {
            name: 'Announcement';
        };
    };
    findUnique<T extends AnnouncementFindUniqueArgs>(args: Prisma.SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AnnouncementFindFirstArgs>(args?: Prisma.SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AnnouncementFindManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AnnouncementCreateArgs>(args: Prisma.SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AnnouncementCreateManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AnnouncementDeleteArgs>(args: Prisma.SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AnnouncementUpdateArgs>(args: Prisma.SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: Prisma.SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AnnouncementUpdateManyArgs>(args: Prisma.SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AnnouncementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AnnouncementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AnnouncementUpsertArgs>(args: Prisma.SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma.Prisma__AnnouncementClient<runtime.Types.Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AnnouncementCountArgs>(args?: Prisma.Subset<T, AnnouncementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AnnouncementCountAggregateOutputType> : number>;
    aggregate<T extends AnnouncementAggregateArgs>(args: Prisma.Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>;
    groupBy<T extends AnnouncementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AnnouncementGroupByArgs['orderBy'];
    } : {
        orderBy?: AnnouncementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AnnouncementFieldRefs;
}
export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    author<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AnnouncementFieldRefs {
    readonly id: Prisma.FieldRef<"Announcement", 'String'>;
    readonly title: Prisma.FieldRef<"Announcement", 'String'>;
    readonly body: Prisma.FieldRef<"Announcement", 'String'>;
    readonly audience: Prisma.FieldRef<"Announcement", 'String[]'>;
    readonly publishedAt: Prisma.FieldRef<"Announcement", 'DateTime'>;
    readonly authorId: Prisma.FieldRef<"Announcement", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Announcement", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Announcement", 'DateTime'>;
}
export type AnnouncementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnnouncementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AnnouncementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementCreateInput, Prisma.AnnouncementUncheckedCreateInput>;
};
export type AnnouncementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AnnouncementCreateManyInput | Prisma.AnnouncementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    data: Prisma.AnnouncementCreateManyInput | Prisma.AnnouncementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AnnouncementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementUpdateInput, Prisma.AnnouncementUncheckedUpdateInput>;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyInput>;
    where?: Prisma.AnnouncementWhereInput;
    limit?: number;
};
export type AnnouncementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AnnouncementUpdateManyMutationInput, Prisma.AnnouncementUncheckedUpdateManyInput>;
    where?: Prisma.AnnouncementWhereInput;
    limit?: number;
    include?: Prisma.AnnouncementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AnnouncementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
    create: Prisma.XOR<Prisma.AnnouncementCreateInput, Prisma.AnnouncementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AnnouncementUpdateInput, Prisma.AnnouncementUncheckedUpdateInput>;
};
export type AnnouncementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
    where: Prisma.AnnouncementWhereUniqueInput;
};
export type AnnouncementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AnnouncementWhereInput;
    limit?: number;
};
export type AnnouncementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AnnouncementSelect<ExtArgs> | null;
    omit?: Prisma.AnnouncementOmit<ExtArgs> | null;
    include?: Prisma.AnnouncementInclude<ExtArgs> | null;
};
