import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ClubSettingsModel = runtime.Types.Result.DefaultSelection<Prisma.$ClubSettingsPayload>;
export type AggregateClubSettings = {
    _count: ClubSettingsCountAggregateOutputType | null;
    _avg: ClubSettingsAvgAggregateOutputType | null;
    _sum: ClubSettingsSumAggregateOutputType | null;
    _min: ClubSettingsMinAggregateOutputType | null;
    _max: ClubSettingsMaxAggregateOutputType | null;
};
export type ClubSettingsAvgAggregateOutputType = {
    id: number | null;
    defaultHourlyRateCents: number | null;
    defaultTrainerRateCents: number | null;
};
export type ClubSettingsSumAggregateOutputType = {
    id: number | null;
    defaultHourlyRateCents: number | null;
    defaultTrainerRateCents: number | null;
};
export type ClubSettingsMinAggregateOutputType = {
    id: number | null;
    defaultHourlyRateCents: number | null;
    defaultTrainerRateCents: number | null;
    updatedAt: Date | null;
};
export type ClubSettingsMaxAggregateOutputType = {
    id: number | null;
    defaultHourlyRateCents: number | null;
    defaultTrainerRateCents: number | null;
    updatedAt: Date | null;
};
export type ClubSettingsCountAggregateOutputType = {
    id: number;
    defaultHourlyRateCents: number;
    defaultTrainerRateCents: number;
    updatedAt: number;
    _all: number;
};
export type ClubSettingsAvgAggregateInputType = {
    id?: true;
    defaultHourlyRateCents?: true;
    defaultTrainerRateCents?: true;
};
export type ClubSettingsSumAggregateInputType = {
    id?: true;
    defaultHourlyRateCents?: true;
    defaultTrainerRateCents?: true;
};
export type ClubSettingsMinAggregateInputType = {
    id?: true;
    defaultHourlyRateCents?: true;
    defaultTrainerRateCents?: true;
    updatedAt?: true;
};
export type ClubSettingsMaxAggregateInputType = {
    id?: true;
    defaultHourlyRateCents?: true;
    defaultTrainerRateCents?: true;
    updatedAt?: true;
};
export type ClubSettingsCountAggregateInputType = {
    id?: true;
    defaultHourlyRateCents?: true;
    defaultTrainerRateCents?: true;
    updatedAt?: true;
    _all?: true;
};
export type ClubSettingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClubSettingsWhereInput;
    orderBy?: Prisma.ClubSettingsOrderByWithRelationInput | Prisma.ClubSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ClubSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ClubSettingsCountAggregateInputType;
    _avg?: ClubSettingsAvgAggregateInputType;
    _sum?: ClubSettingsSumAggregateInputType;
    _min?: ClubSettingsMinAggregateInputType;
    _max?: ClubSettingsMaxAggregateInputType;
};
export type GetClubSettingsAggregateType<T extends ClubSettingsAggregateArgs> = {
    [P in keyof T & keyof AggregateClubSettings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClubSettings[P]> : Prisma.GetScalarType<T[P], AggregateClubSettings[P]>;
};
export type ClubSettingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClubSettingsWhereInput;
    orderBy?: Prisma.ClubSettingsOrderByWithAggregationInput | Prisma.ClubSettingsOrderByWithAggregationInput[];
    by: Prisma.ClubSettingsScalarFieldEnum[] | Prisma.ClubSettingsScalarFieldEnum;
    having?: Prisma.ClubSettingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClubSettingsCountAggregateInputType | true;
    _avg?: ClubSettingsAvgAggregateInputType;
    _sum?: ClubSettingsSumAggregateInputType;
    _min?: ClubSettingsMinAggregateInputType;
    _max?: ClubSettingsMaxAggregateInputType;
};
export type ClubSettingsGroupByOutputType = {
    id: number;
    defaultHourlyRateCents: number;
    defaultTrainerRateCents: number;
    updatedAt: Date;
    _count: ClubSettingsCountAggregateOutputType | null;
    _avg: ClubSettingsAvgAggregateOutputType | null;
    _sum: ClubSettingsSumAggregateOutputType | null;
    _min: ClubSettingsMinAggregateOutputType | null;
    _max: ClubSettingsMaxAggregateOutputType | null;
};
export type GetClubSettingsGroupByPayload<T extends ClubSettingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ClubSettingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ClubSettingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ClubSettingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ClubSettingsGroupByOutputType[P]>;
}>>;
export type ClubSettingsWhereInput = {
    AND?: Prisma.ClubSettingsWhereInput | Prisma.ClubSettingsWhereInput[];
    OR?: Prisma.ClubSettingsWhereInput[];
    NOT?: Prisma.ClubSettingsWhereInput | Prisma.ClubSettingsWhereInput[];
    id?: Prisma.IntFilter<"ClubSettings"> | number;
    defaultHourlyRateCents?: Prisma.IntFilter<"ClubSettings"> | number;
    defaultTrainerRateCents?: Prisma.IntFilter<"ClubSettings"> | number;
    updatedAt?: Prisma.DateTimeFilter<"ClubSettings"> | Date | string;
};
export type ClubSettingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClubSettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ClubSettingsWhereInput | Prisma.ClubSettingsWhereInput[];
    OR?: Prisma.ClubSettingsWhereInput[];
    NOT?: Prisma.ClubSettingsWhereInput | Prisma.ClubSettingsWhereInput[];
    defaultHourlyRateCents?: Prisma.IntFilter<"ClubSettings"> | number;
    defaultTrainerRateCents?: Prisma.IntFilter<"ClubSettings"> | number;
    updatedAt?: Prisma.DateTimeFilter<"ClubSettings"> | Date | string;
}, "id">;
export type ClubSettingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.ClubSettingsCountOrderByAggregateInput;
    _avg?: Prisma.ClubSettingsAvgOrderByAggregateInput;
    _max?: Prisma.ClubSettingsMaxOrderByAggregateInput;
    _min?: Prisma.ClubSettingsMinOrderByAggregateInput;
    _sum?: Prisma.ClubSettingsSumOrderByAggregateInput;
};
export type ClubSettingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ClubSettingsScalarWhereWithAggregatesInput | Prisma.ClubSettingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ClubSettingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ClubSettingsScalarWhereWithAggregatesInput | Prisma.ClubSettingsScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ClubSettings"> | number;
    defaultHourlyRateCents?: Prisma.IntWithAggregatesFilter<"ClubSettings"> | number;
    defaultTrainerRateCents?: Prisma.IntWithAggregatesFilter<"ClubSettings"> | number;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"ClubSettings"> | Date | string;
};
export type ClubSettingsCreateInput = {
    id?: number;
    defaultHourlyRateCents?: number;
    defaultTrainerRateCents?: number;
    updatedAt?: Date | string;
};
export type ClubSettingsUncheckedCreateInput = {
    id?: number;
    defaultHourlyRateCents?: number;
    defaultTrainerRateCents?: number;
    updatedAt?: Date | string;
};
export type ClubSettingsUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultHourlyRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultTrainerRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClubSettingsUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultHourlyRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultTrainerRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClubSettingsCreateManyInput = {
    id?: number;
    defaultHourlyRateCents?: number;
    defaultTrainerRateCents?: number;
    updatedAt?: Date | string;
};
export type ClubSettingsUpdateManyMutationInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultHourlyRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultTrainerRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClubSettingsUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultHourlyRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    defaultTrainerRateCents?: Prisma.IntFieldUpdateOperationsInput | number;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ClubSettingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClubSettingsAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
};
export type ClubSettingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClubSettingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type ClubSettingsSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    defaultHourlyRateCents?: Prisma.SortOrder;
    defaultTrainerRateCents?: Prisma.SortOrder;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type ClubSettingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    defaultHourlyRateCents?: boolean;
    defaultTrainerRateCents?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clubSettings"]>;
