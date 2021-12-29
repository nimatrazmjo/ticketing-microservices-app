
import buildClient from "../api/build-client";
const LandingPage = ({currentUser}) => {
  return currentUser ? (<h1>You are logged in</h1>):(<h1>You are NOT logged in</h1>)
}

LandingPage.getInitialProps = async (context) => {
  const { data } = await buildClient(context).get('/api/users/current-user');
  return data;
}
export default LandingPage;