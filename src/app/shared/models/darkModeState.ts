export enum DarkModeState {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system'
}

export const DarkModeStateMapping: Record<DarkModeState, string> = {
  [DarkModeState.LIGHT]: 'Light',
  [DarkModeState.DARK]: 'Dark',
  [DarkModeState.SYSTEM]: 'System'
}
