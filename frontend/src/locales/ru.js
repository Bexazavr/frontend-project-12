export default {
  translation: {
    chatName: 'Hexlet Chat',
    mainComponents: {
      login: 'Войти',
      logout: 'Выйти',
      notFound: 'Страница не найдена',
      but: 'Вернуться',
      toMainPage: 'на главную страницу',
      failedLogin: 'Неверные имя пользователя или пароль',
      noAccount: 'Нет аккаунта?',
      registration: 'Регистрация',
      signUp: 'Зарегистрироваться',
      yourUserName: 'Ваш ник',
      username: 'Имя пользователя',
      password: 'Пароль',
      confirmPassword: 'Подтвердите пароль',
      alreadyHaveAccount: 'Такой пользователь уже существует',
    },
    chatComponents: {
      channels: 'Каналы',
      channelControls: 'Управление каналом',
      messages_one: '{{count}} сообщение',
      messages_few: '{{count}} сообщения',
      messages_many: '{{count}} сообщений',
      enterMessage: 'Введите сообщение...',
      newMessage: 'Новое сообщение',
    },
    modals: {
      addChannel: 'Добавить канал',
      deleteChannel: 'Удалить канал',
      renameChannel: 'Переименовать канал',
      channelName: 'Имя канала',
    },
    yup: {
      required: 'Обязательное поле',
      min: 'Не менее 6 символов',
      minAndMax: 'От 3 до 20 символов',
      notOneOf: 'Должно быть уникальным',
      confirmPassword: 'Пароли должны совпадать',
    },
    toastify: {
      addChannel: 'Канал создан',
      removeChannel: 'Канал удалён',
      renameChannel: 'Канал переименован',
      connectionError: 'Ошибка сети',
      loadingError: 'Ошибка загрузки данных',
    },
    delete: 'Удалить',
    rename: 'Переименовать',
    cancel: 'Отменить',
    send: 'Отправить',
    sure: 'Уверены?',
  },
};
