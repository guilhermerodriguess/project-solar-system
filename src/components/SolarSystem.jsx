import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends Component {
  render() {
    const PlanetCardArray = planets.map((planet, index) => (
      <PlanetCard key={ index } planetName={ planet.name } planetImage={ planet.image } />
    ));
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {PlanetCardArray}
      </div>
    );
  }
}

export default SolarSystem;
