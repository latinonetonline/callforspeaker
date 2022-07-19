
import { ActionType } from '../types';




export const setLoading = (isLoading: boolean) =>
  ({
    type: 'set-loading',
    isLoading,
  } as const);

export const setCurrentStep = (step: number) =>
  ({
    type: 'set-current-step',
    step,
  } as const);

  export const setHasSecondSpeaker = (hasSecondSpeaker: boolean) =>
  ({
    type: 'set-has-second-speaker',
    hasSecondSpeaker,
  } as const);

export type CallForSpeakersActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setHasSecondSpeaker>
  | ActionType<typeof setCurrentStep>;
