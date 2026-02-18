import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

import Home from './pages/Home';
import Header from './components/Header/Header';
import NotFoundPage from './pages/NotFoundPage';
import QrGenerator from './pages/QrGenerator/QrGenerator';
import QrGeneratorHistory from './pages/QrGeneratorHistory/QrGeneratorHistory';
import QrScanner from './pages/QrScanner/QrScanner';
import QrScannerHistory from './pages/QrScannerHistory/QrScannerHistory';

// const router = createBrowserRouter([
// 	{ path: '*', element: <NotFoundPage /> },
// 	{ path: '/', element: <Gallery /> },
// 	{ path: '/test', element: <Test /> },
// ]);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{ path: '*', element: <NotFoundPage /> },
			{ index: true, element: <Home /> },
			{ path: '/generate', element: <QrGenerator /> },
			{ path: '/generate-history', element: <QrGeneratorHistory /> },
			{ path: '/scan', element: <QrScanner /> },
			{ path: '/scan-history', element: <QrScannerHistory /> },
			// { path: '/counter/:id', element: <CounterItem /> },
		],
	},
]);

function Layout() {
	const contextCustom = useState(null);

	useEffect(() => {
		console.log('Layout mounted');
	}, []);

	return (
		<>
			<Header />
			<Outlet context={contextCustom} />
		</>
	);
}

function App() {
	return <RouterProvider router={router} />;
}

export default App;
