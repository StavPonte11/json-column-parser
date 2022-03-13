import { JSONType } from './type.common';
import { ChangeTypeOfKeys } from './utils';

export type TestSuitsType = {
	simpleObject: string
	simpleList: string
	multipleValuesObject: string,
	multipleValuesList: string,
	multiNested1: string,
	multiNested2: string,
	multiNested3: string,
	invalid1: string,
	invalid2: string,
	invalid3: string,
};

export type TestSuitsTypeParse = ChangeTypeOfKeys<TestSuitsType, keyof Omit<TestSuitsType, 'invalid1'|'invalid2'|'invalid3'>, JSONType | Array<unknown>>

export type TestExpectations = {
	openingDelimiters: {
		hiveTestExpectations: TestSuitsType
	}
}