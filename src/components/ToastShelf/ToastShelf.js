import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, removeToast }) {
	return (
		<ol className={styles.wrapper}>
			{toasts?.map((toast) => {
				return (
					<li key={toast.id}>
						<Toast
							variant={toast.variant}
							message={toast.message}
							id={toast.id}
							removeToast={removeToast}
						/>
					</li>
				);
			})}
		</ol>
	);
}

export default ToastShelf;
