import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../utils/constants';

// import './QrScanner.scss';
import qrStyle from './QrScanner.module.scss';

export default function QrScanner() {
	const [resultScan, setResultScan] = useState('');

	function handleScanning(result) {
		setResultScan(result[0].rawValue);
		console.log(`Result: ${resultScan}`);
		console.log(result[0].rawValue);

		let prevData = JSON.parse(localStorage.getItem(SCAN_DATA)) || [];

		console.log(prevData);

		if (!prevData.includes(resultScan) && resultScan !== '') {
			localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, resultScan]));
		}
	}

	return (
		// <div className="qr_scan">
		<div className={qrStyle.qr_scan}>
			<h1>Scan your QRcode</h1>

			<div className={qrStyle['qr_scan-box']}>
				<Scanner
					onScan={(result) => handleScanning(result)}
					// onError={(error) => console.log(error?.message)}
					components={{
						audio: true, // Play beep sound on scan
						onOff: true, // Show camera on/off button
						torch: false, // Show torch/flashlight button (if supported)
						zoom: false, // Show zoom control (if supported)
						finder: true, // Show finder border overlay
					}}
					constraints={{
						facingMode: 'environment', // Use rear camera
					}}
				/>
			</div>

			<p style={{ color: '#fff' }}>{resultScan}</p>
		</div>
	);
}
