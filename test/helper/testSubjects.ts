import { TestSuitsType } from '../../common/types/testTypes.common';

const hiveColumnsToTest: TestSuitsType = {
	simpleObject: 'struct<name:string>',
	simpleList: 'array<name:string>',

	multipleValuesObject: 'struct<name:string,id:string,age:int>',
	multipleValuesList: 'array<name:string,id:string,age:int>',
	multiNested1:
		'struct<name:string,id:string,is_athlete:boolean,class:struct<major:string,average:int>>',
	multiNested2:
		'array<struct<amount:bigint,product:struct<product_id:string,product_name:string,template:struct<code:string,currency:string>>,color:string>>'
};

export { hiveColumnsToTest };
