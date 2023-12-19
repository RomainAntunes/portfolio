export interface Modal {
  id: string;
  title: string;
  content: string;
  callback?: () => void;
  buttons?: ModalButtons[];
}

export interface ModalButtons {
  text: string;
  callback: () => void;
  link: string;
}
