import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import styles from './ToastShelf.module.css';

function ToastShelf() {
	const { toasts } = React.useContext(ToastContext);

	return (
		<ol className={styles.wrapper}>
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
