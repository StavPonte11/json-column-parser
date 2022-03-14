import {
	JSONType,
	ParsedColumn,
	RawColumn
} from '../../common/types/type.common';
import {
	replaceOpeningDelimiters,
	replaceClosingDelimiter,
	wrapWithQuotes
} from './helpers.util';

/**
 * OPTIONAL
 * Map and parse the column from one of the supported formats to json
 * @param columns: Columns array to parse
 * @returns Array: Array of json columns
 */
export const mapColumns = (columns: Array<RawColumn>): Array<ParsedColumn> => {
	return columns.map((column: RawColumn) => parseColumn(column));
};

/**
 * Parse a given column
 * @param column   : A raw column object
 * @returns Column : A parsed column object
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
export const parseColumnType = (columnType: string): string | JSONType => {
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
export const handleComplicatedColumnType = (
	columnTypeRaw: string
): JSONType => {
	// Replace all opening brackets
	let columnTypeToJson = replaceOpeningDelimiters(columnTypeRaw);

	// Replace all closing brackets
	columnTypeToJson = replaceClosingDelimiter(columnTypeToJson);

	// Wrap with quotes for json parse
	columnTypeToJson = wrapWithQuotes(columnTypeToJson);

	const jsonObjectColumnType = JSON.parse(columnTypeToJson);

	return jsonObjectColumnType;
};
