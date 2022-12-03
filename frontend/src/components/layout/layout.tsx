import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex w-full">
			<div className="w-[19rem] dark">
				<Sidebar />
			</div>
			<div className="w-full h-full min-h-screen bg-zinc-50">
				<Navbar />
				<div className="p-5">{children}</div>
			</div>
		</div>
	);
};

export default Layout;
