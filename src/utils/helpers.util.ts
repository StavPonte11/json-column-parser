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
 * Replace the closing delimiter sign with the right closing bracket (]/})
 * @param columnTypeWithOpeningBrackets: Column type with opening brackets
 * @returns: Returns the column type with closing brackets
 */
export const replaceClosingDelimiter = (
	columnTypeWithOpeningBrackets: string
): string => {
	const openingBracketsArray: Array<string> = [];

	return columnTypeWithOpeningBrackets
		.split('') // Create array of chars
		.map((char: string) => {
			if (char === '[' || char === '{') {
				openingBracketsArray.push(char); // Add to opening brackets stack
			} else if (char === '>') {
				// Closing bracket
				const openingBracket = openingBracketsArray.pop();
				// Override the current char to the closing bracket
				char = openingBracket === '[' ? ']' : openingBracket === '{' ? '}' : '';
			}

			return char;
		})
		.join(''); // Join back to string
};

/**
 * TODO: Add test
 * Wrap fields name and values with quotations for JSON parsing
 * @param columnTypeWithBrackets: Column type with both opening and closed brackets
 * @returns: Returns column type with quotations marks on fields
 */
export const wrapWithQuotes = (columnTypeWithBrackets: string): string => columnTypeWithBrackets
	.split(',') // Array of fields and values
	.map((field: string) =>
		field
			.split(':') // Split by values
			.map((columnTypeShard: string) => {
				const { length } = columnTypeShard;
				const firstValidStartCharIndex = columnTypeShard.match('[a-zA-Z-_:]')?.index;
				const firstEndingBracketsIndex = columnTypeShard.match(/(\}|])/)?.index;

				if (
					(columnTypeShard[0] === '{' || columnTypeShard[0] === '[') &&
				(columnTypeShard[length - 1] === '}' || columnTypeShard[length - 1] === ']')
				) {
				// Both starts and ends with brackets
					return `${columnTypeShard.slice(
						0,
						firstValidStartCharIndex
					)}"${columnTypeShard.slice(
						firstValidStartCharIndex,
						firstEndingBracketsIndex
					)}"${columnTypeShard.slice(firstEndingBracketsIndex, length)}`;
				} else if (columnTypeShard[0] === '{' || columnTypeShard[0] === '[') {
				// Only starts with bracket
					return `${columnTypeShard.slice(
						0,
						firstValidStartCharIndex
					)}"${columnTypeShard.slice(firstValidStartCharIndex, length)}"`;
				} else if (
					columnTypeShard[length - 1] === '}' ||
				columnTypeShard[length - 1] === ']'
				) {
				// Only ends with brackets
					return `"${columnTypeShard.slice(
						0,
						firstEndingBracketsIndex
					)}"${columnTypeShard.slice(firstEndingBracketsIndex, length)}`;
				}

				return `"${columnTypeShard}"`;
			})
			.join(':')
	)
	.join(','); // Join back to string