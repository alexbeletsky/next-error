function nextError(req, res, next) {
	var ifError = function (n) {
		return function (err) {
			if (err) {
				err._express_next = n;
				throw err;
			}
		};
	};

	next.ifError = ifError(next);
	next();
}

module.exports = function () {
	return nextError;
};
