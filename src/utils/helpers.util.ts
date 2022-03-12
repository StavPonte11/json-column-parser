import { LIST_LIKE_TYPES, OBJECT_LIKE_TYPES, OPEN_DELIMITERS_MAP } from '../../common/consts.common';

export const combineArrays = (
	array1: Array<unknown>,
	array2: Array<unknown>
): Array<unknown> =>
	array1.flatMap((value1: unknown) =>
		array2.map((value2: unknown) => `${value1}${value2}`)
	);


/**
 * 
 * @param columnTypeRaw : Column type with no opening delimiters
 * @returns: Column type with the right opening delimiters
 */
export const replaceOpeningDelimiters = (columnTypeRaw: string): string => { 
	const listTypesRegex = new RegExp(
		combineArrays(LIST_LIKE_TYPES as unknown as Array<unknown>, Object.keys(OPEN_DELIMITERS_MAP).map((delimiter: string) => `\\${delimiter}`)).join('|'), 'g'
	); // Add \\ to escape [ and (
	const objectTypesRegex = new RegExp(combineArrays(OBJECT_LIKE_TYPES as unknown as Array<unknown>, Object.keys(OPEN_DELIMITERS_MAP).map((delimiter: string) => `\\${delimiter}`)).join('|'), 'g');

	return columnTypeRaw
		.replace(listTypesRegex, '[')
		.replace(objectTypesRegex, '{');

};

/**
 * TODO: Implement functionality
 * TODO: Add test
 * Replace the closing delimiter sign with the right closing bracket (]/})
 * @param columnTypeWithOpeningBrackets: Column type with opening brackets
 * @returns: Returns the column type with closing brackets
 */
export const replaceClosingDelimiter = (
	columnTypeWithOpeningBrackets: string
): string => {
	return '';
};

/**
 * TODO: Implement functionality
 * TODO: Add test
 * Wrap fields name and values with quotations for JSON parsing
 * @param columnTypeWithBrackets: Column type with both opening and closed brackets
 * @returns: Returns column type with quotations marks on fields
 */
export const wrapWithQuotes = (columnTypeWithBrackets: string): string => {
	return '';
};