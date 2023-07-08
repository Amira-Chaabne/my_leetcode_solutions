/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
function timeLimit(fn, t) {
	return async function(...args) {
        const fns = fn(...args);

        const p = new Promise((res, rej) => {
            setTimeout(() => {
                rej('Time Limit Exceeded')
            }, t);
        })

        return Promise.race([fns, p]);
    }
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */