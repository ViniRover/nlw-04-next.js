import Head from 'next/head';

import { CompletedChallenges } from "../components/CompletedChalleges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";

import { CountdownProvider } from '../contexts/CountdownContext';
import { GetServerSideProps } from 'next';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { Container } from '../styles/pages/Home';

interface HomeProps {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home({ 
  level, 
  challengesCompleted, 
  currentExperience,
}: HomeProps) {
  return (
    <ChallengesProvider 
      level={level} 
      challengesCompleted={challengesCompleted}
      currentExperience={currentExperience}
    >
      <Container>
        <Head>
          <title>Home | LetsMove</title>
        </Head>
        <ExperienceBar />
        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
    }
  }
}