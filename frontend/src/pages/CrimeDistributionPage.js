import React, { useState } from 'react';
import DateFilter from '../components/DateFilter';
import CrimeDistribution from '../components/CrimeDistribution';

function CrimeDistributionPage() {
    const [startYear, setStartYear] = useState(2010);
    const [endYear, setEndYear] = useState(2019);
    const [unitNames, setUnitNames] = useState([]);

    const handleFilterChange = (start, end, units) => {
        setStartYear(start);
        setEndYear(end);
        setUnitNames(units);
    };

    return (
        <div>
            <h2>Crime Distribution</h2>
            <DateFilter onFilterChange={handleFilterChange} />
            <CrimeDistribution startYear={startYear} endYear={endYear} unitNames={unitNames} />
        </div>
    );
}

export default CrimeDistributionPage;