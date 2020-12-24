import * as Yup from 'yup';

export const TestSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
});
