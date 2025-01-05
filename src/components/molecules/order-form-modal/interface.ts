export interface IOrderFormInputs {
  address: string;
}

export interface IOrderModalProps {
  open?: boolean;
  onClose?: () => void;
  onSubmit?: (data: IOrderFormInputs) => void;
}
