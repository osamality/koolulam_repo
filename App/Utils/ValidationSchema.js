import * as Yup from 'yup';

const registerValidationSchema = Yup.object().shape({
  firstName: Yup.string().required().min(2).label('Firstname'),
  lastName: Yup.string().required().min(2).label('Lastname'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
  city: Yup.string().required().label('City'),
  language: Yup.string().required().label('Language'),
  role: Yup.string().required().label('Role'),
});
const loginValidationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(5).label('Password'),
});
const changePasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .label('Email')
    .email('Enter a valid email')
    .required('Please enter a registered email'),
});
const eventValidationSchema = Yup.object().shape({
  type: Yup.string().required().label('Type'),
  tittle: Yup.string().required().min(3).label('Tittle'),
  description: Yup.string().required().label('Description'),
  date: Yup.string().required().label('Date'),
  location: Yup.string().required().label('Location'),
  idYT: Yup.string().required().label('Youtube_id'),
  open: Yup.string().required('Required'),
  start: Yup.string().required('Required'),
  end: Yup.string().required('Required'),
});
const liveEventValidationSchema = Yup.object().shape({
  type: Yup.string().required().label('Type'),
  tittle: Yup.string().required().min(3).label('Tittle'),
  description: Yup.string().required().label('Description'),
  date: Yup.string().required().label('Date'),
  location: Yup.string().required().label('Location'),
  idYT: Yup.string().required().label('Youtube_id'),
  open: Yup.string().required('Required'),
  start: Yup.string().required('Required'),
  end: Yup.string().required('Required'),
  tutorialName: Yup.string().required('Required'),
  tutorialId: Yup.string().required('Required'),
  tutorialDes: Yup.string().required('Required'),
});
export {
  registerValidationSchema,
  loginValidationSchema,
  eventValidationSchema,
  liveEventValidationSchema,
  changePasswordValidationSchema,
};
