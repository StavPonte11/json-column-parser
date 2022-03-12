import { TestSuitsType } from '../../common/types/testTypes.common';

const hiveColumnsToTest: TestSuitsType = {
	simpleObject: 'struct<name:string>',
	simpleList: 'array<string>',

	multipleValuesObject: 'struct<name:string,id:string,age:int>',
	multipleValuesList: 'array<struct<name:string,id:string,age:int>>',
	multiNested1:
		'struct<name:string,id:string,is_athlete:boolean,class:struct<major:string,average:int>>',
	multiNested2:
		'array<struct<amount:bigint,product:struct<product_id:string,product_name:string,template:struct<code:string,currency:string>>,color:string>>',
	multiNested3:
		'array<student:struct<name:string,id:string,subjects:array<struct<sub_name:string,sub_id:bigint>>>,supply:struct<amount:bigint,product:struct<product_id:string,product_name:string,template:struct<code:string,currency:string>>,color:string>>'
};

export { hiveColumnsToTest };
