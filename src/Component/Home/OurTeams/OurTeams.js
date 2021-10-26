import React from 'react';
import './OurTeams.css';
import team1 from '../../../image/team1.jpg';
import team2 from '../../../image/team2.jpg';
import team3 from '../../../image/team3.jpg';
import team4 from '../../../image/team4.jpg';

const teams = [
    {
        img: team1,
        name: 'Ismail Alex',
        description: 'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus'
    },
    {
        img: team2,
        name: 'Hilton Alex',
        description: 'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus'
    },
    {
        img: team3,
        name: 'Maria Martin',
        description: 'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus'
    },
    {
        img: team4,
        name: 'Maria Martin',
        description: 'Consectetur adipiscing elitt elit tellus luctus pulvinar dapibus luctus'
    },


]

const OurTeams = () => {
    return (
        <div className='container'>
            <div className="team-header">
                <h1>Our <font color='#00c3ed'>Expart</font> Team</h1>
                <p>Explore Our Completed Services! Consectetur adipiscing elitt elit tellus, luctus <br/> pulvinar dapibus leoconsectetur luctus nec.</p>
            </div>
            <div className="row">
                {
                    teams.map(team =>
                        <div key={team.img} className='col-md-3'>
                            <div className="team-container">
                                <div className="team-img">
                                    <img src={team.img} alt="" />
                                    <div className="team-text">
                                        <h4>{team.name}</h4>
                                    </div>
                                    <div className="team-hover">
                                        <h3>{team.name}</h3>
                                        <p>{team.description}</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default OurTeams;