import React from 'react';
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([]);

	const addToast = (message, toastVariant) => {
		setToasts(() => {
			let clonedToasts = toasts;
			return [
				...clonedToasts,
				{
					id: crypto.randomUUID(),
					message: message,
					variant: toastVariant,
				},
			];
		});
	};

	const removeToast = (id) => {
		const newToasts = toasts.filter((toast) => toast.id !== id);
		setToasts(newToasts);
	};

	const clearToasts = React.useCallback(() => {
		setToasts([]);
	}, []);

	return (
		<ToastContext.Provider
			value={{ toasts, addToast, removeToast, clearToasts }}
		>
			{children}
		</ToastContext.Provider>
	);
}

export default ToastProvider;
