'use client';

import { useEffect, useState } from 'react';
import { GENERATE_DATA } from '../../utils/constants';

export default function QrGeneratorHistory() {
	const [generateHistory, setGenerateHistory] = useState<string[]>([]);

	useEffect(() => {
		setGenerateHistory(JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]'));
	}, []);

	const generateHistoryList = generateHistory.map((item: string, index: number) => {
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
		<div className="generate-history">
			<h1>Generate history</h1>
			<ul>{generateHistoryList}</ul>
		</div>
	);
}
