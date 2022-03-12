import { hiveOpeningDelimitersTestExpectations } from '../TestsExpectations/OpeningDelimiters';
import { hiveColumnsToTest } from '../testSubjects';
import {
	replaceOpeningDelimiters,
	replaceClosingDelimiter
} from '../../../src/utils/helpers.util';
import { hiveClosingDelimitersTestExpectations } from '../TestsExpectations/ClosingDelimiters';
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
