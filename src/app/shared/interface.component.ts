export interface Task{
    id: number;
    name: string;
    dueDate: Date;
    status: 'completed' | 'pending';
}