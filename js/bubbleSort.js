const bubbleSort = function (arr) {
	for (let i = 0, len = arr.length; i < len; i++ ) {
		for (let j = i + 1; j < len; j++) {
			let temp = arr[i];
			if (arr[i] > arr[j]) {
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}