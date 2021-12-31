import { Form } from "react-bootstrap";
import Layout from "../components/layout";

const Login = () => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(startClock());
  // }, [dispatch]);

  return (
    <Layout>
      <h1>Sign In</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </Layout>
  );
};

export default Login;
