import ColumnNews1 from './ColumnNews1'
import ColumnNews2 from './ColumnNews2'
import ColumnNews3 from './ColumnNews3'

export default function BoxNews({column_1, column_2, column_3}) {

  return (

    <div className="container">
      <ColumnNews1 column_1={column_1}/>
      <ColumnNews2 column_2={column_2}/>
      <ColumnNews3 column_3={column_3}/>
    </div>

  );
}


