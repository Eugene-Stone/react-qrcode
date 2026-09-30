import Link from 'next/link';

export default function NotFound() {
	return (
		<section className="page-404" style={{ textAlign: 'center' }}>
			<h1>Page not found</h1>
			<div className="button__box">
				<Link href="/">
					<button>Go back home</button>
				</Link>
			</div>
		</section>
	);
}
