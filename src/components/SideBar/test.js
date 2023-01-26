import ReactTable from 'react-table';
// import 'react-table/react-table.css';

const data = [
  { type: '类型1', value: 100 },
  { type: '类型2', value: 200 },
  { type: '类型3', value: 150 },
  { type: '类型4', value: 50 },
];

const columns = [
  {
    Header: '类型',
    accessor: 'type',
  },
  {
    Header: '值',
    accessor: 'value',
  },
];

export function DataTable() {
  return (
    <div className="table-container">
      <ReactTable
        data={data}
        columns={columns}
        className="-striped -highlight"
      />
    </div>
  );
}
