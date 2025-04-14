import React from 'react';

function CrimeTrends({ startYear, endYear, unitNames }) {
    const unitsQuery = unitNames.length > 0 ? `&unit_name=${unitNames.join(',')}` : '';
    // const tableauUrl = `https://public.tableau.com/views/CrimeTrends/Dashboard?:showVizHome=no&start_year=${startYear}&end_year=${endYear}${unitsQuery}`;
    // const tableauUrl = `https://public.tableau.com/app/profile/mujammal.ahmed/viz/CrimeTrends/Dashboard1?:showVizHome=no&start_year=${startYear}&end_year=${endYear}${unitsQuery}`;
    // const tableauUrl = `https://public.tableau.com/app/profile/mujammal.ahmed/viz/DataAnalysis_17431598803850/Dashboard1?:showVizHome=no&start_year=${startYear}&end_year=${endYear}${unitsQuery}`;
    const tableauUrl = `https://public.tableau.com/views/DataAnalysis_17431598803850/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link`;

    return (
        <div className="card">
            <div className="card-header">Crime Trends Over Time</div>
            <div className="card-body">
                <iframe
                    src={tableauUrl}
                    width="100%"
                    height="400"
                    title="Crime Trends Over Time"
                    frameBorder="0"
                ></iframe>
            </div>
        </div>
    );
}

export default CrimeTrends;