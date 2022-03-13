import { hiveOpeningDelimitersTestExpectations } from '../TestsExpectations/OpeningDelimiters';
import {
	replaceOpeningDelimiters,
	replaceClosingDelimiter
} from '../../../src/utils/helpers.util';
import { hiveClosingDelimitersTestExpectations } from '../TestsExpectations/ClosingDelimiters';
import { wrapWithQuotes } from '../../../src/utils/helpers.util';
import { hiveColumnsToTest } from '../../testSubjects';
import { hiveWrapWithQuotesTestExpectations } from '../TestsExpectations/WrapWithQuotes';
import { handleComplicatedColumnType, parseColumnType } from '../../../src/utils/parseColumn.util';
import { hiveParseColumnTypeTestExpectations } from '../TestsExpectations/ParseColumn';
describe('Hive opening delimiters tests', () => {
	it('Simple object', () => {
		const response = replaceOpeningDelimiters(hiveColumnsToTest.simpleObject);
		expect(response).toEqual(
			hiveOpeningDelimitersTestExpectations.simpleObject
		);
	});
	it('Simple list', () => {
		const response = replaceOpeningDelimiters(hiveColumnsToTest.simpleList);
		expect(response).toEqual(hiveOpeningDelimitersTestExpectations.simpleList);
	});

	it('Multiple Values Object', () => {
		const response = replaceOpeningDelimiters(
			hiveColumnsToTest.multipleValuesObject
		);
		expect(response).toEqual(
			hiveOpeningDelimitersTestExpectations.multipleValuesObject
		);
	});
	it('Multiple Values List', () => {
		const response = replaceOpeningDelimiters(
			hiveColumnsToTest.multipleValuesList
		);
		expect(response).toEqual(
			hiveOpeningDelimitersTestExpectations.multipleValuesList
		);
	});

	describe('MultiNested', () => {
		it('MultiNested1', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.multiNested1);
			expect(response).toEqual(
				hiveOpeningDelimitersTestExpectations.multiNested1
			);
		});

		it('MultiNested2', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.multiNested2);
			expect(response).toEqual(
				hiveOpeningDelimitersTestExpectations.multiNested2
			);
		});

		it('MultiNested3', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.multiNested3);
			expect(response).toEqual(
				hiveOpeningDelimitersTestExpectations.multiNested3
			);
		});
	});

	describe('Invalid', () => {
		it('should still work1', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.invalid1);
			expect(response).toEqual(hiveOpeningDelimitersTestExpectations.invalid1);
		});
		it('should still work2', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.invalid2);
			expect(response).toEqual(hiveOpeningDelimitersTestExpectations.invalid2);
		});

		it('should make no changes', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.invalid3);
			expect(response).toEqual(hiveColumnsToTest.invalid3);
		});
	});
});

/**
 * The test were build in modularity so the result of the previous tests group,
 * the argument to test for the next group
 */
describe('Hive closing delimiters tests', () => {
	it('Simple object', () => {
		const response = replaceClosingDelimiter(
			hiveOpeningDelimitersTestExpectations.simpleObject
		);
		expect(response).toEqual(
			hiveClosingDelimitersTestExpectations.simpleObject
		);
	});
	it('Simple list', () => {
		const response = replaceClosingDelimiter(
			hiveOpeningDelimitersTestExpectations.simpleList
		);
		expect(response).toEqual(hiveClosingDelimitersTestExpectations.simpleList);
	});

	it('Multiple Values Object', () => {
		const response = replaceClosingDelimiter(
			hiveOpeningDelimitersTestExpectations.multipleValuesObject
		);
		expect(response).toEqual(
			hiveClosingDelimitersTestExpectations.multipleValuesObject
		);
	});
	it('Multiple Values List', () => {
		const response = replaceClosingDelimiter(
			hiveOpeningDelimitersTestExpectations.multipleValuesList
		);
		expect(response).toEqual(
			hiveClosingDelimitersTestExpectations.multipleValuesList
		);
	});

	describe('MultiNested', () => {
		it('MultiNested1', () => {
			const response = replaceClosingDelimiter(
				hiveOpeningDelimitersTestExpectations.multiNested1
			);
			expect(response).toEqual(
				hiveClosingDelimitersTestExpectations.multiNested1
			);
		});

		it('MultiNested2', () => {
			const response = replaceClosingDelimiter(
				hiveOpeningDelimitersTestExpectations.multiNested2
			);
			expect(response).toEqual(
				hiveClosingDelimitersTestExpectations.multiNested2
			);
		});

		it('MultiNested3', () => {
			const response = replaceClosingDelimiter(
				hiveOpeningDelimitersTestExpectations.multiNested3
			);
			expect(response).toEqual(
				hiveClosingDelimitersTestExpectations.multiNested3
			);
		});
	});

	describe('Invalid', () => {
		it('should throw error', () => {
			try {
				replaceClosingDelimiter(hiveOpeningDelimitersTestExpectations.invalid1);
				expect(true).toBeFalsy();
			} catch (error) {
				expect((error as any).message).toEqual('Number of opening delimiters is greater than closing');

			}
		});
		it('should still work', () => {
			const response = replaceClosingDelimiter(
				hiveOpeningDelimitersTestExpectations.invalid2
			);
			expect(response).toEqual(hiveClosingDelimitersTestExpectations.invalid2);
		});

		it('should not change', () => {
			const response = replaceClosingDelimiter(
				hiveOpeningDelimitersTestExpectations.invalid3
			);
			expect(response).toEqual(hiveOpeningDelimitersTestExpectations.invalid3);
		});
	});
});

