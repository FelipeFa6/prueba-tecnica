import { useState } from 'react';

import Chevron from './icons/chevron';

const Dropdown = ({ title, children }) => {

	const [ active, setActive ] = useState(false);

    return (
        <div className='w-100 ps-3 bg-light'>
            <div className="d-flex justify-content-between align-items-center p-1">
                <span>{title}</span>
		        <div type='button' onClick={() => setActive(!active)}> 
                    <Chevron size='16px' orientation={active ? 'down' : 'up'} />
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

export default Dropdown;
