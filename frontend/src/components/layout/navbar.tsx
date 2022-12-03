import { Home, HomeAlt1 } from "akar-icons";
import React from "react";

const Breadcrumb = () => (
	<div>
		<div className="flex items-center overflow-y-auto whitespace-nowrap">
			<a href="#" className="text-gray-600 dark:text-gray-200">
				<Home strokeWidth={2} size={20} />
			</a>
			<span className="mx-1 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
				<svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
					<path
						fillRule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clipRule="evenodd"
					/>
				</svg>
			</span>
			<a href="#" className="flex items-center text-gray-600 -px-2 dark:text-gray-200 hover:underline">
				<HomeAlt1 strokeWidth={2} size={20} />
				<span className="mx-2">Clínica</span>
			</a>
		</div>
	</div>
);

const Navbar = () => {
	return (
		<nav className="relative bg-white shadow dark:bg-gray-800">
			<div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
				<div className="flex items-center justify-between">
					<Breadcrumb />
				</div>
				{/* Mobile Menu open: "block", Menu closed: "hidden" */}
				<div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
					<div className="flex flex-col md:flex-row md:mx-6">
						<a
							className="flex items-center justify-center gap-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
							href="#"
						>
							<div className="h-8 w-8 rounded-full bg-blue-500"></div>
							<span className="font-semibold">Keven Gonçalves</span>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
