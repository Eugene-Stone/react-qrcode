import { useState } from 'react';
import { GENERATE_DATA } from '../../utils/constants';

import { QRCodeSVG } from 'qrcode.react';

// import './QrGenerator.scss';
import qrStyle from './QrGenerator.module.scss';

export default function QrGenerator() {
	const [valueInput, setValueInput] = useState('');
	const [value, setValue] = useState('');

	function handleValueInput(e) {
		setValueInput(e.target.value);
	}

	function handleValue() {
		setValue(valueInput);
		setValueInput('');

		let prevData = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];

		console.log(prevData);

		if (!prevData.includes(valueInput) && valueInput !== '') {
			localStorage.setItem(GENERATE_DATA, JSON.stringify([...prevData, valueInput]));
		}
	}

	return (
		<div className={qrStyle.qr_generator}>
			{/* <div className="qr_generator"> */}
			<h1>Generate your QRcode</h1>
			<input
				type="text"
				value={valueInput}
				onChange={handleValueInput}
				// className="qrcode-generate"
				className={qrStyle['qrcode-generate']}
				placeholder="Input your text..."
			/>

			<button className={qrStyle.button} onClick={handleValue}>
				Save QR code
			</button>

			{value !== '' && (
				<div className={qrStyle.qrcode}>
					<QRCodeSVG value={value} />
				</div>
			)}
		</div>
	);
}
