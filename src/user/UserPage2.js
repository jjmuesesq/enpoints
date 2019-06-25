import React, {Component} from 'react';
import IpGraphql from '../components/IpGraphql';

class UserPage2 extends Component {

  state = {
    email:'jjmuesesq@unal.edu.co',
    nombre: "",
    id:"",
    documento:"",
    edad:""   
  }

  componentWillMount(){
    let jwt = window.localStorage.getItem('jwt');
    const query = `
      mutation {
        userByEmail(email:
        {
            email: "${this.state.email}"
            
        })
        {
        content
        {
            id
            name
            document
            age
            email
            password_digest
        }
        message
        status
        }
      }
  `;

    const url = IpGraphql;
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query })
    };
  
    fetch(url, opts)
      .then(res => res.json(), console.log("PRIMERO YO"))
      .then(res => {
        // this.setState({data: res})
        const nombre = res.data.userByEmail.content.name;
        this.setState({nombre: nombre})

        const id = res.data.userByEmail.content.id;
        this.setState({id: id})

        const documento= res.data.userByEmail.content.document;
        this.setState({documento: documento})

        const edad = res.data.userByEmail.content.age;
        this.setState({edad: edad})           
        
      }, console.log("SEGUNDO YO"))
      .catch(console.error);
  }

  render(){
    return (
      <div className="UserPage2">
        <h1>Prueba usuario logueado</h1>
        {this.state.email}
        <br/>
        {this.state.nombre}
        <br/>
        {this.state.edad}
        <br/>
        {this.state.documento}
        <br/>
        {this.state.id}

      </div>
    );
  }
}

export default UserPage2;
