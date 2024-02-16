import type { UserData } from "@clerk/types";
export interface HeaderType {
  user: { id: string; isSignedIn: boolean };
  openDrawer: () => void;
}
