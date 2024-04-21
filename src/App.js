import logo from './logo.svg';
import './App.css';
import { supabase } from './supabaseClient'
import { useState } from 'react';



function App() {
  const [myStandings, setMyStandings] = useState([]);
  async function getStandings() {
    let { data: al_standings } = await supabase
      .from('al_standings')
      .select('*')
    setMyStandings(al_standings);
  }
  getStandings();

  const [mynlStandings, setMynlStandings] = useState([]);
  async function getnlStandings() {
    let { data: nl_standings } = await supabase
      .from('nl_standings')
      .select('*')
    setMynlStandings(nl_standings);
  }
  getnlStandings();

  const toTop = () => window.scrollTo({top: 0, behavior: 'smooth'});



  return (
    <div className="App">
      <header className="App-header">
        <p>
          Major League Baseball 2024 American League and National League Standings
        </p>
        <a href="https://www.espn.com/mlb/standings">Most up to date standings</a>
        <p>
          MLB standings provided by ESPN updated as of 4/18/24
        </p>
        <p className="text-3xl font-bold underline">
          American League
        </p>
        <table>
        {
          myStandings.map(b => 
            <tr>
                <td>{b.City}</td>
                <td>{b.Tn}</td>
                <td>{b.Gb}</td>
                <td>{b.Wins}</td>
                <td>{b.Losses}</td>
                <td>{b.Rd}</td>
                <td>{b.Dr}</td>
            </tr>
          )
        }
          
        </table>
        <p className="text-3xl font-bold underline">
          National League
        </p>
        <table>
          {
          mynlStandings.map(b => 
            <tr>
                <td>{b.City}</td>
                <td>{b.Tn}</td>
                <td>{b.Gb}</td>
                <td>{b.Wins}</td>
                <td>{b.Losses}</td>
                <td>{b.Rd}</td>
                <td>{b.Dr}</td>
            </tr>
          )
        }
  
        </table>
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toTop}>Back to Top</button>
        
      </header>
    </div>
  );
}

export default App;
