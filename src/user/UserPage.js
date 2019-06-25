import React from 'react';
import IpGraphql from '../components/IpGraphql';

const query = `
    mutation {
        userByEmail(email:
        {
            email: "dacherreragu@unal.edu.co"
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
  .then(res => res.json())
  .then(
    ({ data }) => `
        <p>
          Nombre: ${data.userByEmail.content.id}
          <br/>
          Nombre: ${data.userByEmail.content.name}
          <br/>
          Documento: ${data.userByEmail.content.document}
          <br/>
          Edad: ${data.userByEmail.content.age}
          <br/>
          Email: ${data.userByEmail.content.email}
          <br/>
          Password: ${data.userByEmail.content.password_digest} 
        </p>
  `
  )
  .then(text => (document.body.innerHTML = text))
  .catch(console.error);

// fetch(url, opts)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);

class UserPage extends React.Component{
    render(){
        return(
            <div>
                <h1>Consulta Usuario</h1>
            </div>
        );
    }
}

export default UserPage;
