import React from 'react';
import SignUpComponent from 'app/components/shared/sign-up';
import { validationSchemas } from 'data';
import { Formik } from 'formik';

const SignUpContainer = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={{}} onSubmit={onSubmit} validationSchema={validationSchemas.TestSchema}>
      {(formikProps) => <SignUpComponent {...formikProps} />}
    </Formik>
  );
};

export default SignUpContainer;
