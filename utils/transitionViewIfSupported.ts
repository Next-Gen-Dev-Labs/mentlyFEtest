const transitionViewIfSupported = (
	updateCb: (...args: unknown[]) => unknown,
) => {
	if (document.startViewTransition) {
		document.startViewTransition(() => updateCb());
	} else {
		updateCb();
	}
};

export default transitionViewIfSupported;
