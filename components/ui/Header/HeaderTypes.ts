export interface HeaderType {
  user: {
    isLoaded: boolean;
    isSignedIn: boolean;
  };
  openDrawer: () => void;
}
