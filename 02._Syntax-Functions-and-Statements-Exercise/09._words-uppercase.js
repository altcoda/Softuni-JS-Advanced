function wordsUppercase(str) {
	const words = str.match(/\w+/g);
	return words ? words.map(word => word.toUpperCase()).join(', ') : undefined
}
