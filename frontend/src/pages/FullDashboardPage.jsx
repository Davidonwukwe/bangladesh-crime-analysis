import React, { useEffect, useRef } from 'react';

function FullDashboardPage() {
    const vizRef = useRef(null);
    const tableauUrl = `https://public.tableau.com/views/DataAnalysis_17431598803850/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link`;

    useEffect(() => {
        const viz = document.createElement('tableau-viz');
        viz.setAttribute('src', tableauUrl);
        viz.setAttribute('width', '100%');
        viz.setAttribute('height', '1500');
        viz.setAttribute('hide-tabs', 'false');
        viz.setAttribute('toolbar', 'top');
        vizRef.current.appendChild(viz);

        return () => {
            if (vizRef.current && vizRef.current.contains(viz)) {
                vizRef.current.removeChild(viz); // Remove the specific viz element
            }
        };
    }, []);

    return (
        <div>
            <h2 className="mb-4">Full Crime Dashboard</h2>
            <div className="card">
                <div className="card-body">
                    <div ref={vizRef}></div>
                </div>
            </div>
            <h2 className="mb-4">Crime Units Map</h2>
            <div className="card">
                <div className="card-body">
                    <iframe
                        src="/crime_units_map.html"
                        width="100%"
                        height="600"
                        title="Crime Units Map"
                        frameBorder="0"
                        allowFullScreen
                        style={{display: 'block'}}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default FullDashboardPage;