import { NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
	return (
		<nav className="header">
			<div className="logo">
				<NavLink to={'/'}>
					<span>Home</span>
				</NavLink>
			</div>

			<ul>
				<li>
					<NavLink to={'/generate'}>Generator</NavLink>
				</li>
				<li>
					<NavLink to={'/generate-history'}>Generate history</NavLink>
				</li>
				<li>
					<NavLink to={'/scan'}>Scanning</NavLink>
				</li>

				<li>
					<NavLink to={'/scan-history'}>Scanning history</NavLink>
				</li>
			</ul>
		</nav>
	);
}
