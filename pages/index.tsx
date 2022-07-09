import type {GetServerSideProps, GetServerSidePropsResult, NextPage} from 'next'
import {ReactElement} from "react";

type HomeProps = {
    repositories: string[]
    date: string
}

type GithubResponse = {
    name: string
}

export default function Home({ repositories, date }: HomeProps): ReactElement {
  return (
      <>
          <h1>{date}</h1>
          <ul>
              {repositories.map(repo => <li key={repo}>{repo}</li>)}
          </ul>
      </>
  )
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<HomeProps>> {
    const response = await fetch('https://api.github.com/users/matheus-dr/repos');

    const data = await response.json();
    const repositoryNames = data.map((elem: GithubResponse) => elem.name)

    return {
        props: {
            repositories: repositoryNames,
            date: new Date().toISOString(),
        },
    }
}