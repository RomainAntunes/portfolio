export interface Permission {
  id: string;
  text: string;
  btnText?: string;
  isGranted: boolean;
  isMobile: boolean;
  isAlreadySaved?: boolean;
  callback: () => void;
}
