import { GENERATE_DATA } from '../../utils/constants';

import './QrGeneratorHistory.scss';

export default function QrGeneratorHistory() {
	const generateHistory = JSON.parse(localStorage.getItem(GENERATE_DATA)) || [];

	const generateHistoryList = generateHistory.map((item, index) => {
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
