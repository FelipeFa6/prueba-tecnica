import React, { useState } from 'react';

import Chevron from './icons/chevron';

const Dropdown = ({ title, children }) => {
  const [active, setActive] = useState(false);
  const hasChildren = children;

  const handleClick = () => {
    if (hasChildren) {
      setActive(!active);
    }
  };

  return (
    <div className='w-100 ps-4 pb-1'>
      <div
        role={`${hasChildren ? 'button' : ''}`}
        onClick={handleClick}
        className={`d-flex justify-content-between align-items-center pt-2 border-bottom ${hasChildren ? 'dropdown__hover' : ''}`}
      >
        <span>{title}</span>
        {hasChildren && (
          <div>
            <Chevron size='16px' orientation={active ? 'down' : 'up'} />
          </div>
        )}
      </div>
      <div
        className={`overflow-hidden transition-max-height ${active ? 'max-height-open' : 'max-height-closed'}`}
        style={{ maxHeight: active ? '500px' : '0px' }} // Adjust the max height as needed
      >
        {active && <div>{children}</div>}
      </div>
    </div>
  );
};

export default Dropdown;