export type ClubSettingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    defaultHourlyRateCents?: boolean;
    defaultTrainerRateCents?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clubSettings"]>;
export type ClubSettingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    defaultHourlyRateCents?: boolean;
    defaultTrainerRateCents?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["clubSettings"]>;
export type ClubSettingsSelectScalar = {
    id?: boolean;
    defaultHourlyRateCents?: boolean;
    defaultTrainerRateCents?: boolean;
    updatedAt?: boolean;
};
export type ClubSettingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "defaultHourlyRateCents" | "defaultTrainerRateCents" | "updatedAt", ExtArgs["result"]["clubSettings"]>;
export type $ClubSettingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ClubSettings";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        defaultHourlyRateCents: number;
        defaultTrainerRateCents: number;
        updatedAt: Date;
    }, ExtArgs["result"]["clubSettings"]>;
    composites: {};
};
export type ClubSettingsGetPayload<S extends boolean | null | undefined | ClubSettingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload, S>;
export type ClubSettingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ClubSettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ClubSettingsCountAggregateInputType | true;
};
export interface ClubSettingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ClubSettings'];
        meta: {
            name: 'ClubSettings';
        };
    };
    findUnique<T extends ClubSettingsFindUniqueArgs>(args: Prisma.SelectSubset<T, ClubSettingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ClubSettingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ClubSettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ClubSettingsFindFirstArgs>(args?: Prisma.SelectSubset<T, ClubSettingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ClubSettingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ClubSettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ClubSettingsFindManyArgs>(args?: Prisma.SelectSubset<T, ClubSettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ClubSettingsCreateArgs>(args: Prisma.SelectSubset<T, ClubSettingsCreateArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ClubSettingsCreateManyArgs>(args?: Prisma.SelectSubset<T, ClubSettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ClubSettingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ClubSettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ClubSettingsDeleteArgs>(args: Prisma.SelectSubset<T, ClubSettingsDeleteArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ClubSettingsUpdateArgs>(args: Prisma.SelectSubset<T, ClubSettingsUpdateArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ClubSettingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ClubSettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ClubSettingsUpdateManyArgs>(args: Prisma.SelectSubset<T, ClubSettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ClubSettingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ClubSettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ClubSettingsUpsertArgs>(args: Prisma.SelectSubset<T, ClubSettingsUpsertArgs<ExtArgs>>): Prisma.Prisma__ClubSettingsClient<runtime.Types.Result.GetResult<Prisma.$ClubSettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ClubSettingsCountArgs>(args?: Prisma.Subset<T, ClubSettingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ClubSettingsCountAggregateOutputType> : number>;
    aggregate<T extends ClubSettingsAggregateArgs>(args: Prisma.Subset<T, ClubSettingsAggregateArgs>): Prisma.PrismaPromise<GetClubSettingsAggregateType<T>>;
    groupBy<T extends ClubSettingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ClubSettingsGroupByArgs['orderBy'];
    } : {
        orderBy?: ClubSettingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ClubSettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ClubSettingsFieldRefs;
}
export interface Prisma__ClubSettingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ClubSettingsFieldRefs {
    readonly id: Prisma.FieldRef<"ClubSettings", 'Int'>;
    readonly defaultHourlyRateCents: Prisma.FieldRef<"ClubSettings", 'Int'>;
    readonly defaultTrainerRateCents: Prisma.FieldRef<"ClubSettings", 'Int'>;
    readonly updatedAt: Prisma.FieldRef<"ClubSettings", 'DateTime'>;
}
export type ClubSettingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where: Prisma.ClubSettingsWhereUniqueInput;
};
export type ClubSettingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where: Prisma.ClubSettingsWhereUniqueInput;
};
export type ClubSettingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where?: Prisma.ClubSettingsWhereInput;
    orderBy?: Prisma.ClubSettingsOrderByWithRelationInput | Prisma.ClubSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ClubSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClubSettingsScalarFieldEnum | Prisma.ClubSettingsScalarFieldEnum[];
};
export type ClubSettingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where?: Prisma.ClubSettingsWhereInput;
    orderBy?: Prisma.ClubSettingsOrderByWithRelationInput | Prisma.ClubSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ClubSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClubSettingsScalarFieldEnum | Prisma.ClubSettingsScalarFieldEnum[];
};
export type ClubSettingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where?: Prisma.ClubSettingsWhereInput;
    orderBy?: Prisma.ClubSettingsOrderByWithRelationInput | Prisma.ClubSettingsOrderByWithRelationInput[];
    cursor?: Prisma.ClubSettingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ClubSettingsScalarFieldEnum | Prisma.ClubSettingsScalarFieldEnum[];
};
export type ClubSettingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClubSettingsCreateInput, Prisma.ClubSettingsUncheckedCreateInput>;
};
export type ClubSettingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ClubSettingsCreateManyInput | Prisma.ClubSettingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClubSettingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    data: Prisma.ClubSettingsCreateManyInput | Prisma.ClubSettingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ClubSettingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClubSettingsUpdateInput, Prisma.ClubSettingsUncheckedUpdateInput>;
    where: Prisma.ClubSettingsWhereUniqueInput;
};
export type ClubSettingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ClubSettingsUpdateManyMutationInput, Prisma.ClubSettingsUncheckedUpdateManyInput>;
    where?: Prisma.ClubSettingsWhereInput;
    limit?: number;
};
export type ClubSettingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ClubSettingsUpdateManyMutationInput, Prisma.ClubSettingsUncheckedUpdateManyInput>;
    where?: Prisma.ClubSettingsWhereInput;
    limit?: number;
};
export type ClubSettingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where: Prisma.ClubSettingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ClubSettingsCreateInput, Prisma.ClubSettingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ClubSettingsUpdateInput, Prisma.ClubSettingsUncheckedUpdateInput>;
};
export type ClubSettingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
    where: Prisma.ClubSettingsWhereUniqueInput;
};
export type ClubSettingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ClubSettingsWhereInput;
    limit?: number;
};
export type ClubSettingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ClubSettingsSelect<ExtArgs> | null;
    omit?: Prisma.ClubSettingsOmit<ExtArgs> | null;
};
