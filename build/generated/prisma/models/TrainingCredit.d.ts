import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TrainingCreditModel = runtime.Types.Result.DefaultSelection<Prisma.$TrainingCreditPayload>;
export type AggregateTrainingCredit = {
    _count: TrainingCreditCountAggregateOutputType | null;
    _avg: TrainingCreditAvgAggregateOutputType | null;
    _sum: TrainingCreditSumAggregateOutputType | null;
    _min: TrainingCreditMinAggregateOutputType | null;
    _max: TrainingCreditMaxAggregateOutputType | null;
};
export type TrainingCreditAvgAggregateOutputType = {
    balanceMinutes: number | null;
    reservedMinutes: number | null;
};
export type TrainingCreditSumAggregateOutputType = {
    balanceMinutes: number | null;
    reservedMinutes: number | null;
};
export type TrainingCreditMinAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    balanceMinutes: number | null;
    reservedMinutes: number | null;
    updatedAt: Date | null;
};
export type TrainingCreditMaxAggregateOutputType = {
    id: string | null;
    profileId: string | null;
    balanceMinutes: number | null;
    reservedMinutes: number | null;
    updatedAt: Date | null;
};
export type TrainingCreditCountAggregateOutputType = {
    id: number;
    profileId: number;
    balanceMinutes: number;
    reservedMinutes: number;
    updatedAt: number;
    _all: number;
};
export type TrainingCreditAvgAggregateInputType = {
    balanceMinutes?: true;
    reservedMinutes?: true;
};
export type TrainingCreditSumAggregateInputType = {
    balanceMinutes?: true;
    reservedMinutes?: true;
};
export type TrainingCreditMinAggregateInputType = {
    id?: true;
    profileId?: true;
    balanceMinutes?: true;
    reservedMinutes?: true;
    updatedAt?: true;
};
export type TrainingCreditMaxAggregateInputType = {
    id?: true;
    profileId?: true;
    balanceMinutes?: true;
    reservedMinutes?: true;
    updatedAt?: true;
};
export type TrainingCreditCountAggregateInputType = {
    id?: true;
    profileId?: true;
    balanceMinutes?: true;
    reservedMinutes?: true;
    updatedAt?: true;
    _all?: true;
};
export type TrainingCreditAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditWhereInput;
    orderBy?: Prisma.TrainingCreditOrderByWithRelationInput | Prisma.TrainingCreditOrderByWithRelationInput[];
    cursor?: Prisma.TrainingCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TrainingCreditCountAggregateInputType;
    _avg?: TrainingCreditAvgAggregateInputType;
    _sum?: TrainingCreditSumAggregateInputType;
    _min?: TrainingCreditMinAggregateInputType;
    _max?: TrainingCreditMaxAggregateInputType;
};
export type GetTrainingCreditAggregateType<T extends TrainingCreditAggregateArgs> = {
    [P in keyof T & keyof AggregateTrainingCredit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTrainingCredit[P]> : Prisma.GetScalarType<T[P], AggregateTrainingCredit[P]>;
};
export type TrainingCreditGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditWhereInput;
    orderBy?: Prisma.TrainingCreditOrderByWithAggregationInput | Prisma.TrainingCreditOrderByWithAggregationInput[];
    by: Prisma.TrainingCreditScalarFieldEnum[] | Prisma.TrainingCreditScalarFieldEnum;
    having?: Prisma.TrainingCreditScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TrainingCreditCountAggregateInputType | true;
    _avg?: TrainingCreditAvgAggregateInputType;
    _sum?: TrainingCreditSumAggregateInputType;
    _min?: TrainingCreditMinAggregateInputType;
    _max?: TrainingCreditMaxAggregateInputType;
};
export type TrainingCreditGroupByOutputType = {
    id: string;
    profileId: string;
    balanceMinutes: number;
    reservedMinutes: number;
    updatedAt: Date;
    _count: TrainingCreditCountAggregateOutputType | null;
    _avg: TrainingCreditAvgAggregateOutputType | null;
    _sum: TrainingCreditSumAggregateOutputType | null;
    _min: TrainingCreditMinAggregateOutputType | null;
    _max: TrainingCreditMaxAggregateOutputType | null;
};
export type GetTrainingCreditGroupByPayload<T extends TrainingCreditGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TrainingCreditGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TrainingCreditGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TrainingCreditGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TrainingCreditGroupByOutputType[P]>;
}>>;
export type TrainingCreditWhereInput = {
    AND?: Prisma.TrainingCreditWhereInput | Prisma.TrainingCreditWhereInput[];
    OR?: Prisma.TrainingCreditWhereInput[];
    NOT?: Prisma.TrainingCreditWhereInput | Prisma.TrainingCreditWhereInput[];
    id?: Prisma.UuidFilter<"TrainingCredit"> | string;
    profileId?: Prisma.UuidFilter<"TrainingCredit"> | string;
    balanceMinutes?: Prisma.IntFilter<"TrainingCredit"> | number;
    reservedMinutes?: Prisma.IntFilter<"TrainingCredit"> | number;
    updatedAt?: Prisma.DateTimeFilter<"TrainingCredit"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
};
export type TrainingCreditOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    profile?: Prisma.ProfileOrderByWithRelationInput;
};
export type TrainingCreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    profileId?: string;
    AND?: Prisma.TrainingCreditWhereInput | Prisma.TrainingCreditWhereInput[];
    OR?: Prisma.TrainingCreditWhereInput[];
    NOT?: Prisma.TrainingCreditWhereInput | Prisma.TrainingCreditWhereInput[];
    balanceMinutes?: Prisma.IntFilter<"TrainingCredit"> | number;
    reservedMinutes?: Prisma.IntFilter<"TrainingCredit"> | number;
    updatedAt?: Prisma.DateTimeFilter<"TrainingCredit"> | Date | string;
    profile?: Prisma.XOR<Prisma.ProfileScalarRelationFilter, Prisma.ProfileWhereInput>;
}, "id" | "profileId">;
export type TrainingCreditOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.TrainingCreditCountOrderByAggregateInput;
    _avg?: Prisma.TrainingCreditAvgOrderByAggregateInput;
    _max?: Prisma.TrainingCreditMaxOrderByAggregateInput;
    _min?: Prisma.TrainingCreditMinOrderByAggregateInput;
    _sum?: Prisma.TrainingCreditSumOrderByAggregateInput;
};
export type TrainingCreditScalarWhereWithAggregatesInput = {
    AND?: Prisma.TrainingCreditScalarWhereWithAggregatesInput | Prisma.TrainingCreditScalarWhereWithAggregatesInput[];
    OR?: Prisma.TrainingCreditScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TrainingCreditScalarWhereWithAggregatesInput | Prisma.TrainingCreditScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TrainingCredit"> | string;
    profileId?: Prisma.UuidWithAggregatesFilter<"TrainingCredit"> | string;
    balanceMinutes?: Prisma.IntWithAggregatesFilter<"TrainingCredit"> | number;
    reservedMinutes?: Prisma.IntWithAggregatesFilter<"TrainingCredit"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"TrainingCredit"> | Date | string;
};
export type TrainingCreditCreateInput = {
    id?: string;
    balanceMinutes?: number;
    reservedMinutes?: number;
    updatedAt?: Date | string;
    profile: Prisma.ProfileCreateNestedOneWithoutCreditInput;
};
export type TrainingCreditUncheckedCreateInput = {
    id?: string;
    profileId: string;
    balanceMinutes?: number;
    reservedMinutes?: number;
    updatedAt?: Date | string;
};
export type TrainingCreditUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    balanceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    profile?: Prisma.ProfileUpdateOneRequiredWithoutCreditNestedInput;
};
export type TrainingCreditUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    balanceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditCreateManyInput = {
    id?: string;
    profileId: string;
    balanceMinutes?: number;
    reservedMinutes?: number;
    updatedAt?: Date | string;
};
export type TrainingCreditUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    balanceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    profileId?: Prisma.StringFieldUpdateOperationsInput | string;
    balanceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditNullableScalarRelationFilter = {
    is?: Prisma.TrainingCreditWhereInput | null;
    isNot?: Prisma.TrainingCreditWhereInput | null;
};
export type TrainingCreditCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingCreditAvgOrderByAggregateInput = {
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
};
export type TrainingCreditMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingCreditMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    profileId?: Prisma.SortOrder;
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type TrainingCreditSumOrderByAggregateInput = {
    balanceMinutes?: Prisma.SortOrder;
    reservedMinutes?: Prisma.SortOrder;
};
export type TrainingCreditCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditCreateWithoutProfileInput, Prisma.TrainingCreditUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.TrainingCreditCreateOrConnectWithoutProfileInput;
    connect?: Prisma.TrainingCreditWhereUniqueInput;
};
export type TrainingCreditUncheckedCreateNestedOneWithoutProfileInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditCreateWithoutProfileInput, Prisma.TrainingCreditUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.TrainingCreditCreateOrConnectWithoutProfileInput;
    connect?: Prisma.TrainingCreditWhereUniqueInput;
};
export type TrainingCreditUpdateOneWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditCreateWithoutProfileInput, Prisma.TrainingCreditUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.TrainingCreditCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.TrainingCreditUpsertWithoutProfileInput;
    disconnect?: Prisma.TrainingCreditWhereInput | boolean;
    delete?: Prisma.TrainingCreditWhereInput | boolean;
    connect?: Prisma.TrainingCreditWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrainingCreditUpdateToOneWithWhereWithoutProfileInput, Prisma.TrainingCreditUpdateWithoutProfileInput>, Prisma.TrainingCreditUncheckedUpdateWithoutProfileInput>;
};
export type TrainingCreditUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: Prisma.XOR<Prisma.TrainingCreditCreateWithoutProfileInput, Prisma.TrainingCreditUncheckedCreateWithoutProfileInput>;
    connectOrCreate?: Prisma.TrainingCreditCreateOrConnectWithoutProfileInput;
    upsert?: Prisma.TrainingCreditUpsertWithoutProfileInput;
    disconnect?: Prisma.TrainingCreditWhereInput | boolean;
    delete?: Prisma.TrainingCreditWhereInput | boolean;
    connect?: Prisma.TrainingCreditWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TrainingCreditUpdateToOneWithWhereWithoutProfileInput, Prisma.TrainingCreditUpdateWithoutProfileInput>, Prisma.TrainingCreditUncheckedUpdateWithoutProfileInput>;
};
export type TrainingCreditCreateWithoutProfileInput = {
    id?: string;
    balanceMinutes?: number;
    reservedMinutes?: number;
    updatedAt?: Date | string;
};
export type TrainingCreditUncheckedCreateWithoutProfileInput = {
    id?: string;
    balanceMinutes?: number;
    reservedMinutes?: number;
    updatedAt?: Date | string;
};
export type TrainingCreditCreateOrConnectWithoutProfileInput = {
    where: Prisma.TrainingCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreditCreateWithoutProfileInput, Prisma.TrainingCreditUncheckedCreateWithoutProfileInput>;
};
export type TrainingCreditUpsertWithoutProfileInput = {
    update: Prisma.XOR<Prisma.TrainingCreditUpdateWithoutProfileInput, Prisma.TrainingCreditUncheckedUpdateWithoutProfileInput>;
    create: Prisma.XOR<Prisma.TrainingCreditCreateWithoutProfileInput, Prisma.TrainingCreditUncheckedCreateWithoutProfileInput>;
    where?: Prisma.TrainingCreditWhereInput;
};
export type TrainingCreditUpdateToOneWithWhereWithoutProfileInput = {
    where?: Prisma.TrainingCreditWhereInput;
    data: Prisma.XOR<Prisma.TrainingCreditUpdateWithoutProfileInput, Prisma.TrainingCreditUncheckedUpdateWithoutProfileInput>;
};
export type TrainingCreditUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    balanceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditUncheckedUpdateWithoutProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    balanceMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    reservedMinutes?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TrainingCreditSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    balanceMinutes?: boolean;
    reservedMinutes?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingCredit"]>;
