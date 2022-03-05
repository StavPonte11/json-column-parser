import { DataSources } from './enum.common';
import { SupportedType } from './type.common';
export const OPEN_DELIMETERS_MAP = {
	'(': ')',
	'<': '>',
	'[': ']'
};
export const CLOSE_DELIMETERS_MAP = {
	')': '(',
	'>': '<',
	']': '['
};

const SUPPORTED_TYPES: SupportedType = {
	[DataSources.Hive]: ['array', 'struct'],
	[DataSources.Presto]: ['array', 'row'],
	[DataSources.Default]: ['array', 'struct']
};

export const LIST_LIKE_TYPES = ['array'] as const;
export const OBJECT_LIKE_TYPES = ['struct', 'row'] as const;
