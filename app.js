var app = {};
function bootstrap() {
  app.mainView = new MainView();
  $("body").append(app.mainView.el);
}