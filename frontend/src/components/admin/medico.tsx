import { LinkOut, Pencil, TrashCan } from "akar-icons";

const Create = () => (
	<div className="p-8 w-full bg-white rounded-md shadow grid grid-cols-2 gap-10">
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<span>Nome</span>
				<input
					className="border-2 p-2 rounded-lg border-zinc-600 focus:border-2  focus:ring-4 focus:ring-blue-400"
					type="text"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<span>BI</span>
				<input
					className="border-2 p-2 rounded-lg border-zinc-600 focus:border-2  focus:ring-4 focus:ring-blue-400"
					type="text"
				/>
			</div>
		</div>
		<div className="flex flex-col gap-6">
			<div className="flex flex-col gap-2">
				<span>Apelido</span>
				<input
					className="border-2 p-2 rounded-lg border-zinc-600 focus:border-2 focus:ring-4 focus:ring-blue-400"
					type="text"
				/>
			</div>
			<div className="flex flex-col gap-2">
				<span>Especialidade</span>
				<input
					className="border-2 p-2 rounded-lg border-zinc-600 focus:border-2 focus:ring-4 focus:ring-blue-400"
					type="text"
				/>
			</div>
			<div className="flex w-full gap-2">
				<button className="w-1/2 bg-pink-600 p-3 rounded-lg text-white uppercase">limpar</button>
				<button className="w-1/2 bg-green-600 p-3 rounded-lg text-white uppercase">criar</button>
			</div>
		</div>
	</div>
);

const View = () => (
	<div className="flex flex-col w-full gap-4">
		<div className="flex flex-col">
			<span className="uppercase text-lg font-medium">medicos</span>
			<div className="w-full h-[2px] bg-zinc-600" />
		</div>
		<div className="flex flex-col w-full gap-2">
			<div className="p-3 bg-white rounded w-full shadow-md grid grid-cols-5">
				<span>Nome</span>
				<span>Apelido</span>
				<span>BI</span>
				<span>Especialidade</span>
				<span>Ações</span>
			</div>
		</div>
		<div className="flex flex-col w-full gap-2">
			<div className="p-3 bg-white rounded w-full shadow-md grid grid-cols-5">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="flex gap-4">
					<TrashCan strokeWidth={2} size={20} className="text-pink-600" />
					<Pencil strokeWidth={2} size={20} className="text-blue-600" />
					<LinkOut strokeWidth={2} size={20} className="text-green-600" />
				</div>
			</div>
		</div>
		<div className="flex flex-col w-full gap-2">
			<div className="p-3 bg-white rounded w-full shadow-md grid grid-cols-5">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div className="flex gap-4">
					<TrashCan strokeWidth={2} size={20} className="text-pink-600" />
					<Pencil strokeWidth={2} size={20} className="text-blue-600" />
					<LinkOut strokeWidth={2} size={20} className="text-green-600" />
				</div>
			</div>
		</div>
	</div>
);

const Medico = () => {
	return (
		<div className="flex flex-col gap-20">
			<Create />
			<View />
		</div>
	);
};

export default Medico;
