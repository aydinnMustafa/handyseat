import { useEffect } from "react";

export const useBeforeUnload = (isDirty: boolean) => {
  useEffect(() => {
    const confirmExit = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", confirmExit);

    return () => {
      window.removeEventListener("beforeunload", confirmExit);
    };
  }, [isDirty]);
};
