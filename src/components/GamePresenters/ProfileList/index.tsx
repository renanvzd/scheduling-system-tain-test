import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container, TableContainer } from "./styles";

interface IGamePresenters {
  id: number;
  name: string;
  age: string;
  createdAt: string;
  shift: string;
}

interface GamePresenterProps {
  gamePresenters: IGamePresenters[];
  handleEditGamePresenter: (gamePresenters: IGamePresenters) => void;
  handleDelete: (id: number) => {};
}

export function GamePresentersList({ gamePresenters, handleEditGamePresenter, handleDelete }: GamePresenterProps) {

  return (
    <Container>
      <div>
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Shift</th>
                <th>Created At</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {gamePresenters?.map((gamePresenter) => (
                <tr key={gamePresenter.id}>
                  <td>{gamePresenter.id}</td>
                  <td>{gamePresenter.name}</td>
                  <td>{gamePresenter.age}</td>
                  <td>{gamePresenter.shift}</td>
                  <td>{gamePresenter.createdAt}</td>
                  <td>
                    <button
                      type="button"
                      className="icon"
                      onClick={() => handleEditGamePresenter(gamePresenter)}
                    >
                      <FiEdit3 size={20} />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="icon"
                      onClick={() => handleDelete(gamePresenter.id)}
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