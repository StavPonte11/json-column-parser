import { DataSources } from '../enum.common';
import { LIST_LIKE_TYPES, OBJECT_LIKE_TYPES } from '../consts.common';

export type ParsedColumn = {
	colName: string,
	colType: string | JSON,
	colDescription: string | undefined
};

export type JSON = Record<string, unknown>;

export type RawColumn = {
	name: string,
	type: string,
	description: string | undefined
};
type ListLikeTypes = (typeof LIST_LIKE_TYPES)[number];
type ObjectLikeTypes = (typeof OBJECT_LIKE_TYPES)[number];

type OptionalSupportedTypes = ListLikeTypes | ObjectLikeTypes;

export type SupportedType = Record<DataSources, Array<OptionalSupportedTypes>>;
