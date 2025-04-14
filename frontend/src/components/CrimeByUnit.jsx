import React from 'react';

function CrimeByUnit({ startYear, endYear, unitNames }) {
    const unitsQuery = unitNames.length > 0 ? `&unit_name=${unitNames.join(',')}` : '';
    const tableauUrl = `https://public.tableau.com/views/CrimeByUnit/Dashboard?:showVizHome=no&start_year=${startYear}&end_year=${endYear}${unitsQuery}`;

    return (
        <div className="card">
            <div className="card-header">Crime by Unit</div>
            <div className="card-body">
                <iframe
                    src={tableauUrl}
                    width="100%"
                    height="400"
                    title="Crime by Unit"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
}

export default CrimeByUnit;