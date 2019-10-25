import React from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist-min'
const Plot = createPlotlyComponent(Plotly);

const Data = require('../data/data.json')
let field = [];
let y1 = [];
let y2 = [];

let y3 = [];
let y4 = [];

let califield = [];
let caliy1 = [];
let caliy2 = [];
class Charts extends React.Component{
    componentDidMount(){
        let caliBees = Data.filter(data => data.state=== 'California')
        caliBees.map(data=>{
            califield.push(data.year);
        })
        caliy1.push(caliBees.filter(item => item.year === '2015')
        .reduce((acc,cur) => acc + Number(cur.pop_lost),0))
        caliy1.push(caliBees.filter(item => item.year === '2016')
        .reduce((acc,cur) => acc + Number(cur.pop_lost),0))
        let cali2017 = caliBees.filter(item => item.year === '2017')
        .reduce((acc,cur) => acc + Number(cur.pop_lost),0);
        let cali2018 = caliBees.filter(item => item.year === '2018')
        .reduce((acc,cur) => acc + Number(cur.pop_lost),0);

        console.log(caliy1)
        Data.map(data => {
            field.push(data.year);
            y1.push(data.pop_gained);
            y2.push(data.pop_lost);
            y3.push(data.varroa_mites + data.other_pests)
            y4.push(data.pop_renovated)
            console.log(y1)

        })
        
    }
    render(){
        let width = window.innerWidth
        if(width > 900){
            width *= .45;
        }
        return(
            <section id ="Charts">
                <h1>Population of Bees are <b>Decreasing</b></h1>
                <p>Pests, Weather, and Pesticide are all a factor to the decline population of bees,but what are we doing to help them?</p>
                <section className="plotDisplay">
                <Plot
                    data={[
                        {
                            x: field,
                            y: y1,
                            type: 'bar',
                            marker: {color: 'green'},
                            name:'Pop. Gained'
                        },
                        {
                            x: field, 
                            y: y2,
                            type: 'bar', 
                            marker:{color:'red'},
                            name:'Pop. Lost'
                        }
                        ]}
                        layout={{
                            width, 
                            title: 'Population Data',
                            paper_bgcolor:'#FFFFEB',
                            plot_bgcolor:'#f5f2d1'
                            }}
                            style={{
                                display:'block',
                            }}
                />
                <Plot
                    data={[
                        {
                            x: field,
                            y: y3,
                            type: 'bar',
                            marker: {color: 'grey'},
                            name:'Pests'
                        },
                        {
                            x: field, 
                            y: y2,
                            type: 'bar', 
                            marker:{color:'red'},
                            name:'Pop. Lost'
                        }
                        ]}
                        layout={{
                            width, 
                            title: 'Pests Impact Data',
                            paper_bgcolor:'#FFFFEB',
                            plot_bgcolor:'#f5f2d1',
                            xaxis:{
                                title:'Year'
                            },
                            }}
                            style={{
                                display:'block',
                            }}
                />
                                <Plot
                    data={[
                        {
                            x: field,
                            y: y4,
                            type: 'bar',
                            marker: {color: 'grey'},
                            name:'Pests'
                        },
                        {
                            x: field, 
                            y: y3,
                            type: 'bar', 
                            marker:{color:'red'},
                            name:'Pop. Lost'
                        }
                        ]}
                        layout={{
                            width, 
                            title: 'Pests Impact Data',
                            paper_bgcolor:'#FFFFEB',
                            plot_bgcolor:'#f5f2d1',
                            barmode:'stack',
                            xaxis:{
                                title:'Year'
                            },
                            }}
                            style={{
                                display:'block',
                            }}
                />
                                                <Plot
                    data={[
                        {
                            x: califield,
                            y: caliy1,
                            type: 'bar',
                            marker: {color: 'grey'},
                            name:'Pests'
                        },
                        {
                            x: califield, 
                            y: y3,
                            type: 'bar', 
                            marker:{color:'red'},
                            name:'Pop. Lost'
                        }
                        ]}
                        layout={{
                            width, 
                            title: 'California Data',
                            paper_bgcolor:'#FFFFEB',
                            plot_bgcolor:'#f5f2d1',
                            barmode:'stack',
                            xaxis:{
                                title:'Year'
                            },
                            }}
                            style={{
                                display:'block',
                            }}
                />
                </section>
            </section>
        );
    }
}
export default Charts;