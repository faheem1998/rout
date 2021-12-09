import React from 'react';
import './App.css';
import GetRows from './GetRows';
import TableHeader from './TableHeader';
export const testContext = React.createContext();
const About=()=>{
    const PlrInfo = [
        {
            id:101,
            playername:"Dhoni",
            jersey:7,
            country:"India",
            city:"Jarkhand"
        },
        {
            id:102,
            playername:"Sachin",
            jersey:10,
            country:"India",
            city:"Mumbai"
        },
        {
            id:103,
            playername:"ViratKohli",
            jersey:18,
            country:"India",
            city:"Mumbai"
        },
    ];
    const PlayerList = PlrInfo.map(plr => <GetRows plr={plr} />)
    return (
        <div>
            <h1 className="App">CRICKET PLAYERS</h1> 
            <TableHeader /> 
            {PlayerList}
        </div>
    );
}

export default About;