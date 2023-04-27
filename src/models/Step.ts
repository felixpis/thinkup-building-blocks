import { IQuestion } from "./Question"

export interface IStep {
  id: string
  order: number,
  questions: IQuestion[]
}