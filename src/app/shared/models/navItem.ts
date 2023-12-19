export interface NavItem {
  name: string;
  route?: string;
  callback?: () => void;
  icon?: string;
  local?: boolean;
}
