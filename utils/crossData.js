const crossData = (schema, data) => {
	const accumulatedWorkers = [];

	data.forEach((worker) => {
		const { ID_EMPRESA, ID_AREA } = worker;
		const matchEmpresa = schema.EMPRESAS.find(item => item.ID_EMPRESA === ID_EMPRESA);

		if (matchEmpresa) {
			const matchArea = matchEmpresa.AREAS.find(item => item.ID_AREA === ID_AREA);

			if (matchArea) {
				accumulatedWorkers.push(worker);
			}
		}
	});

	schema.EMPRESAS.forEach((empresa) => {
		empresa.AREAS.forEach((area) => {
			area.WORKERS = accumulatedWorkers.filter(
				(worker) => worker.ID_EMPRESA === empresa.ID_EMPRESA && worker.ID_AREA === area.ID_AREA,
			);
		});
	});
    return schema.EMPRESAS;
}

export default crossData;
