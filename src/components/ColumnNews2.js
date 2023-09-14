import React from 'react';

export default function ColumnNews2({ column_2 }) {
  // Verifica se column_2 existe e tem pelo menos 2 elementos
  if (!column_2 || column_2.length < 2) {
    return null; // Ou qualquer conteúdo padrão que você deseja renderizar se column_2 não estiver disponível
  }

  return (
    <div className="column-2 column">
      {column_2.slice(0, 2).map((item, index) => (
        <div className="noticia" key={index}>
          <a href="#">
            <img className="img_column" src={item.image} alt={item.content} />
          </a>
          <a href="#">
            <h4 className="content_column">{item.content}</h4>
          </a>
        </div>
      ))}
    </div>
  );
}
