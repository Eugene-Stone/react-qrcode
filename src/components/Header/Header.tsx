'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
	{ href: '/generate', label: 'Generator' },
	{ href: '/generate-history', label: 'Generate history' },
	{ href: '/scan', label: 'Scanning' },
	{ href: '/scan-history', label: 'Scanning history' },
];

function normalizePath(pathname: string) {
	const pathWithoutBase = pathname.replace(/^\/react-qrcode/, '') || '/';

	if (pathWithoutBase.length > 1) {
		return pathWithoutBase.replace(/\/$/, '');
	}

	return pathWithoutBase;
}

export default function Header() {
	const pathname = normalizePath(usePathname());

	return (
		<nav className="header">
			<div className="logo">
				<Link className={pathname === '/' ? 'active' : undefined} href="/">
					<span>Home</span>
				</Link>
			</div>

			<ul>
				{navLinks.map((link) => (
					<li key={link.href}>
						<Link className={pathname === link.href ? 'active' : undefined} href={link.href}>
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
}
