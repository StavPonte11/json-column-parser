import { DataSources } from './enum.common';
import { SupportedType } from './types/type.common';
export const OPEN_DELIMITERS_MAP = {
	'(': ')',
	'<': '>',
	'[': ']',
	'{': '}'
};
export const CLOSE_DELIMITERS_MAP = {
	')': '(',
	'>': '<',
	']': '[',
	'}': '{'
};

export const SUPPORTED_TYPES: SupportedType = {
	[DataSources.Hive]: ['array', 'struct'],
	[DataSources.Presto]: ['array', 'row'],
	[DataSources.Default]: ['array', 'struct']
};

export const LIST_LIKE_TYPES = ['array'] as const;
export const OBJECT_LIKE_TYPES = ['struct', 'row'] as const;
