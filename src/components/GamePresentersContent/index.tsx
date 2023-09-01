import { Container, Header, TableContainer } from "./styles";

const employees = [
  { ID: 1, Name: 'Game Presenter 1', Age: 30, AdmissionDate: '2023-01-09' },
  { ID: 2, Name: 'Game Presenter 2', Age: 30, AdmissionDate: '2023-01-09' },
  { ID: 3, Name: 'Game Presenter 3', Age: 30, AdmissionDate: '2023-01-09' },
];

export function GamePresentersContent() {
  return (
    <Container>
      <div>
        <Header>
          <p>Game Presenters</p>
        </Header>
      </div>

      <div>
        <TableContainer>
          <div className="add-button">
            <button>
              Add new Game Presenter
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Admission Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.ID}>
                  <td>{employee.ID}</td>
                  <td>{employee.Name}</td>
                  <td>{employee.Age}</td>
                  <td>{employee.AdmissionDate}</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </div>
    </Container>
  );
}