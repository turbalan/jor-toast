import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
	const [message, setMessage] = React.useState('');
	const [toastVariant, setToastVariant] = React.useState('');
	const [showToast, setShowToast] = React.useState(false);
	const [toasts, setToasts] = React.useState([]);

	const textRef = React.useRef();

	const addToast = () => {
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

	React.useEffect(() => {
		console.log(toasts);
	}, [toasts]);

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt="Cute toast mascot" src="/toast.png" />
				<h1>Toast Playground</h1>
			</header>

			<ToastShelf toasts={toasts} removeToast={removeToast} />

			<form
				onSubmit={(event) => {
					event.preventDefault();
					addToast();
					setMessage('');
					setToastVariant('notice');
					textRef.current.focus();
				}}
				className={styles.controlsWrapper}
			>
				<div className={styles.row}>
					<label
						htmlFor="message"
						className={styles.label}
						style={{ alignSelf: 'baseline' }}
					>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							ref={textRef}
							id="message"
							className={styles.messageInput}
							value={message}
							onChange={(event) => {
								setMessage(event.target.value);
							}}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => {
							return (
								<label htmlFor={`variant-${option}`} key={option}>
									<input
										id={`variant-${option}`}
										type="radio"
										name="option"
										value={option}
										onChange={(event) => {
											setToastVariant(event.target.value);
										}}
									/>
									{option}
								</label>
							);
						})}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default ToastPlayground;
