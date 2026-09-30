import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Header from '../components/Header/Header';
import '../styles/index.scss';
import '../components/Header/Header.scss';
import '../screens/QrGeneratorHistory/QrGeneratorHistory.scss';
import '../screens/QrScannerHistory/QrScannerHistory.scss';

export const metadata: Metadata = {
	title: 'React QR Code',
	description: 'QR code generator and scanner built with Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Header />
				{children}
			</body>
		</html>
	);
}
