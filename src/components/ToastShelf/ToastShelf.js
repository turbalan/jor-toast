import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';
import { useEscape } from '../../hooks/useEscape';

function ToastShelf() {
	const { toasts, clearToasts } = React.useContext(ToastContext);

	useEscape(clearToasts);

	return (
		<ol
			className={styles.wrapper}
			role="region"
			aria-live="polite"
			aria-label="Notification"
		>
			{toasts?.map((toast) => {
				return (
					<li key={toast.id}>
						<Toast
							variant={toast.variant}
							message={toast.message}
							id={toast.id}
						/>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
