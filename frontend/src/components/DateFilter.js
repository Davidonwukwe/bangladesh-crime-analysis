import React from 'react';

function DateFilter({ onFilterChange }) {
    const years = Array.from({ length: 10 }, (_, i) => 2010 + i);
    const unitNames = [
        'DMP', 'CMP', 'KMP', 'RMP', 'BMP', 'SMP', 'Dhaka Range', 'Mymensingh Range',
        'Chittagong Range', 'Sylhet Range', 'Khulna Range', 'Barisal Range',
        'Rajshahi Range', 'Rangpur Range', 'Railway Range', 'GMP', 'RPMP', 'ATU'
    ];

    const handleChange = () => {
        const start = parseInt(document.getElementById('startYear').value);
        const end = parseInt(document.getElementById('endYear').value);
        const selectedUnits = Array.from(document.getElementById('unitName').selectedOptions).map(opt => opt.value);
        if (start <= end) {
            onFilterChange(start, end, selectedUnits);
        } else {
            alert('Start year must be less than or equal to end year.');
        }
    };

    return (
        <div className="mb-4">
            <h5>Filter Data</h5>
            <div className="row">
                <div className="col-md-3">
                    <label htmlFor="startYear" className="form-label">Start Year</label>
                    <select id="startYear" className="form-select" onChange={handleChange}>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3">
                    <label htmlFor="endYear" className="form-label">End Year</label>
                    <select id="endYear" className="form-select" onChange={handleChange}>
                        {years.map((year) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label htmlFor="unitName" className="form-label">Unit Name</label>
                    <select id="unitName" className="form-select" multiple onChange={handleChange}>
                        {unitNames.map((unit) => (
                            <option key={unit} value={unit}>{unit}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default DateFilter;