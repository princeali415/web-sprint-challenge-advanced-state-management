import React from 'react';
import {connect} from 'react-redux'
import {getSmurfData} from '../actions/index'
import Smurf from './Smurf'

export class SmurfDisplay extends React.Component {

    componentDidMount() {
        this.props.getSmurfData();
    }

    render() {
        return(
        <div>
            <Smurf smurfs={this.props.smurfs}/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
      smurfs: state.smurfs,
      isLoading: state.isLoading,
      error: state.error,
    };
  };
  
  export default connect(mapStateToProps, { getSmurfData })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.