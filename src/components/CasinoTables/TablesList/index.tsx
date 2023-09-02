import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container, TableContainer } from "./styles";

interface ICasinoTable {
  id: number;
  tableNumber: string;
  game: string;
  creationDate: string;
}

interface CasinoTableProps {
  tables: ICasinoTable[];
  handleDelete: (id: number) => {};
}

export function CasinoTablesList({ tables, handleDelete }: CasinoTableProps) {

  return (
    <Container>
      <div>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Table Number</th>
                <th>Game</th>
                <th>Creation Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {tables?.map((table) => (
                <tr key={table.id}>
                  <td>{table.id}</td>
                  <td>{table.tableNumber}</td>
                  <td>{table.game}</td>
                  <td>{table.creationDate}</td>
                  <td>
                    <button
                      type="button"
                      className="icon"
                    >
                      <FiEdit3 size={20} />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="icon"
                      onClick={() => handleDelete(table.id)}
                    >
                      <FiTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </div>
    </Container>
  );
}