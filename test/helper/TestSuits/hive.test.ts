import { hiveOpeningDelimitersTestExpectations } from '../TestsExpectations/OpeningDelimiters';
import {
	replaceOpeningDelimiters,
	replaceClosingDelimiter
} from '../../../src/utils/helpers.util';
import { hiveClosingDelimitersTestExpectations } from '../TestsExpectations/ClosingDelimiters';
import { wrapWithQuotes } from '../../../src/utils/helpers.util';
import { hiveColumnsToTest } from '../../testSubjects';
import { hiveWrapWithQuotesTestExpectations } from '../TestsExpectations/WrapWithQuotes';
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
});
