export type Task = {
  id: number,
  task: string,
  status: boolean,
}

export type Filter = 'all' | 'active' | 'completed';