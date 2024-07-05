import * as yup from 'yup';

export default (t) => yup.object({
  username: yup
    .string()
    .required(t('yup.required'))
    .min(3, t('yup.minAndMax'))
    .max(20, t('yup.minAndMax'))
    .trim(),
  password: yup
    .string()
    .required(t('yup.required'))
    .min(6, t('yup.min'))
    .trim(),
  confirmPassword: yup
    .string()
    .test(
      'confirmPassword',
      t('yup.confirmPassword'),
      (password, context) => password === context.parent.password,
    ),
});
