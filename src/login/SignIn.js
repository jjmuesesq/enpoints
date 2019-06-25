import React, {Component} from 'react';

const query = `
    mutation {
        signIn(user: {
        email: "dacherreragu@unal.edu.co"
        password: "123456"
        }) {
        content
        message
        } 
    }
  
`;

class SignIn extends Component {
    handleSubmit = event => {
        event.preventDefault();

        fetch("http://192.168.99.101:5500/graphql",
            {
                method: 'POST',
                body: JSON.stringify({ query }),
                // body: JSON.stringify({
                //     auth: {
                //         email: this.inputNode1.value,
                //         password: this.inputNode2.value
                //     }
                // }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'                    
                },
            },
        ).then(res => res.json()).then(res => (console.log(res.jwt),
            window.localStorage.setItem('jwt', res.jwt)
        ))
        // .then(() => this.props.history.push('/welcome'))
        .catch(function(error){console.log('Error: ', error.message)})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='email'>email</label> <br/>
                    <input type='email' id='email' name='email' ref={node => {this.inputNode1 = node}}/> <br/>

                    <label htmlFor='password'>password</label> <br/>
                    <input type='password' id='password' name='password' ref={node => {this.inputNode2 = node}}/> <br/>

                    <input type='submit' value='Sign In'/>
                </form>
            </div>
        )
    }
}

export default SignIn;