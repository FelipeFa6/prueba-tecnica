import { read, utils } from 'xlsx';

const xlsxLoader = async (filePath) => {
	try {
		const f = await fetch(filePath);
		const ab = await f.arrayBuffer();

		const wb = read(ab);

		const ws = wb.Sheets[wb.SheetNames[0]];
		const data = utils.sheet_to_json(ws);
		return data;
	} catch (error) {
		console.error('Error fetching or processing data:', error);
		throw error;
	}
};

export default xlsxLoader;
