// Todo
var stringPermutation = function (str) {
	const results = new Set();
	const visited = [];
	helper('', visited);
	return Array.from(results);

	function helper (subStr, visited) {
		if (subStr.length === str.length) {
			results.add(subStr);
			return;
		}

		for (let i = 0; i < str.length; i++) {
			let ch = str[i];
			if (visited[i]) {
				continue;
			}

			// if (i > 0 && visited[i] === visited[i - 1] && !visited[i - 1]) {
			// 	continue;
			// }

			subStr += str[i];
			visited[i] = true;

			helper(subStr, visited);
			subStr = subStr.slice(0, subStr.length - 1);
			visited[i] = false;
		}
	}
};
console.log(stringPermutation('abcda'))

