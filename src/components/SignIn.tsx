import { LoginSection, GithubLogin, InputSection } from '../styles/components/SignIn';
import { FaGithub, FaArrowRight } from 'react-icons/fa';

export function SignIn() {
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
            <InputSection>
              <input type="text" placeholder="Type your username"/>
              <button type="button">
                <FaArrowRight size={20}/>
              </button>
            </InputSection>
          </GithubLogin>
        </LoginSection>
      </section>
  );
}
