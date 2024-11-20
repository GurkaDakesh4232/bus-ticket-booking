import React from 'react';
import PriceRangeSlider from '../PriceRangeSlider';

const Filter = ({ className }) => {
  const [rangeValues, setRangeValues] = React.useState({
    min: 0,
    max: 100,
  });

  const handleRangeChange = (values) => {
    setRangeValues(values);
  };

  return (
    <div className={`w-full ${className}`}>
      <h1 className="text-xl text-neutral-700 font-semibold">Apply Filters</h1>

      {/* Price Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-1">
        <h1 className="text-lg text-neutral-600 font-medium">Price Range</h1>
        <PriceRangeSlider min={1000} max={3000} onChange={handleRangeChange} />
      </div>

      {/* Bus Types Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Bus Types</h1>
        <div className="space-y-2.5">
          {[
            { id: 'ac', label: 'AC Deluxe', count: 10 },
            { id: 'tourismac', label: 'Tourism AC Deluxe', count: 10 },
            { id: 'airsuspenction', label: 'Air Suspension', count: 10 },
            { id: 'luxary', label: 'Luxury AC Deluxe', count: 10 },
          ].map(({ id, label, count }) => (
            <div key={id} className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id={id}
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor={id}
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                {label} <span className="text-xs text-neutral-600">({count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Bus Companies Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Bus Companies</h1>
        <div className="space-y-2.5">
          {[
            { id: 'sworgadwari', label: 'Sworgadwari Deluxe', count: 10 },
            { id: 'pokhara', label: 'Pokhara AC Deluxe', count: 10 },
            { id: 'mustang', label: 'Mustang Deluxe', count: 10 },
            { id: 'lumbini', label: 'Lumbini AC Deluxe', count: 10 },
          ].map(({ id, label, count }) => (
            <div key={id} className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id={id}
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor={id}
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                {label} <span className="text-xs text-neutral-600">({count})</span>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Bus Amenities Filter */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
        <h1 className="text-lg text-neutral-600 font-medium">Amenities</h1>
        <div className="space-y-2.5">
          {[
            { id: 'sworgadwari', label: 'Internet/Wifi',   },
            { id: 'pokhara', label: 'AC & Air Suspenction',   },
            { id: 'mustang', label: 'Water Bottles', },
            { id: 'lumbini', label: 'LED TV & Music', },
            { id: 'lumbini', label: 'Charging Port', },
            { id: 'lumbini', label: 'Fan', },
            { id: 'lumbini', label: 'Super AC', },
          ].map(({ id, label, count }) => (
            <div key={id} className="w-full flex items-center gap-2">
              <input
                type="checkbox"
                id={id}
                className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer"
              />
              <label
                htmlFor={id}
                className="text-sm text-neutral-600 font-normal cursor-pointer"
              >
                {label} <span className="text-xs text-neutral-600"></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
