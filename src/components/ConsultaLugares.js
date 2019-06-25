import React from 'react';

const query = `
mutation {
    createScoreResource(scoreresource: {
      name: "usuario 1 "
        description: "descripcion 1"
        latitude: 1
        longitude: 1
        user_id: 1
  
    }) {
      name
    }
  }
`;

const url = "http://35.196.16.91/graphql";
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query })
};
// fetch(url, opts)
//   .then(res => res.json())
//   .then(
//     ({ data }) => `
//         <p>
//           Id: ${data.listsByUserId.content.id}
//           <br/>
//           Id_user: ${data.listsByUserId.content.id_user}
//           <br/>
//           Nombre: ${data.listsByUserId.content.name}
//           <br/>
//           Comentario: ${data.listsByUserId.content.comment}
//           <br/>
//           Fecha EStimada: ${data.listsByUserId.content.estimatedDate} 
//         </p>
//   `
//   )
//   .then(text => (document.body.innerHTML = text))
//   .catch(console.error);

fetch(url, opts)
  .then(res => res.json())
  .then(console.log)
  .catch(console.error);

class ConsultaLugares extends React.Component{
    render(){
        return(
            <div>
                <h1>Consulta Lugares</h1>
            </div>
        );
    }
}

export default ConsultaLugares;
