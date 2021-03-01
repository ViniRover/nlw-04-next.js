import Head from "next/head";
import { FaGithub } from 'react-icons/fa';
import { GithubLogin, LoginSection } from "../styles/pages/SignIn";

import { Container } from "../styles/pages/SignIn";

export default function SignIn() {
  return(
    <Container>
      <Head>
        <title>Login | LetsMove</title>
      </Head>
      <section>
        <div>
          <img src="symbol.svg" alt="Symbol Login"/>
        </div>
        <LoginSection>
          <img src="logologin.png" alt="Logo Login"/>
          <GithubLogin>
            <span>Welcome</span>
            <button type="button">
              <span>Sign in with Github</span>
              <FaGithub size={30}/>
            </button>
          </GithubLogin>
        </LoginSection>
      </section>
    </Container>
  );
}
