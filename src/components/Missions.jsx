import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    const missionsArray = missions.map((mission, index) => (<MissionCard
      name={ mission.name }
      year={ mission.year }
      country={ mission.country }
      destination={ mission.destination }
      key={ index }
    />
    ));
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missionsArray}
      </div>
    );
  }
}

export default Missions;
