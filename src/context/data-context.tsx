import React, { createContext, useContext, useEffect, useState } from "react";
import api from "@/services/api";

interface DataContextProviderProps {
  children: React.ReactNode;
}

interface IEmployees {
  id: number;
  name: string;
  age: string;
  admissionDate: string;
}

interface DataContextType {
  employees: IEmployees[];
  addEmployee: (employee: Omit<IEmployees, 'id'>) => Promise<void>;
  updateEmployee: (employee: IEmployees) => Promise<void>;
  deleteEmployee: (id: number) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataContextProvider: React.FC<DataContextProviderProps> = ({ children }) => {
  const [employees, setEmployees] = useState<IEmployees[]>([]);

  const getEmployees = async () => {
    try {
      const response = await api.get<IEmployees[]>('/employees');
      setEmployees(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addEmployee = async (employee: Omit<IEmployees, 'id'>) => {
    try {
      const response = await api.post('/employees', {
        ...employee,
      });

      setEmployees([...employees, response.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateEmployee = async (employee: IEmployees) => {
    try {
      const response = await api.put<IEmployees>(
        `/employees/${employee.id}`,
        employee
      );
      const updatedEmployees = employees.map((emp) =>
        emp.id === response.data.id ? response.data : emp
      );
      setEmployees(updatedEmployees);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      await api.delete(`/employees/${id}`);
      const updatedEmployees = employees.filter((emp) => emp.id !== id);
      setEmployees(updatedEmployees);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <DataContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee
      }}>
      {children}
    </DataContext.Provider>
  );
};


export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("Context Error");
  }
  return context;
};