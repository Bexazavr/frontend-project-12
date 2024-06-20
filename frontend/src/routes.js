const apiPath = "/api/v1";

export default {
  signUpPath: () => [apiPath, "signup"].join("/"),
  loginPath: () => [apiPath, "login"].join("/"),
  messagesPath: () => [apiPath, "messages"].join("/"),
  channelsPath: () => [apiPath, "channels"].join("/"),
  signUpPage: () => "/signup",
  loginPage: () => "/login",
  chatPage: () => "/",
  notFoundPage: () => "*",
};
