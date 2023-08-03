import logo from './logo.svg';
import './App.css';

const App = () => {
  const isLogin = false;

  return (
    <div>
      <Header />
      {isLogin ? (
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypage" component={MyPage} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/404" component={NotFound} />
          <Redirect from="*" to="/404" />
        </Switch>
      )}
    </div>
  );
};

export default App;
