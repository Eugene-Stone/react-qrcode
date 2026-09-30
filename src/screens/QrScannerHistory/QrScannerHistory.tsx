'use client';

import { useEffect, useState } from 'react';
import { SCAN_DATA } from '../../utils/constants';

export default function QrScannerHistory() {
	const [scanHistory, setScanHistory] = useState<string[]>([]);

	useEffect(() => {
		setScanHistory(JSON.parse(localStorage.getItem(SCAN_DATA) || '[]'));
	}, []);

	const scanHistoryList = scanHistory.map((item, index) => {
		if (item.startsWith('http')) {
			return (
				<li key={index}>
					<a href={item}>{item}</a>
				</li>
			);
		} else {
			return <li key={index}>{item}</li>;
		}
	});

	return (
		<div className="scan-history">
			<h1>Scanning history</h1>
			<ul>{scanHistoryList}</ul>
		</div>
	);
}
