import { Dispatch, SetStateAction, createContext } from "react";

export type UserType = {
  name: string | null;
  email: string | null;
  profileUrl?: string | null;
};

interface UserContextType {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
}

const userContext = createContext<UserContextType>({
  user: {
    name: "",
    email: "",
    profileUrl: "",
  },
  setUser: () => {},
});

export default userContext;
