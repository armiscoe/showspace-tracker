import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { register } from  '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

class RegisterModal extends Component {
    state = {
        modal: false,
        name: '',
        email: '',
        password: '',
        msg: null 
      }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'REGISTER_FAIL') {
                this.setState({ msg: error.msg.msg })
            } else {
                this.setState({ msg: null })
            }
        }

        if(this.state.modal) {
            if(isAuthenticated) {
                this.toggle();
            }

        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password } = this.state;

        const newUser = {
            name,
            email,
            password
        }
        this.props.register(newUser)
        
    }
    render() { 
        return ( 
            <div>
            <button onClick={this.toggle}>Register</button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
            >
            <div className="modal-header" toggle={this.toggle}>Register</div>
            <div className="modal-body">
            { this.state.msg ? ( <alert>{this.state.msg}</alert> ) : null }
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={this.onChange}
                        />
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={this.onChange}
                        />
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={this.onChange}
                        />
                        <button>Register</button>

                </div>

                </form>
            </div>

            </Modal>
            </div>
         );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
})
 
export default connect(mapStateToProps, { register, clearErrors })(RegisterModal);