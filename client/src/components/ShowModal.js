import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addShow } from '../actions/showActions';
import Modal from 'react-modal'
import uuid from 'uuid'

class ShowModal extends Component {
    state = {
        modal: false,
        venue: ''
      }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();

        const newShow = { 
            venue: this.state.venue

        }

        this.props.addShow(newShow)

        this.toggle();
        
    }
    render() { 
        return ( 
            <div>
            <button onClick={this.toggle}>Add Show</button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
            >venue
            <div className="modal-header" toggle={this.toggle}>Add to Show List</div>
            <div className="modal-body">
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Show</label>
                    <input
                        type="text"
                        name="venue"
                        id='show'
                        placeholder="Add new show"
                        onChange={this.onChange}
                        />
                        <button>Add Show</button>

                </div>

                </form>
            </div>

            </Modal>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    show: state.show
})
 
export default connect(mapStateToProps, { addShow })(ShowModal);