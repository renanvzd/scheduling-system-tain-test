import { useEffect, useState } from 'react';
import api from "@/services/api";

import { Container, TableContainer } from "./styles";

interface IEmployees {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

export function GamePresentersContent() {
  const [employees, setEmployees] = useState<IEmployees[]>([]);

  useEffect(() => {
    async function getEmployees() {
      const response = await api.get('/employees');

      setEmployees(response.data);
    }

    getEmployees()
  }, [])

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
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.age}</td>
                  <td>{employee.admissionDate}</td>
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