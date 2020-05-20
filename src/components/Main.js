import React from 'react';


function Main({content}) {
    return (
        <div className='innerConntent'>
            <h2 className="text-center">Witamy na stronie Team Orange!</h2>
            <div>
                <h3>{content}</h3>
            </div>
        </div>
    )
}

Main.defaultProps = { 
    content: 'Cześć!',
 }

export default Main;
