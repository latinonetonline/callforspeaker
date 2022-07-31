import { FormInput } from "../../models/FormInput";
import { Step } from "../../models/Step";
import { ActionType, DispatchObject } from "../types";
import { getUnavailableDates } from "./callForSpeakers.api";

export const loadData =
  () => async (dispatch: React.Dispatch<DispatchObject>) => {
    dispatch(setLoading(true));

    const dates = await getUnavailableDates();
    dispatch(setUnavailableDates(dates));

    dispatch(setLoading(false));
  };
export const setLoading = (isLoading: boolean) =>
  ({
    type: "set-loading",
    isLoading,
  } as const);

export const setCurrentStep = (step: number) =>
  ({
    type: "set-current-step",
    step,
  } as const);

export const setHasSecondSpeaker = (hasSecondSpeaker: boolean) =>
  ({
    type: "set-has-second-speaker",
    hasSecondSpeaker,
  } as const);

export const setIsAuthenticated = (isAuthenticated?: boolean) =>
  ({
    type: "set-is-authenticated",
    isAuthenticated,
  } as const);

export const setUnavailableDates = (dates: Date[]) =>
  ({
    type: "set-unavailable-dates",
    dates,
  } as const);

export const insertStep = (index: number, step: Step) =>
  ({
    type: "insert-step",
    index,
    step,
  } as const);

export const removeStep = (index: number) =>
  ({
    type: "remove-step",
    index,
  } as const);

  export const updateFormState = (form: Partial<FormInput>) =>
  ({
    type: "update-form-state",
    form,
  } as const);
  export const resetState = () =>
  ({
    type: "reset-state",
  } as const);

export type CallForSpeakersActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setIsAuthenticated>
  | ActionType<typeof setUnavailableDates>
  | ActionType<typeof setHasSecondSpeaker>
  | ActionType<typeof setCurrentStep>
  | ActionType<typeof updateFormState>
  | ActionType<typeof insertStep>
  | ActionType<typeof resetState>
  | ActionType<typeof removeStep>;
