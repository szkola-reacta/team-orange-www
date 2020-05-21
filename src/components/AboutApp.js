import React from 'react';
import { withRouter } from "react-router-dom";

import './AboutApp.css';


function AboutApp () {
    return (
    <div className="innerConntent">
        <div className="about-boxed">
            <div className="intro">
                <h2 className="text-center">Opis Aplikacji "Środki Trwałe" </h2>
                <p className="text-center">Zarządzaj środkami trwałymi w sposób efektywny i wygodny.</p>
                <p className="text-center">Koniec z "papierologią"!</p>
            </div>
            <div className="row justify-content-center features">
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="text-center box"><img className="icon" src="/icons/spreadsheet.svg" alt="spreadsheet"/>
                        <h3 className="name">Szczegółowa baza danych</h3>
                        <p className="description">
                            Baza danych zawiera komplet informacji na temat każdego środka trwałego w firmie: numer seryjny, producent...
                        </p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><img className="icon" src="/icons/list-rich.svg" alt="list-rich"/>
                        <h3 className="name">Historia Środków Trwałych</h3>
                        <p className="description">Śledź i aktualizuj historię każdego środka trwałego.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><img className="icon" src="/icons/key.svg" alt="key"/>
                        <h3 className="name">Różne poziomy dostępu</h3>
                        <p className="description">Udzielaj użytkownikom dostępu tylko do ich środków trwałych.</p>
                </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><img className="icon" src="/icons/magnifying-glass.svg" alt="magnifying-glass"/>
                        <h3 className="name">Inwentaryzacja</h3>
                        <p className="description">Podziel zasoby na działy i przeprowadź inwentaryzację w dowolnym obszarze bez wstawania od biurka.</p>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5 col-lg-4 item">
                    <div className="box"><img className="icon" src="/icons/print.svg" alt="print"/>
                        <h3 className="name">Drukuj etykiety</h3>
                        <p className="description">Wygeneruj i wydrukuj etykietę dla każdego środka trwałego.</p>
                    </div>
                </div>
            </div>
    </div>
    </div>
    )
}

export default withRouter(AboutApp);
