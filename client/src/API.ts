import axios, { AxiosResponse } from "axios"

const baseUrl: string = "http://localhost:4000"


/**
 * @description we use the function getTodos() to get data from the server. It will return a promise of type AxiosResponse that holds the Todos fetched that need to match the type ApiDataType.
 * @returns 
 */
export const getTodos = async (): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todos: AxiosResponse<ApiDataType> = await axios.get(
      baseUrl + "/todos"
    )
    return todos
  } catch (error) {
    throw new Error(error)
  }
}

export const addTodo = async (
  formData: ITodo
): Promise<AxiosResponse<ApiDataType>> => {
  try {
    const todo: Omit<ITodo, "_id"> = {
      name: formData.name,
      description: formData.description,
      status: false,
    }
    const saveTodo: AxiosResponse<ApiDataType> = await axios.post(
      baseUrl + "/add-todo",
      todo
    )
    return saveTodo
  } catch (error) {
    throw new Error(error)
  }
}
