import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="text-center">
            <h1>Welcome to Crime Analytics Bangladesh</h1>
            <p>Explore crime statistics across Bangladesh with interactive visualizations.</p>
            <div className="row mt-4">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Crime Trends</h5>
                            <p className="card-text">View crime trends over time.</p>
                            <Link to="/crime-trends" className="btn btn-primary">Go to Analysis</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Crime by Unit</h5>
                            <p className="card-text">Analyze crime data by unit.</p>
                            <Link to="/crime-by-unit" className="btn btn-primary">Go to Analysis</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Crime Distribution</h5>
                            <p className="card-text">See the distribution of crime types.</p>
                            <Link to="/crime-distribution" className="btn btn-primary">Go to Analysis</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Full Dashboard</h5>
                            <p className="card-text">Explore the complete Tableau dashboard.</p>
                            <Link to="/full-dashboard" className="btn btn-primary">View Dashboard</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;