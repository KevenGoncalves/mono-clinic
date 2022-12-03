import React from "react";
import Clinica from "../components/admin/clinica";
import Medico from "../components/admin/medico";
import Recepcionista from "../components/admin/recepcionista";
import Layout from "../components/layout/layout";
import Agenda from "../components/recepcionista/agenda";
import Paciente from "../components/recepcionista/paciente";

const Admin = () => {
	return (
		<Layout>
			<Paciente />
		</Layout>
	);
};

export default Admin;
