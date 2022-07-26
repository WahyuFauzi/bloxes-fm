import { Link } from 'react-router-dom';
import './SideBar.css';

export default function SideBar() {
	return (
		<div
			onContextMenu={(e) => e.preventDefault()}
			className="sidebar pt-6 shadow"
		>
			<div className="w-full h-36 text-center">
				<div className="w-full h-3/4"></div>
				<p className="mt-4">Bloxes</p>
			</div>
			<div>
				<ul className="text-center">
					<Link to="/">
						<li className="h-8 pt-1 mx-4 mt-2 rounded cursor-pointer hover:bg-gray-300">
							Files
						</li>
					</Link>
					{/*<Link to="recyclebin">
						<li className="h-8 pt-1 mx-4 mt-2 rounded cursor-pointer">
							Recent
						</li>
					</Link>
					<Link to="recyclebin">
						<li className="h-8 pt-1 mx-4 mt-2 rounded cursor-pointer">
							Pinned
						</li>
					</Link>
					<Link to="recyclebin">
						<li className="h-8 pt-1 mx-4 mt-2 rounded cursor-pointer">
							Recycle Bin
						</li>
					</Link>*/}
				</ul>
			</div>
		</div>
	);
}
