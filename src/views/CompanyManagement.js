import React, { useState } from 'react';

const CompanyManagement = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: 'HR', manager: 'John Doe' },
    { id: 2, name: 'Engineering', manager: 'Jane Smith' },
    { id: 3, name: 'Marketing', manager: 'Alice Johnson' },
  ]);

  const handleAddDepartment = () => {
    const newDepartment = { id: departments.length + 1, name: '', manager: '' };
    setDepartments([...departments, newDepartment]);
  };

  const handleDeleteDepartment = (id) => {
    setDepartments(departments.filter((dept) => dept.id !== id));
  };

  return (
    <div className="company-management">
      <h1>Company Management</h1>
      <p>Manage departments, roles, and employees below:</p>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Department</th>
            <th>Manager</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((dept, index) => (
            <tr key={dept.id}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="text"
                  value={dept.name}
                  onChange={(e) =>
                    setDepartments(
                      departments.map((d) =>
                        d.id === dept.id ? { ...d, name: e.target.value } : d
                      )
                    )
                  }
                  placeholder="Department Name"
                />
              </td>
              <td>
                <input
                  type="text"
                  value={dept.manager}
                  onChange={(e) =>
                    setDepartments(
                      departments.map((d) =>
                        d.id === dept.id ? { ...d, manager: e.target.value } : d
                      )
                    )
                  }
                  placeholder="Manager Name"
                />
              </td>
              <td>
                <button onClick={() => handleDeleteDepartment(dept.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleAddDepartment}>Add Department</button>
    </div>
  );
};

export default CompanyManagement;
