import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Session } from "./types/session";
import { createMonogram } from "./utils/helpers";

interface GlobalState {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  monogram: string;
  setMonogram: React.Dispatch<React.SetStateAction<string>>;
  points: number;
  setPoints: React.Dispatch<React.SetStateAction<number>>;
  showGamification: boolean;
  setShowGamification: React.Dispatch<React.SetStateAction<boolean>>;
  sessions: Map<string, Session[]>;
  setSessions: React.Dispatch<React.SetStateAction<Map<string, Session[]>>>;
  isContentFilterEnabled: boolean;
  setIsContentFilterEnabled: React.Dispatch<React.SetStateAction<boolean>>;
  isTermsAndConditionsAccepted: boolean;
  setIsTermsAndConditionsAccepted: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

interface GlobalStateProviderProps {
  children: ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({
  children,
}) => {
  const [username, setUsername] = useState(() => {
    return localStorage.getItem("username") || "";
  });
  const [monogram, setMonogram] = useState(() => {
    return createMonogram(localStorage.getItem("username") || "");
  });

  const [points, setPoints] = useState(() => {
    const storedPoints = localStorage.getItem("points");
    return storedPoints ? parseInt(storedPoints, 10) : 0;
  });

  const [isContentFilterEnabled, setIsContentFilterEnabled] = useState(() => {
    const storedValue = localStorage.getItem("isContentFilterEnabled");
    return storedValue === null ? true : storedValue === "true";
  });

  const [showGamification, setShowGamification] = useState(false);
  const [isTermsAndConditionsAccepted, setIsTermsAndConditionsAccepted] =
    useState(false);

  const [sessions, setSessions] = useState<Map<string, Session[]>>(
    new Map<string, Session[]>()
  );

  useEffect(() => {
    localStorage.setItem("username", username);
    setMonogram(createMonogram(username));
  }, [username]);

  // useEffect(() => {
  //   localStorage.setItem("monogram", monogram);
  // }, [monogram]);

  useEffect(() => {
    localStorage.setItem("points", points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem(
      "isContentFilterEnabled",
      isContentFilterEnabled.toString()
    );
  }, [isContentFilterEnabled]);

  useEffect(() => {
    if (!username) {
      fetch(process.env.BACKEND_API_URL + "/username/" + username).then(
        (resp) =>
          resp.text().then((data) => {
            setUsername(data);
            setMonogram(createMonogram(data));
          })
      );
    }
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{
        username,
        setUsername,
        monogram,
        setMonogram,
        points,
        setPoints,
        showGamification,
        setShowGamification,
        sessions,
        setSessions,
        isContentFilterEnabled,
        setIsContentFilterEnabled,
        isTermsAndConditionsAccepted,
        setIsTermsAndConditionsAccepted,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
