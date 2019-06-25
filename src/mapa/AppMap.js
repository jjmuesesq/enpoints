import React from 'react';
import DirectionGraphq from './IpGraphql';

class AppMap extends React.Component{
    
    state = {
        
    }

    handleClick = e => {
    //  console.log("=====================================================================")
        console.log("--> ESTO ES PARA PINTAR RUTA MAPA")

        const query = `
          
        `;


        const url = DirectionGraphq;
        const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
        };

        fetch(url, opts)
        .then(res => res.json())
        .then(console.log)
        .catch(console.error);
        console.log("=====================================================================\n\n")
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }


    
    render(){
        return(
            <div>
                <p>pintando mapa</p>
            </div>
        );
    }
}


export default AppMap;