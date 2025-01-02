export interface ILoginForm {
  email: string;
  password: string;
}
export interface ILoginFormProps {
  onSubmit: (data: ILoginForm) => void;
}
