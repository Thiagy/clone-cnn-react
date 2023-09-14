import React from 'react';

export default function ColumnNews1({ column_1 }) {
  // Verifica se column_1 existe e tem pelo menos 2 elementos
  if (!column_1 || column_1.length < 2) {
    return null; // Ou qualquer conteúdo padrão que você deseja renderizar se column_1 não estiver disponível
  }

  return (
    <div className="column-1 column">
      <div className="noticia">
        <a href="#">
          <img className="img_column" src={column_1[0].image} alt={column_1[0].content} />
        </a>
        <a href="#">
          <h4 className="content_column">{column_1[0].content}</h4>
        </a>
      </div>
      <div className="list-news">
        <hr />
        {column_1.slice(1, 3).map((item, index) => (
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
