import React, { useState } from 'react';

const ImpactCalculator: React.FC = () => {
  const [values, setValues] = useState({
    reusableBags: 0,
    publicTransport: 0,
    meatlessDay: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: parseInt(value) || 0,
    });
  };

  // Calculate environmental impact
  const plasticSaved = values.reusableBags * 1.5; // kg of plastic per year
  const co2Reduced = values.publicTransport * 2.6 + values.meatlessDay * 8; // kg of CO2 per year
  const waterSaved = values.meatlessDay * 3400; // liters of water per year

  return (
    <section id="calculator" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Calculate Your Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See how small changes in your daily habits can make a significant difference for our
            planet.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 p-6 md:p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">Your Habits</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Reusable bags used per week instead of plastic
                  </label>
                  <input
                    type="range"
                    name="reusableBags"
                    min="0"
                    max="10"
                    value={values.reusableBags}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>{values.reusableBags}</span>
                    <span>10</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Days per week using public transport instead of car
                  </label>
                  <input
                    type="range"
                    name="publicTransport"
                    min="0"
                    max="7"
                    value={values.publicTransport}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>{values.publicTransport}</span>
                    <span>7</span>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    Meatless days per week
                  </label>
                  <input
                    type="range"
                    name="meatlessDay"
                    min="0"
                    max="7"
                    value={values.meatlessDay}
                    onChange={handleChange}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>{values.meatlessDay}</span>
                    <span>7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-green-700 p-6 md:p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Your Annual Impact</h3>

              <div className="space-y-6">
                <div>
                  <p className="text-green-200 mb-1">Plastic waste reduced</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{plasticSaved.toFixed(1)}</span>
                    <span className="ml-2 text-green-200">kg</span>
                  </div>
                </div>

                <div>
                  <p className="text-green-200 mb-1">CO₂ emissions saved</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{co2Reduced.toFixed(1)}</span>
                    <span className="ml-2 text-green-200">kg</span>
                  </div>
                </div>

                <div>
                  <p className="text-green-200 mb-1">Water conserved</p>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">
                      {waterSaved >= 1000
                        ? (waterSaved / 1000).toFixed(1)
                        : waterSaved.toFixed(0)}
                    </span>
                    <span className="ml-2 text-green-200">
                      {waterSaved >= 1000 ? 'thousand liters' : 'liters'}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-green-600">
                  <p className="text-sm text-green-200">
                    That's equivalent to planting approximately{' '}
                    <span className="font-bold">{Math.round(co2Reduced / 20)}</span> trees!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactCalculator;