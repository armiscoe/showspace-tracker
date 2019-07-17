import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal'
import PropTypes from 'prop-types'
import { login } from  '../../actions/authActions'
import { clearErrors } from '../../actions/errorActions'

class LoginModal extends Component {
    state = {
        modal: false,
        email: '',
        password: '',
        msg: null 
      }

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if(error !== prevProps.error) {
            if(error.id === 'LOGIN_FAIL') {
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

        const { email, password } = this.state;

        const user = {
            email,
            password
        }

        this.props.login(user)
        
    }
    render() { 
        return ( 
            <div>
            <button onClick={this.toggle}>Login</button>
            <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
            >
            <div className="modal-header" toggle={this.toggle}>Login</div>
            <div className="modal-body">
            { this.state.msg ? ( <alert>{this.state.msg}</alert> ) : null }
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    
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
                        <button>Login</button>

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
 
export default connect(mapStateToProps, { login, clearErrors })(LoginModal);