import React, { Component } from 'react';
import './main.css';
import data from '../resources/prostars.json';
import CONTENT from './table'

class HOME extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            randomize: false,
            stars: [...data.slice(0, 5)]
        };
    }

    onSortChange = () => {
        this.setState((state) => {
            if(Array.isArray(state.stars)){
                return {
                    stars: state.stars.sort((a, b) =>
                     a.name.toLowerCase() - b.name.toLowerCase() > 0 ? 1 : -1
                    )
                }
            }            
        });
    };
    
    randNum = () => {
        return Math.floor(52*Math.random())
    }

    randGen = () => {
        {(!this.state.randomize) && this.setState({stars: [
            data[this.randNum()],
            data[this.randNum()],
            data[this.randNum()],
            data[this.randNum()],
            data[this.randNum()]
        ]})}
    }

    deleteRecord = (e) => {
        console.log(e.target.key);
        console.log("WORK");
    }

    render() { 
        return (  
            <div className="prostar-container">
                <div className="head"><h2>ProStars</h2></div>
                <div className="filter">
                    <button className="filterBtn" id="filterBtn-1" onClick={this.randGen}>Get Random Contact</button>
                    <button className="filterBtn" id="filterBtn-2" onClick={this.onSortChange}>Sort by Name</button>
                    <button className="filterBtn" id="filterBtn-3">Sory by Popularity</button>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.stars.map((item)=>
                            <CONTENT key={item.id} data={item} deleteRecord={this.deleteRecord}/>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default HOME;