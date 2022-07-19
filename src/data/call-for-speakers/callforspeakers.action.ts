

import { User } from 'oidc-react';
import { ActionType, DispatchObject } from '../types';
import { getUnavailableDates } from './callForSpeakers.api';


export const loadData =
  () => async (dispatch: React.Dispatch<DispatchObject>) => {
    dispatch(setLoading(true));

    const dates = await getUnavailableDates();
    dispatch(setUnavailableDates(dates));

    dispatch(setLoading(false));
  };
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

  export const setUser = (user?: User) =>
  ({
    type: 'set-user',
    user,
  } as const);

  export const setUnavailableDates = (dates: Date[]) =>
  ({
    type: 'set-unavailable-dates',
    dates,
  } as const);

export type CallForSpeakersActions =
  | ActionType<typeof setLoading>
  | ActionType<typeof setUser>
  | ActionType<typeof setUnavailableDates>
  | ActionType<typeof setHasSecondSpeaker>
  | ActionType<typeof setCurrentStep>;
