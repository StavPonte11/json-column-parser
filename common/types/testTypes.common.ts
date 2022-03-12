export type TestSuitsType = {
	simpleObject: string
	simpleList: string
	multipleValuesObject: string,
	multipleValuesList: string,
	multiNested1: string,
	multiNested2: string,
};

export type TestExpectations = {
	openingDelimiters: {
		hiveTestExpectations: TestSuitsType
	}
}