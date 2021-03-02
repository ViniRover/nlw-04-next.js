import Head from "next/head";

import { Container } from "../styles/pages/Login";
import { SignIn} from '../components/SignIn';

export default function Login() {
  return(
    <Container>
      <Head>
        <title>Login | LetsMove</title>
      </Head>
      <SignIn />
    </Container>
  );
}
