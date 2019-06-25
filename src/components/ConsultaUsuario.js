import React from 'react';

const query = `
    query {
        userById(id: 1) {
        content {
            name
            document
            age
            email
            password_digest
        }
        message
        }
    }
`;

const url = "http://35.196.16.91/graphql";
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
          Nombre: ${data.userById.content.name}
          <br/>
          Documento: ${data.userById.content.document}
          <br/>
          Edad: ${data.userById.content.age}
          <br/>
          Email: ${data.userById.content.email}
          <br/>
          Password: ${data.userById.content.password_digest} 
        </p>
  `
  )
  .then(text => (document.body.innerHTML = text))
  .catch(console.error);

// fetch(url, opts)
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);

class ConsultaUsuario extends React.Component{
    render(){
        return(
            <div>
                <h1>Consulta Usuario</h1>
            </div>
        );
    }
}

export default ConsultaUsuario;
