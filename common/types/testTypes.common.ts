import { JSON } from './type.common';
import { ChangeTypeOfKeys } from './utils';

export type TestSuitsType = {
	simpleObject: string
	simpleList: string
	multipleValuesObject: string,
	multipleValuesList: string,
	multiNested1: string,
	multiNested2: string,
	multiNested3: string,
};

export type TestSuitsTypeParse = ChangeTypeOfKeys<TestSuitsType, keyof TestSuitsType, JSON | Array<unknown>>

export type TestExpectations = {
	openingDelimiters: {
		hiveTestExpectations: TestSuitsType
	}
}