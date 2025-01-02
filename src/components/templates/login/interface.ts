import { ILoginFormProps } from "../../organisms/login-form/interface";

export interface ILoginTemplateProps
  extends Pick<ILoginFormProps, "onSubmit"> {}
