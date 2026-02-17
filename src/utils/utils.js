import { useState, useEffect, useRef } from "react";


export function useValuesHistory() {
	// const [valueHistoryGenerate, setValueHistoryGenerate] = useState([]);
	// const [valueHistoryScan, setValueHistoryScan] = useState([]);
	const valueHistoryGenerate = useRef([]);
	const valueHistoryScan = useRef([]);

	useEffect(() => {
		localStorage.setItem(
			"valueHistoryGenerate",
			JSON.stringify(valueHistoryGenerate),
		);
	}, [valueHistoryGenerate]);

	return {
		valueHistoryGenerate,
		// setValueHistoryGenerate,
		valueHistoryScan,
		// setValueHistoryScan
	};
}


