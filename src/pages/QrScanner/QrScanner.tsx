import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import { SCAN_DATA } from '../../utils/constants';

// import './QrScanner.scss';
import qrStyle from './QrScanner.module.scss';

export default function QrScanner() {
	const [resultScan, setResultScan] = useState('');

	type typeScanResult = {
		rawValue: string;
	};

	function handleScanning(result: typeScanResult[]) {
		if (!result.length) return;

		const value = result[0].rawValue;

		setResultScan(value);

		let prevData: string[] = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

		if (!prevData.includes(value) && value !== '') {
			localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, value]));
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
