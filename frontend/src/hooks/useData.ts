import { useEffect, useState } from "react";
import api from "../services/api";

export type UseDataResult = {
  id: number;
  name: string;
  age: number;
  gender: string;
}

export function useData() {
  const [users, setUsers] = useState<UseDataResult[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    api.get<UseDataResult[]>('/users').then(response => {
      setUsers(response.data)
      setIsLoading(false)
    })
  }, [])

  return { users, isLoading }
}
