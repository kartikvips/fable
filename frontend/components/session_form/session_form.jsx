import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(this.props.closeModal);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
         if(this.props.formType === 'signup'){
            return (
                <div className="signup-form-container">
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        <h1 class = "form-title">Join fable.</h1>
                     <br />
                     
                        
                        {this.renderErrors()}
                        <div className="login-form">
                            <br />
                            <label for="firstname">
                            <input type="text"
                                    value={this.state.firstname}
                                    onChange={this.update('firstname')}
                                    className="login-input"
                                    placeholder = "Your firstname"
                                />
                            </label>

                            <br />
                            <label for="lastname">
                            <input type="text"
                                    value={this.state.lastname}
                                    onChange={this.update('lastname')}
                                    className="login-input"
                                    placeholder="Your lastname"
                                />
                            </label>

                            <br />
                            <label for="email">
                            <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Your email"
                                />
                            </label>
                            <br />
                            <label for="password">
                            <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Your password"
                                />
                            </label>
                            <br />
                            <input className="session-submit" type="submit" value="Continue" />
                        </div>
                    </form>
                    <div className="otra">
                        {this.props.otherForm}
                    </div>
                </div>

            );
        } else {
             return (
                 <div className="login-form-container">
                     <div onClick={this.props.closeModal} className="close-x">&times;</div>
                     <form onSubmit={this.handleSubmit} className="login-form-box">
                         <h1 class="form-title">Sign in with email</h1>
                     <br />
                         {this.renderErrors()}
                         <div className="login-form">
                             <br />
                             <label for="email">
                            <input type="text"
                                     value={this.state.email}
                                     onChange={this.update('email')}
                                     className="login-input"
                                     placeholder="Your email"
                                 />
                             </label>
                             <br />
                             <label for="password">
                            <input type="password"
                                     value={this.state.password}
                                     onChange={this.update('password')}
                                     className="login-input"
                                     placeholder="Your password"
                                 />
                             </label>
                             <br />
                             <input className="session-submit" type="submit" value="Continue" />

                         </div>
                     </form>
                        <div className="otra">
                            {this.props.otherForm}
                         </div>
                 </div>

             );
        }
    }
}

export default withRouter(SessionForm);

