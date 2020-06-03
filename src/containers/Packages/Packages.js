import React from 'react';
import axios from 'axios';
import Package from '../../components/Packages/Packages';

class Packages extends React.Component {
    state = {
        silverServices: null,
        packages: null,
        goldServices: null,
        platinumServices: null
    }
    componentDidMount() {
        //silver
        axios.get('https://car-wash-16a2b.firebaseio.com/services.json')
        .then(res=> {
            console.log(res.data);
            this.setState({silverServices: res.data})
            
        })
        .catch(err => console.log(err));

        //gold
        axios.get('https://car-wash-16a2b.firebaseio.com/gold-services.json')
        .then(res=> {
            console.log(res.data);
            this.setState({goldServices: res.data})
            
        })
        .catch(err => console.log(err));

        //platinum
        axios.get('https://car-wash-16a2b.firebaseio.com/platinum-services.json')
        .then(res=> {
            console.log(res.data);
            this.setState({platinumServices: res.data})
            
        })
        .catch(err => console.log(err));

        //packages
        axios.get('package-data.json')
        .then(res=> {
            console.log(res.data);
            this.setState({packages: res.data});
        })
        .catch(err => console.log(err))
    }
    render () {
        let packageOutput = <h1>Loading....</h1>
        if(this.state.silverServices && this.state.packages && this.state.goldServices
            && this.state.platinumServices) {
            packageOutput = (
                <>
                    <div style={{fontWeight: 'light'}}>
                        <h5 >Please Select package: </h5>
                        <br />
                            Get complete detailing / upholstery services at your door step on affordable prices. 
                            Take charge of your car's health today with our affordable cleaning packages.
                    </div>
                    <br />
                    <Package silverServices={this.state.silverServices} packages={this.state.packages}
                        goldServices={this.state.goldServices} platinumServices={this.state.platinumServices}/>
                </>)
        }
        return (
            <div>
                {packageOutput}
            </div>
        )
    }

}

export default Packages