import React from 'react';

import { Row, Col, Text, Loader, PrimaryButton, TextInput } from 'ui';
import { Form, FormikErrors, FormikValues } from 'formik';
import { Field } from 'app/utils';
import s from './styles.scss';

interface SignUpProps {
  isSubmitting: boolean;
  isValid: boolean;
  errors: FormikErrors<FormikValues>;
}

const SignUp: React.FC<SignUpProps> = ({ isSubmitting, isValid, errors }: SignUpProps) => {
  return (
    <div className={s.page}>
      {isSubmitting ? (
        <Loader />
      ) : (
        <Row>
          <Col s="6" m="6" l="6">
            <Form data-cy="signUpForm" className={s.pageForm}>
              <Field
                className={s.pageFormField}
                component={TextInput}
                id="name"
                name="name"
                placeholder="Type your name"
                title="Name"
                data-cy="signUpFormName"
              />
              <Field
                className={s.pageFormField}
                component={TextInput}
                id="email"
                name="email"
                placeholder="Type email"
                title="Email"
                data-cy="signUpFormEmail"
              />

              <Field
                className={s.pageFormField}
                component={TextInput}
                id="password"
                name="password"
                placeholder="Type password"
                title="Password"
                data-cy="signUpFormPassword"
              />
              {errors.message && (
                <Text className={s.pageFormError} size={Text.sizes.s} color={Text.colors.error}>
                  {errors.message}
                </Text>
              )}

              <div className={s.pageFormButtons}>
                <PrimaryButton
                  data-cy="signUpFormSubmit"
                  className={s.popupButtonsCreate}
                  type="submit"
                  disabled={!isValid}
                >
                  Create account
                </PrimaryButton>
              </div>
            </Form>
          </Col>
        </Row>
      )}
    </div>
  );
};
export default SignUp;
