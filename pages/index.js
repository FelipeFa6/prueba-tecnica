import { useState, useEffect } from 'react';

import Dropdown from '../components/Dropdown';
import Table from '../components/Table';

import schema from '../public/schema.json';


const Index = () => {

	return (
        <div className="p-2 bg-success rounded bg-light"
            style={{width: '75vw', minWidth: '200px'}}>

            <Dropdown title='lvl1'>
            	<Dropdown title='lvl2'>
            	    <Dropdown title='lvl3'>
					    <Table />
            	    </Dropdown>
            	</Dropdown>
            </Dropdown>

            <Dropdown title='lvl1'>
                <Dropdown title='lvl2'>
				    <Table />
                </Dropdown>
            </Dropdown>
        </div>
    );
}

export default Index;

