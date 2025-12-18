import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmeraldDesignSystemV2Module } from '@emerald-angular/design-system-v2';
import { EmeraldDatatableV2Module } from '@emerald-angular/datatable-v2';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  department: string;
  status: 'Active' | 'Inactive';
  joinDate: string;
}

@Component({
  selector: 'app-users',
  imports: [CommonModule, EmeraldDesignSystemV2Module, EmeraldDatatableV2Module],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  users: User[] = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@cbre.com',
      role: 'Senior Manager',
      department: 'Real Estate',
      status: 'Active',
      joinDate: '2022-01-15',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.johnson@cbre.com',
      role: 'Team Lead',
      department: 'Property Management',
      status: 'Active',
      joinDate: '2021-08-20',
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'michael.chen@cbre.com',
      role: 'Analyst',
      department: 'Finance',
      status: 'Active',
      joinDate: '2023-03-10',
    },
    {
      id: 4,
      name: 'Emily Davis',
      email: 'emily.davis@cbre.com',
      role: 'Director',
      department: 'Operations',
      status: 'Active',
      joinDate: '2020-05-01',
    },
    {
      id: 5,
      name: 'David Martinez',
      email: 'david.martinez@cbre.com',
      role: 'Associate',
      department: 'Research',
      status: 'Inactive',
      joinDate: '2022-11-12',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      email: 'lisa.anderson@cbre.com',
      role: 'Manager',
      department: 'Marketing',
      status: 'Active',
      joinDate: '2021-02-28',
    },
    {
      id: 7,
      name: 'Robert Taylor',
      email: 'robert.taylor@cbre.com',
      role: 'Consultant',
      department: 'Advisory',
      status: 'Active',
      joinDate: '2023-07-15',
    },
    {
      id: 8,
      name: 'Jennifer Wilson',
      email: 'jennifer.wilson@cbre.com',
      role: 'Specialist',
      department: 'IT',
      status: 'Active',
      joinDate: '2022-09-05',
    },
  ];

  totalUsers = this.users.length;
  activeUsers = this.users.filter((u) => u.status === 'Active').length;
  inactiveUsers = this.users.filter((u) => u.status === 'Inactive').length;

  columnDefs = [
    {
      field: 'id',
      headerName: 'ID',
      dataType: 'number',
      width: 80,
    },
    {
      field: 'name',
      headerName: 'Name',
      dataType: 'text',
      width: 180,
    },
    {
      field: 'email',
      headerName: 'Email',
      dataType: 'text',
      width: 250,
    },
    {
      field: 'role',
      headerName: 'Role',
      dataType: 'text',
      width: 150,
    },
    {
      field: 'department',
      headerName: 'Department',
      dataType: 'text',
      width: 180,
    },
    {
      field: 'status',
      headerName: 'Status',
      dataType: 'text',
      width: 120,
    },
    {
      field: 'joinDate',
      headerName: 'Join Date',
      dataType: 'date',
      width: 130,
    },
  ];

  paginationParams = {
    pageSize: 10,
    pageSizeOptions: [5, 10, 20, 50],
  };
}
