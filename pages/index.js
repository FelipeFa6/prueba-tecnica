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

    const [ excelData, setExcelData ] = useState([]);
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const excelData = await xlsxLoader('/workers.xlsx');
                setData(crossData(schema, excelData)); // setting crossedData
            } catch (error) {
                console.error('Error in fetchData:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div
            className="p-2 bg-success rounded bg-light"
            style={{width: '75vw', minWidth: '200px'}}
        >
        { data.map((empresa, index) => (
                <Dropdown key={index} title={empresa.NOMBRE_EMPRESA + ' ' + empresa.ID_EMPRESA}>
                {empresa.AREAS.map((area, index) => (
                    <Dropdown key={index} title={area.NOMBRE_AREA + ' ' + area.ID_AREA}>
                    {area.WORKERS.length > 0 && 
                        <Table workers={area.WORKERS}/>
                    }
                    </Dropdown>
                ))}
                </Dropdown>
            ))}
        </div>
    );
}

export default Index;

