import { useRef } from 'react';
import { Form } from '@unform/web';
import { useRouter } from 'next/router';

import { LoginSection, GithubLogin, InputForm } from '../styles/components/SignIn';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import Input from './common/Input';
import Cookies from 'js-cookie';

interface SubmitData {
  username: string;
}

export function SignIn() {
  const formRef = useRef();
  const router = useRouter();

  function handleSubmit({ username }: SubmitData) {
    Cookies.set('username', username);

    router.push('/dashboard');
  }

  return(
    <section>
        <div>
          <img src="symbol.svg" alt="Symbol Login"/>
        </div>
        <LoginSection>
          <img src="logologin.png" alt="Logo Login"/>
          <GithubLogin>
            <span>Welcome</span>
            <div>
              <FaGithub size={30} />
              <p>Please log in with your Github to begin</p>
            </div>
            <InputForm>
              <Form ref={formRef} onSubmit={handleSubmit} >
                <Input
                  placeholder="Type your username"
                  type="text"
                  name="username"
                />
                <button type="submit" >
                  <FaArrowRight size={20}/>
                </button>
              </Form>
            </InputForm>
          </GithubLogin>
        </LoginSection>
      </section>
  );
}
