import { useState } from 'react';
import Chevron from '../components/icons/chevron';

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

const Dropdown = ({ title, children }) => {

	const [ active, setActive ] = useState(false);

    return (
        <div className='w-100 ps-1 bg-light' >
            <div className="d-flex justify-content-between align-items-center p-1 ">
                <span>{title}</span>
		        <div type='button' onClick={() => setActive(!active)}> 
                    <Chevron orientation={active ? 'down' : 'up'} />
                </div>
            </div>
			{ active &&
				(
                    <div>
            	    { children }
                    </div>
				)
			}
        </div>
    );
}

const Table = () => {
	return (
		<table className="table">
			<thead>
				<tr>
					<th>ID Empresa</th>
					<th>Nombre Empresa</th>
					<th>Áreas</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>Hello World</td>
					<td>RR.HH</td>
					<td>A1</td>
				</tr>
			</tbody>
		</table>
)
}
