export const combineArrays = (
	array1: Array<unknown>,
	array2: Array<unknown>
): Array<unknown> =>
	array1.flatMap((value1: unknown) =>
		array2.map((value2: unknown) => `${value1}${value2}`)
	);