export type TrainingCreditSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    balanceMinutes?: boolean;
    reservedMinutes?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingCredit"]>;
export type TrainingCreditSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    profileId?: boolean;
    balanceMinutes?: boolean;
    reservedMinutes?: boolean;
    updatedAt?: boolean;
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["trainingCredit"]>;
export type TrainingCreditSelectScalar = {
    id?: boolean;
    profileId?: boolean;
    balanceMinutes?: boolean;
    reservedMinutes?: boolean;
    updatedAt?: boolean;
};
export type TrainingCreditOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "profileId" | "balanceMinutes" | "reservedMinutes" | "updatedAt", ExtArgs["result"]["trainingCredit"]>;
export type TrainingCreditInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type TrainingCreditIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type TrainingCreditIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    profile?: boolean | Prisma.ProfileDefaultArgs<ExtArgs>;
};
export type $TrainingCreditPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TrainingCredit";
    objects: {
        profile: Prisma.$ProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        profileId: string;
        balanceMinutes: number;
        reservedMinutes: number;
        updatedAt: Date;
    }, ExtArgs["result"]["trainingCredit"]>;
    composites: {};
};
export type TrainingCreditGetPayload<S extends boolean | null | undefined | TrainingCreditDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload, S>;
export type TrainingCreditCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TrainingCreditFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TrainingCreditCountAggregateInputType | true;
};
export interface TrainingCreditDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TrainingCredit'];
        meta: {
            name: 'TrainingCredit';
        };
    };
    findUnique<T extends TrainingCreditFindUniqueArgs>(args: Prisma.SelectSubset<T, TrainingCreditFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TrainingCreditFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TrainingCreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TrainingCreditFindFirstArgs>(args?: Prisma.SelectSubset<T, TrainingCreditFindFirstArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TrainingCreditFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TrainingCreditFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TrainingCreditFindManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TrainingCreditCreateArgs>(args: Prisma.SelectSubset<T, TrainingCreditCreateArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TrainingCreditCreateManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TrainingCreditCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TrainingCreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TrainingCreditDeleteArgs>(args: Prisma.SelectSubset<T, TrainingCreditDeleteArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TrainingCreditUpdateArgs>(args: Prisma.SelectSubset<T, TrainingCreditUpdateArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TrainingCreditDeleteManyArgs>(args?: Prisma.SelectSubset<T, TrainingCreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TrainingCreditUpdateManyArgs>(args: Prisma.SelectSubset<T, TrainingCreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TrainingCreditUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TrainingCreditUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TrainingCreditUpsertArgs>(args: Prisma.SelectSubset<T, TrainingCreditUpsertArgs<ExtArgs>>): Prisma.Prisma__TrainingCreditClient<runtime.Types.Result.GetResult<Prisma.$TrainingCreditPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TrainingCreditCountArgs>(args?: Prisma.Subset<T, TrainingCreditCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TrainingCreditCountAggregateOutputType> : number>;
    aggregate<T extends TrainingCreditAggregateArgs>(args: Prisma.Subset<T, TrainingCreditAggregateArgs>): Prisma.PrismaPromise<GetTrainingCreditAggregateType<T>>;
    groupBy<T extends TrainingCreditGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TrainingCreditGroupByArgs['orderBy'];
    } : {
        orderBy?: TrainingCreditGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TrainingCreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrainingCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TrainingCreditFieldRefs;
}
export interface Prisma__TrainingCreditClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    profile<T extends Prisma.ProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__ProfileClient<runtime.Types.Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TrainingCreditFieldRefs {
    readonly id: Prisma.FieldRef<"TrainingCredit", 'String'>;
    readonly profileId: Prisma.FieldRef<"TrainingCredit", 'String'>;
    readonly balanceMinutes: Prisma.FieldRef<"TrainingCredit", 'Int'>;
    readonly reservedMinutes: Prisma.FieldRef<"TrainingCredit", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"TrainingCredit", 'DateTime'>;
}
export type TrainingCreditFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditWhereUniqueInput;
};
export type TrainingCreditFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditWhereUniqueInput;
};
export type TrainingCreditFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where?: Prisma.TrainingCreditWhereInput;
    orderBy?: Prisma.TrainingCreditOrderByWithRelationInput | Prisma.TrainingCreditOrderByWithRelationInput[];
    cursor?: Prisma.TrainingCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingCreditScalarFieldEnum | Prisma.TrainingCreditScalarFieldEnum[];
};
export type TrainingCreditFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where?: Prisma.TrainingCreditWhereInput;
    orderBy?: Prisma.TrainingCreditOrderByWithRelationInput | Prisma.TrainingCreditOrderByWithRelationInput[];
    cursor?: Prisma.TrainingCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingCreditScalarFieldEnum | Prisma.TrainingCreditScalarFieldEnum[];
};
export type TrainingCreditFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where?: Prisma.TrainingCreditWhereInput;
    orderBy?: Prisma.TrainingCreditOrderByWithRelationInput | Prisma.TrainingCreditOrderByWithRelationInput[];
    cursor?: Prisma.TrainingCreditWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TrainingCreditScalarFieldEnum | Prisma.TrainingCreditScalarFieldEnum[];
};
export type TrainingCreditCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainingCreditCreateInput, Prisma.TrainingCreditUncheckedCreateInput>;
};
export type TrainingCreditCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TrainingCreditCreateManyInput | Prisma.TrainingCreditCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TrainingCreditCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    data: Prisma.TrainingCreditCreateManyInput | Prisma.TrainingCreditCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TrainingCreditIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TrainingCreditUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainingCreditUpdateInput, Prisma.TrainingCreditUncheckedUpdateInput>;
    where: Prisma.TrainingCreditWhereUniqueInput;
};
export type TrainingCreditUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TrainingCreditUpdateManyMutationInput, Prisma.TrainingCreditUncheckedUpdateManyInput>;
    where?: Prisma.TrainingCreditWhereInput;
    limit?: number;
};
export type TrainingCreditUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TrainingCreditUpdateManyMutationInput, Prisma.TrainingCreditUncheckedUpdateManyInput>;
    where?: Prisma.TrainingCreditWhereInput;
    limit?: number;
    include?: Prisma.TrainingCreditIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TrainingCreditUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditWhereUniqueInput;
    create: Prisma.XOR<Prisma.TrainingCreditCreateInput, Prisma.TrainingCreditUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TrainingCreditUpdateInput, Prisma.TrainingCreditUncheckedUpdateInput>;
};
export type TrainingCreditDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
    where: Prisma.TrainingCreditWhereUniqueInput;
};
export type TrainingCreditDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TrainingCreditWhereInput;
    limit?: number;
};
export type TrainingCreditDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TrainingCreditSelect<ExtArgs> | null;
    omit?: Prisma.TrainingCreditOmit<ExtArgs> | null;
    include?: Prisma.TrainingCreditInclude<ExtArgs> | null;
};
