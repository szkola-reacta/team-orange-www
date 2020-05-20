import React from 'react';


function Main({content}) {
    return (
        <div className='main'>
            <h2>Witamy w Team Orange!</h2>
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
