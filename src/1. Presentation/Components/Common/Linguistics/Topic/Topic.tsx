import { FunctionComponent, PropsWithChildren } from 'react'

export interface ITopicProps extends PropsWithChildren {}

export const Topic: FunctionComponent<ITopicProps> = ({ children }) => {
  return <h1 className="text-lg mb-3">{children}</h1>
}
