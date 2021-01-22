import React from 'react';
import {connect} from 'react-redux';
import {postSmurfData} from '../actions/index'

class AddForm extends React.Component {

    state = {
        name: "",
        position: "",
        nickname: "",
        description: "",
      };

    handleChange = e => {
        if (e.target.name === "name") {
                this.setState({ name: e.target.value });
            } else if (e.target.name === "position") {
                this.setState({ position: e.target.value });
            } else if (e.target.name === "nickname") {
                this.setState({ nickname: e.target.value });
            } else if (e.target.name === "description") {
                this.setState({ description: e.target.value });
            }
        }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.postSmurfData(this.state);
        console.log(this.state);
        if (this.state.name && this.state.position && this.state.nickname) {
          this.setState({
            name: "",
            position: "",
            nickname: "",
            description: "",
          });
        }
      };

    render() {
        return(
        <section>
            <h2>Add Smurf</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">name:</label><br/>
                    <input onChange={this.handleChange} value={this.state.name} name="name" id="name" type='text' />
                    <label htmlFor="nickname">nickname:</label><br/>
                    <input onChange={this.handleChange} value={this.state.nickname} name="nickname" id="nickname" type='text' />
                    <label htmlFor="position">position:</label><br/>
                    <input onChange={this.handleChange} value={this.state.position} name="position" id="postion" type='text' />
                    <label htmlFor="description">description:</label><br/>
                    <input onChange={this.handleChange} value={this.state.description} name="description" id="description" type='text' />
                </div>

                <div data-testid="errorAlert" className="alert alert-danger" role="alert">Error: 
                    {this.props.postError ? <div>{this.props.postError}</div> : null}
                 </div>

                

                <button>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, {postSmurfData})(AddForm)

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.