import { createContext, useState } from "react";

const initialValue = {
  me: {
    displayName: "Ardi",
    isVerified: false,
  },
  profile: {
    avatar:""
  }
};

export const ContextUser = createContext(initialValue);

export default function ContextWrapper({children}) {
  const [state, stateSet] = useState(initialValue);

  const setState = (val) => {
    stateSet((prev) => {
      return {
        ...prev,
        ...val,
      };
    });
  };

  return (
    <ContextUser.Provider value={{ state, setState }}>
      {children}
    </ContextUser.Provider>
  );
}
