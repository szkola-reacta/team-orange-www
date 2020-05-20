import React from 'react';
import { withRouter } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Team () {
    return (
        <div className='team'>
            <div className="about-boxed">
            <div className="intro">
                <h2 className="text-center">Nasz Zespół</h2>
            </div>
            <div className="row justify-content-center features">
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="text-center box"><img className="icon" src="/icons/person.svg" alt="person"/>
                        <h3 className="name">Tomasz Malinowski</h3>
                        <p className="description">
                        <Button href="https://github.com/maltitco" variant="outline-primary">Github</Button>
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><img className="icon" src="/icons/person.svg" alt="person"/>
                    <h3 className="name">Andrzej Żmuda</h3>
                        <p className="description">
                        <Button href="https://github.com/andrzejzmuda" variant="outline-primary">Github</Button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default withRouter(Team);
