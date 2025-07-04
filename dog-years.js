
function dogYears(planet, seconds) {
  const earthSeconds = 31557600; // seconds in one Earth year
  const orbitalPeriods = {
    earth: 1.0,
    mercury: 0.2408467,
    venus: 0.61519726,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const ageInEarthYears = seconds / earthSeconds / orbitalPeriods[planet];

  const ageInDogYears = ageInEarthYears * 7;

  return Number(ageInDogYears.toFixed(2));
}
