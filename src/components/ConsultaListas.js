import React from 'react';

const query = `
    mutation {
        deletePlace(id: 1) {
        message
        }
    }
`;

const url = "http://192.168.99.101:5500/graphql";
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

class ConsultaListas extends React.Component{
    render(){
        return(
            <div>
                <h1>Consulta Listas de lugares</h1>
            </div>
        );
    }
}

export default ConsultaListas;
