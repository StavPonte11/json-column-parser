import { combineArrays } from './helpers.util';
import {
	OBJECT_LIKE_TYPES,
	OPEN_DELIMETERS_MAP
} from '../../common/consts.common';
import {
	ParsedColumn,
	JSON,
	RawColumn,
	SupportedType
} from '../../common/type.common';
import {
	CLOSE_DELIMETERS_MAP,
	LIST_LIKE_TYPES
} from '../../common/consts.common';

/**
 * OPTIONAL -
 * Map and parse the column from one of the supported formats to json
 * @param columns: Columns array from atlas
 * @returns Array: Array of json
 */
export const mapColumns = (columns: Array<RawColumn>): Array<ParsedColumn> => {
	return columns.map((column: RawColumn) => parseColumn(column));
};
/**
 * Parse a given column
 * @param column   : Atlas column object
 * @returns Column : A column object
 */
const parseColumn = (column: RawColumn): ParsedColumn => {
	const parsedColumnType = parseColumnType(column.type);
	return {
		colName: column.name,
		colType: parsedColumnType,
		colDescription: column.description ?? ''
	};
};

/**
 *
 * @param columnType : A string representation of the column in the supported format
 * @returns The parsed column type => <struct to {}, <array to []...
 */
const parseColumnType = (columnType: string): string | JSON => {
	try {
		return handleComplicatedColumnType(columnType);
	} catch (error) {
		return columnType;
	}
};

/**
 * Helper function to handle complicated column types
 * @param columnTypeRaw: The formatted column type needed to be parsed
 * @returns: A json representation of the column type
 */
const handleComplicatedColumnType = (columnTypeRaw: string): JSON => {
	const listTypesRegex = new RegExp(
		combineArrays(LIST_LIKE_TYPES as unknown as Array<unknown>, Object.keys(OPEN_DELIMETERS_MAP)).join('|'), 'g'
	);
	const objectTypesRegex = new RegExp(combineArrays(OBJECT_LIKE_TYPES as unknown as Array<unknown>, Object.keys(OPEN_DELIMETERS_MAP)).join('|'), 'g');

	// Replace all opening brackets
	let columnTypeToJson = columnTypeRaw
		.replace(listTypesRegex, '[')
		.replace(objectTypesRegex, '{');

	// Replace all closing brackets
	columnTypeToJson = replaceClosingBrackets(columnTypeToJson);

	// Wrap with quotes for json parse
	columnTypeToJson = wrapWithQuotes(columnTypeToJson);

	const jsonObjectColumnType = JSON.parse(columnTypeToJson);

	return jsonObjectColumnType;
};

/**
 * Replace the '>' sign with the right closing bracket (]/})
 * @param columnTypeWithOpeningBrackets: Column type with opening brackets
 * @returns: Returns the column type with closing brackets
 */
const replaceClosingBrackets = (
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
 * Wrap fields name and values with quotations for JSON parsing
 * @param columnTypeWithBrackets: Column type with both opening and closed brackets
 * @returns: Returns column type with quotations marks on fields
 */
const wrapWithQuotes = (columnTypeWithBrackets: string): string =>
	columnTypeWithBrackets
		.split(',') // Array of fields and values
		.map((field: string) =>
			field
				.split(':') // Split by values
				.map((schemaShard: string) => {
					const { length } = schemaShard;
					const firstValidStartCharIndex =
						schemaShard.match('[a-zA-Z-_:]')?.index;
					const firstEndingBracketsIndex = schemaShard.match(/(\}|])/)?.index;

					if (
						(schemaShard[0] === '{' || schemaShard[0] === '[') &&
						(schemaShard[length - 1] === '}' || schemaShard[length - 1] === ']')
					) {
						// Both starts and ends with brackets
						return `${schemaShard.slice(
							0,
							firstValidStartCharIndex
						)}"${schemaShard.slice(
							firstValidStartCharIndex,
							firstEndingBracketsIndex
						)}"${schemaShard.slice(firstEndingBracketsIndex, length)}`;
					} else if (schemaShard[0] === '{' || schemaShard[0] === '[') {
						// Only starts with bracket
						return `${schemaShard.slice(
							0,
							firstValidStartCharIndex
						)}"${schemaShard.slice(firstValidStartCharIndex, length)}"`;
					} else if (
						schemaShard[length - 1] === '}' ||
						schemaShard[length - 1] === ']'
					) {
						// Only ends with brackets
						return `${schemaShard.slice(
							0,
							firstEndingBracketsIndex
						)}"${schemaShard.slice(firstEndingBracketsIndex, length)}"`;
					}

					return `"${schemaShard}"`;
				})
				.join(':')
		)
		.join(''); // Join back to string