describe('Hive wrap with quotes tests', () => {
	it('Simple object', () => {
		const response = wrapWithQuotes(
			hiveClosingDelimitersTestExpectations.simpleObject
		);
		expect(response).toEqual(hiveWrapWithQuotesTestExpectations.simpleObject);
	});
	it('Simple list', () => {
		const response = wrapWithQuotes(
			hiveClosingDelimitersTestExpectations.simpleList
		);
		expect(response).toEqual(hiveWrapWithQuotesTestExpectations.simpleList);
	});

	it('Multiple Values Object', () => {
		const response = wrapWithQuotes(
			hiveClosingDelimitersTestExpectations.multipleValuesObject
		);
		expect(response).toEqual(
			hiveWrapWithQuotesTestExpectations.multipleValuesObject
		);
	});
	it('Multiple Values List', () => {
		const response = wrapWithQuotes(
			hiveClosingDelimitersTestExpectations.multipleValuesList
		);
		expect(response).toEqual(
			hiveWrapWithQuotesTestExpectations.multipleValuesList
		);
	});

	describe('MultiNested', () => {
		it('MultiNested1', () => {
			const response = wrapWithQuotes(
				hiveClosingDelimitersTestExpectations.multiNested1
			);
			expect(response).toEqual(hiveWrapWithQuotesTestExpectations.multiNested1);
		});

		it('MultiNested2', () => {
			const response = wrapWithQuotes(
				hiveClosingDelimitersTestExpectations.multiNested2
			);
			expect(response).toEqual(hiveWrapWithQuotesTestExpectations.multiNested2);
		});

		it('MultiNested3', () => {
			const response = wrapWithQuotes(
				hiveClosingDelimitersTestExpectations.multiNested3
			);
			expect(response).toEqual(hiveWrapWithQuotesTestExpectations.multiNested3);
		});
	});

	describe('Invalid', () => {
		it('should still work1', () => {
			const response = wrapWithQuotes(
				hiveClosingDelimitersTestExpectations.invalid1
			);
			expect(response).toEqual(hiveWrapWithQuotesTestExpectations.invalid1);
		});

		it('should still work2', () => {
			const response = wrapWithQuotes(
				hiveClosingDelimitersTestExpectations.invalid2
			);
			expect(response).toEqual(hiveWrapWithQuotesTestExpectations.invalid2);
		});

		it('should still work3', () => {
			const response = wrapWithQuotes(
				hiveClosingDelimitersTestExpectations.invalid3
			);
			expect(response).toEqual(hiveWrapWithQuotesTestExpectations.invalid3);
		});
	});
});

describe('Hive parse column type', () => {
	it('Simple object', () => {
		const response = parseColumnType(hiveColumnsToTest.simpleObject);
		expect(response).toEqual(hiveParseColumnTypeTestExpectations.simpleObject);
	});
	it('Simple list', () => {
		const response = parseColumnType(hiveColumnsToTest.simpleList);
		expect(response).toEqual(hiveParseColumnTypeTestExpectations.simpleList);
	});

	it('Multiple Values Object', () => {
		const response = parseColumnType(hiveColumnsToTest.multipleValuesObject);

		expect(response).toEqual(
			hiveParseColumnTypeTestExpectations.multipleValuesObject
		);
	});
	it('Multiple Values List', () => {
		const response = parseColumnType(hiveColumnsToTest.multipleValuesList);
		expect(response).toEqual(
			hiveParseColumnTypeTestExpectations.multipleValuesList
		);
	});

	describe('MultiNested', () => {
		it('MultiNested1', () => {
			const response = parseColumnType(hiveColumnsToTest.multiNested1);
			expect(response).toEqual(
				hiveParseColumnTypeTestExpectations.multiNested1
			);
		});

		it('MultiNested2', () => {
			const response = parseColumnType(hiveColumnsToTest.multiNested2);
			expect(response).toEqual(
				hiveParseColumnTypeTestExpectations.multiNested2
			);
		});

		it('MultiNested3', () => {
			const response = parseColumnType(hiveColumnsToTest.multiNested3);
			expect(response).toEqual(
				hiveParseColumnTypeTestExpectations.multiNested3
			);
		});
	});

	describe('Invalid', () => {
		it('should make no changes1', () => {
			const response = parseColumnType(hiveColumnsToTest.invalid1);
			expect(handleComplicatedColumnType).toThrowError();
			expect(response).toEqual(
				hiveColumnsToTest.invalid1
			);
		});

		it('should make no changes2', () => {
			const response = parseColumnType(hiveColumnsToTest.invalid2);
			expect(handleComplicatedColumnType).toThrowError();
			expect(response).toEqual(
				hiveColumnsToTest.invalid2
			);
		});

		it('should make no changes3', () => {
			const response = parseColumnType(hiveColumnsToTest.invalid3);
			expect(handleComplicatedColumnType).toThrowError();
			expect(response).toEqual(
				hiveColumnsToTest.invalid3
			);
		});
	});
});
