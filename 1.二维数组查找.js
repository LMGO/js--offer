/*在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上
        到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判
        断数组中是否含有该整数*/
function Find(target, array) {
	// write code here
	const n = array.length, //列数
		m = array[0].length; //行数
	let row = n - 1, //最后一行
		col = 0; //第一列
	if (m === 0 && n === 0) {
		//判读数组是否为空
		return false;
	}
	while (row >= 0 && col <= m - 1) {
		//右下角第一个开始判断
		if (array[row][col] > target) {
			//目标数字小，则行减1
			row--;
		} else if (array[row][col] < target) {
			//目标数字小，则列加1
			col++;
		} else return true;
	}
	return false;
}

let a = [ [ 1, 2 ], [ 2, 3 ] ];
console.log(Find(2, a));

