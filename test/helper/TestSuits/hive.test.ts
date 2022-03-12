import { hiveOpeningDelimitersTestExpectations } from '../TestsExpectations/OpeningDelimiters';
import { hiveColumnsToTest } from '../testSubjects';
import { replaceOpeningDelimiters } from '../../../src/utils/helpers.util';
describe('Hive opening delimiters test', () => {
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

		it('MultiNested12', () => {
			const response = replaceOpeningDelimiters(hiveColumnsToTest.multiNested2);
			expect(response).toEqual(
				hiveOpeningDelimitersTestExpectations.multiNested2
			);
		});
	});
});
