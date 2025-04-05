import React from 'react';

function CrimeDistribution({ startYear, endYear, unitNames }) {
    const unitsQuery = unitNames.length > 0 ? `&unit_name=${unitNames.join(',')}` : '';
    const tableauUrl = `https://public.tableau.com/views/CrimeDistribution/Dashboard?:showVizHome=no&start_year=${startYear}&end_year=${endYear}${unitsQuery}`;

    return (
        <div className="card">
            <div className="card-header">Crime Distribution</div>
            <div className="card-body">
                <iframe
                    src={tableauUrl}
                    width="100%"
                    height="400"
                    title="Crime Distribution"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
}

export default CrimeDistribution;