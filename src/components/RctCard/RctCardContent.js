/**
 * Rct Card Content
 */
import React from 'react';

const RctCardContent = ({ children, customClasses, noPadding, onClick }) => (
    <div className={`${noPadding ? 'rct-full-block' : 'rct-block-content'} ${customClasses ? customClasses : ''}`} 
        onClick={ () => { if (onClick) onClick() } } >
        {children}
    </div>
);

export { RctCardContent };
