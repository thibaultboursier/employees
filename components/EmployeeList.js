import Link from "next/link";
import { createSlug } from "../utils/slug";

const EmployeeList = ({ employees }) => (
  <ul>
    {employees.map(employee => (
      <li key={employee.id}>
        <Link href={`employees/${employee.id}`} as={`employees/${createSlug(employee)}`}>
          <a>
            {employee.first_name} {employee.last_name}
          </a>
        </Link>
      </li>
    ))}
  </ul>
);

export default EmployeeList;
