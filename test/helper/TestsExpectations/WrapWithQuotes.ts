import { TestSuitsType } from '../../../common/types/testTypes.common';

const hiveTestExpectations: TestSuitsType = {
	simpleObject: '{"name":"string"}',
	simpleList: '["string"]',

	multipleValuesObject: '{"name":"string","id":"string","age":"int"}',
	multipleValuesList: '[{"name":"string","id":"string","age":"int"}]',
	multiNested1:
		'{"name":"string","id":"string","is_athlete":"boolean","class":{"major":"string","average":"double"}}',
	multiNested2:
		'[{"amount":"bigint","product":{"product_id":"string","product_name":"string","template":{"code":"string","currency":"string"}},"color":"string"}]',
	multiNested3:
		'[{"student":{"name":"string","id":"string","subjects":[{"sub_name":"string","sub_id":"bigint"}]},"supply":{"amount":"bigint","product":{"product_id":"string","product_name":"string","template":{"code":"string","currency":"string"}},"color":"string"}}]',
	invalid1: '{"name":"string"',
	invalid2: '["name":"string","id":"string"]',
	invalid3: '"struc<name":"string>"'
};

export { hiveTestExpectations as hiveWrapWithQuotesTestExpectations };
