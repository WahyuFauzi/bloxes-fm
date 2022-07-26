import { ReactNode } from 'react';
import NavBar from './navbar/NavBar.jsx';
import SideBar from './sidebar/SideBar.jsx';
import './Layout.css';

interface Props {
	children?: ReactNode;
}

export default function Layout({ children }: Props) {
	return (
		<div>
			<NavBar />
			<div className="content flex w-full">
				<SideBar />
				<main className="main">{children}</main>
			</div>
		</div>
	);
}
