import React from 'react';

export default function ColumnNews3({ column_3 }) {
  // Verifica se column_3 existe e tem pelo menos 4 elementos
  if (!column_3 || column_3.length < 4) {
    return null; // Ou qualquer conteúdo padrão que você deseja renderizar se column_3 não estiver disponível
  }

  return (
    <div className="column-3 column">
      <div className="noticia">
        <a href="#">
          <img className="img_column" src={column_3[0].image} alt={column_3[0].content} />
        </a>
        <a href="#">
          <h4 className="content_column">{column_3[0].content}</h4>
        </a>
      </div>
      <div className="list-news">
        <hr />
        {column_3.slice(1, 4).map((item, index) => (
          <div className="flex-image-text" key={index}>
            <a className="flex-image" href="">
              <img className="img_column" src={item.image} alt={item.content} />
            </a>
            <a className="flex-text" href="">
              <p className="content_column" style={{ fontSize: '16px' }}>{item.content}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
