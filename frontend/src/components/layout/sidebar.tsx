import { BookOpen, Calendar, HomeAlt1, PeopleGroup, PeopleMultiple, SignOut } from "akar-icons";
import React from "react";

const Sidebar = () => {
	return (
		<div className="flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-zinc-900 dark:border-zinc-700 sticky top-0">
			<div className="ml-4">
				<h2 className="text-3xl font-semibold text-zinc-800 dark:text-white">Clínica</h2>
			</div>

			<div className="flex flex-col justify-between flex-1 mt-6">
				<nav>
					<a
						className="flex items-center px-4 py-2 text-zinc-700 bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200"
						href="#"
					>
						<HomeAlt1 strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Clínica</span>
					</a>
					<a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<PeopleMultiple strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Recepcionistas</span>
					</a>
					<a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<PeopleGroup strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Médicos</span>
					</a>
					{/*Medico*/}
					{/* <a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<BookOpen strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Receitas</span>
					</a>
					<a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<Calendar strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Agendas</span>
					</a> */}
					{/*Recepcionista*/}
					{/* <a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<PeopleMultiple strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Pacientes</span>
					</a>
					<a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<Calendar strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Agendas</span>
					</a> */}
					<a
						className="flex items-center px-4 py-2 mt-5 text-zinc-600 transition-colors duration-300 transform dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700 dark:hover:text-zinc-200 hover:text-zinc-700"
						href="#"
					>
						<SignOut strokeWidth={2} size={20} />
						<span className="mx-4 font-medium">Sair</span>
					</a>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
