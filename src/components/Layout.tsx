import { ReactNode } from 'react';
import NavBar from './navbar/NavBar';
import SideBar from './sidebar/SideBar';
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
