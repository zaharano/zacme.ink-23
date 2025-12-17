/**
 * @param {() => void} intervalFunction
 * @param {number} minDelay
 * @param {number} maxDelay
 */
export const setRandomInterval = (intervalFunction, minDelay, maxDelay) => {
	/** @type {ReturnType<typeof setTimeout>} */
	let timeout;

	const runInterval = () => {
		const timeoutFunction = () => {
			intervalFunction();
			runInterval();
		};

		const delay = Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

		timeout = setTimeout(timeoutFunction, delay);
	};

	runInterval();

	return {
		clear() {
			clearTimeout(timeout);
		}
	};
};