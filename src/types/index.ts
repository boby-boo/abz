export interface Employee {
    id: number
    name: string
    email: string
    phone: string
    photo: string | undefined
    position: string
    position_id: number
    registration_timestamp?: number
}

export type EmployeePost = Omit<Employee, 'id' | 'registration_timestamp'>;

export interface EmployeePosition {
    id: number;
    name: string;
}