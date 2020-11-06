import React, {Component} from 'react';

class Form extends Component {
    state = {
        label: ''
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.addItem(this.state.label)
    }

    onChange = (event) => {
        this.setState({label: event.currentTarget.value})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div style={{padding: '0 15px'}} className="form-group row">
                    <input value={this.state.label} onChange={this.onChange} className="form-control col-8" type="text"
                           name="label"/>
                    <button className="btn btn-success col-3 offset-1" type="submit">Add</button>
                </div>
            </form>
        );
    }
}

export default Form;