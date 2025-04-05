import React, { useState } from 'react';
import DateFilter from '../components/DateFilter';
import CrimeByUnit from '../components/CrimeByUnit';

function CrimeByUnitPage() {
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
            <h2>Crime by Unit</h2>
            <DateFilter onFilterChange={handleFilterChange} />
            <CrimeByUnit startYear={startYear} endYear={endYear} unitNames={unitNames} />
        </div>
    );
}

export default CrimeByUnitPage;