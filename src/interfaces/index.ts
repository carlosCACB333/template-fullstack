interface IField {
  [name: string]: string;
}
export interface IError {
  status: number;
  error: string;
  message: string;
  field?: IField;
}
