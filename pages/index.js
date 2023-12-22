import React, { useState, useEffect } from 'react';

/*Components*/
import Dropdown from '../components/Dropdown';
import Table from '../components/Table';

/*Data*/
import schema from '../public/schema.json';

/*Functions*/
import xlsxLoader from '../utils/xlsxLoader';
import crossData from '../utils/crossData';

const Index = () => {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const excelData = await xlsxLoader('/prueba-tecnica/workers.xlsx');
                setData(crossData(schema, excelData)); // setting crossedData
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="my-2 screen__center"
            style={{width: '80vw'}}>

        <div className="bg-light rounded p-3 ">

        {data.map((empresa, index) => (
            <Dropdown key={index} title={empresa.ID_EMPRESA + ': ' + empresa.NOMBRE_EMPRESA }>
            {empresa.AREAS.map((area, index) => (
                <Dropdown key={index} title={area.ID_AREA + ': ' + area.NOMBRE_AREA}>
                {area.WORKERS.length > 0 && <Table workers={area.WORKERS} />}
                </Dropdown>
            ))}
            </Dropdown>
        ))}
        </div>
        </div>
    );
};

export default Index;

