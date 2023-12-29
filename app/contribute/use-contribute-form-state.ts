import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type ContributeFormState = { pageTitle: string; content: string };

const contributeFormStateAtom = atomWithStorage<ContributeFormState[]>("contributeFormState", []);

export function useContributeFormState() {
  const [contributeFormState, setContributeFormState] = useAtom(contributeFormStateAtom);

  const saveContributeFormState = (pageTitle: string, content: string) => {
    if (!pageTitle) return;

    const existingIndex = contributeFormState.findIndex((cfs) => cfs.pageTitle === pageTitle);
    if (existingIndex != -1) {
      contributeFormState[existingIndex].content = content;
    } else {
      contributeFormState.push({ pageTitle, content });
    }
    setContributeFormState(contributeFormState);
  };

  const getContributeContent = (pageTitle: string) => {
    return contributeFormState.find((cfs) => cfs.pageTitle === pageTitle)?.content ?? "";
  };

  const deleteContributeFormState = (pageTitle: string) => {
    setContributeFormState(contributeFormState.filter((cfs) => cfs.pageTitle !== pageTitle));
  };

  return { saveContributeFormState, getContributeContent,deleteContributeFormState };
}
