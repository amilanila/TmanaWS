const GET_OPTIONS = {
	credentials: 'same-origin'
};

const POST_OPTIONS = {
	method: 'POST',
	credentials: 'same-origin',
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
};

/*
 * Generic GET function wrapped around fetch
 */
export const get = (url, options) => {
	return fetch(bustCache(url), { ...GET_OPTIONS, ...options })
		.then(status)
		.then(json);
};

/*
 * Generic POST function wrapped around fetch
 */
export const post = (url, options) => {
	return fetch(bustCache(url), { ...POST_OPTIONS, ...options })
		.then(status)
		.then(json);
};
