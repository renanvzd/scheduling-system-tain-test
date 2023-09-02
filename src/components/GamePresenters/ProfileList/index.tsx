import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container, TableContainer } from "./styles";

interface IEmployees {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

interface EmployeeProps {
  employees: IEmployees[];
  handleEditEmployee: (employees: IEmployees) => void;
  handleDelete: (id: number) => {};
}

export function GamePresentersList({ employees, handleEditEmployee, handleDelete }: EmployeeProps) {

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
                <th>Admission Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.admissionDate}</td>
                  <td>
                    <button
                      type="button"
                      className="icon"
                      onClick={() => handleEditEmployee(employee)}
                    >
                      <FiEdit3 size={20} />
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      className="icon"
                      onClick={() => handleDelete(employee.id)}
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