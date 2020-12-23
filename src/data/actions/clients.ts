import { Dispatch } from 'redux';
import { FormikHelpers, FormikValues } from 'formik';
import { ThunkExtraArguments } from '../utils/types';
import * as constants from '../constants/clients';
import { RootState } from '../reducers';

export const fetchList = () => async (
  dispatch: Dispatch,
  _: () => RootState,
  { api, normalize, schema }: ThunkExtraArguments,
): Promise<boolean> => {
  dispatch({ type: constants.LIST_LOAD_START });

  try {
    const res = await api?.get(`/clients`);
    const payload = {
      ...normalize(res.data, [schema.client]),
    };
    dispatch({
      type: constants.LIST_LOAD_SUCCESS,
      payload,
    });
    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.LIST_LOAD_FAILED });
    return false;
  }
};

// Example with formik values and actions
export const createEntity = (
  clientId: string,
  values: FormikValues,
  formikActions: FormikHelpers<FormikValues>,
) => async (dispatch: Dispatch, _: () => RootState, { api }: ThunkExtraArguments): Promise<boolean> => {
  dispatch({ type: constants.CREATE_START });
  formikActions.setSubmitting(true);

  try {
    const res = await api?.post(`/clients/${clientId}/legalentities`, values);
    const payload = {
      legalEntity: res.data,
      clientId,
    };

    dispatch({
      type: constants.CREATE_SUCCESS,
      payload,
    });
    formikActions.setSubmitting(false);

    return true;
  } catch (e) {
    console.error(e);
    dispatch({ type: constants.CREATE_FAILED });
    formikActions.setSubmitting(false);
    if (e.response && e.response.data) {
      formikActions.setErrors({ message: e.response.data.title });
    }
    return false;
  }
};

export const clear = () => ({ type: constants.CLEAR });
