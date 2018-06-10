import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{

    // componentDidMount(){
    //     axios
    //         .get('/healthcheck')
    //         .then(response => {
    //             console.log(response.data)
    //         })   
    // }

    async componentDidMount(){
        try{
            const response = await axios.get('/healthcheck');
            console.log(response.data);
        }catch(error){
            console.log(error);
        }
    }

    render(){
        return(
            <div>
                Hello
            </div>
        )
    }
}

export default App;