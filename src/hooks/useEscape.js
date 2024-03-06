import React from 'react';

export const useEscape = (fn) => {
	React.useEffect(() => {
		const handleEscape = (event) => {
			if (event.key === 'Escape') fn();
		};

		window.addEventListener('keyup', handleEscape);

		return () => {
			window.removeEventListener('keyup', handleEscape);
		};
	}, [fn]);
};
