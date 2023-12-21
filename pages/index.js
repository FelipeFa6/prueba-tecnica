import React, { useState, useEffect } from 'react';

/*Components*/
import Dropdown from '../components/Dropdown';
import Table from '../components/Table';

/*Data*/
import schema from '../public/schema.json';

/*Functions*/
import xlsxLoader from '../utils/xlsxLoader';

const Index = () => {

    const [ excelData, setExcelData ] = useState();
	const [ data, setData ] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await xlsxLoader('/workers.xlsx');
                setExcelData(data);
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!(excelData && schema)) {
            return;
        }

        excelData.forEach((worker) => {
            const { ID_EMPRESA, ID_AREA } = worker;
            const matchEmpresa = schema.EMPRESAS.find(item => item.ID_EMPRESA === ID_EMPRESA);

            if (matchEmpresa) {
                const matchArea = matchEmpresa.AREAS.find(item => item.ID_AREA === ID_AREA);

                if (matchArea) {
                    if (!matchArea.WORKERS) {
                        matchArea.WORKERS = [];
                    }

                    if (!matchArea.WORKERS.some(existingWorker => existingWorker.ID_EMPRESA === ID_EMPRESA && existingWorker.ID_AREA === ID_AREA)) {
                        matchArea.WORKERS.push(worker);
                    }
                }
            }
        });
        setData(schema.EMPRESAS);
    }, [excelData, schema]);

    return (
        <div className="p-2 bg-success rounded bg-light"
        style={{width: '75vw', minWidth: '200px'}}
        >
        { data &&
            data.map((empresa, index) => (
                <Dropdown key={index} title={empresa.NOMBRE_EMPRESA}>
                {empresa.AREAS.map((area, index) => (
                    <Dropdown key={index} title={area.NOMBRE_AREA}>
                    {area.WORKERS && (
                        <Table workers={area.WORKERS}/>
                    )
                    }
                    </Dropdown>
                ))}
                </Dropdown>
            ))}
        </div>
    );
}

export default Index;

