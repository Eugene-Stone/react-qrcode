import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<nav className="header">
			<div className="logo">
				<NavLink to={'/react-qrcode'}>
					<span>Home</span>
				</NavLink>
			</div>

			<ul>
				<li>
					<NavLink to={'/react-qrcode/generate'}>Generator</NavLink>
				</li>
				<li>
					<NavLink to={'/react-qrcode/generate-history'}>Generate history</NavLink>
				</li>
				<li>
					<NavLink to={'/react-qrcode/scan'}>Scanning</NavLink>
				</li>

				<li>
					<NavLink to={'/react-qrcode/scan-history'}>Scanning history</NavLink>
				</li>
			</ul>
		</nav>
	);
}
