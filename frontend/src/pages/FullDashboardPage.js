import React, { useEffect, useRef } from 'react';

function FullDashboardPage() {
    const vizRef = useRef(null);
    const tableauUrl = `https://public.tableau.com/views/DataAnalysis_17431598803850/Dashboard1?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link`;

    useEffect(() => {
        const viz = document.createElement('tableau-viz');
        viz.setAttribute('src', tableauUrl);
        viz.setAttribute('width', '100%');
        viz.setAttribute('height', '800');
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
            <h2>Full Crime Dashboard</h2>
            <div className="card">
                <div className="card-body">
                    <div ref={vizRef}></div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Crime Units Map</h5>
                    <iframe
                        src="/crime_units_map.html"
                        width="100%"
                        height="600"
                        title="Crime Units Map"
                        frameBorder="0"
                        allowFullScreen
                        style={{ display: 'block' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default FullDashboardPage;