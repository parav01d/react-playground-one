import { FunctionComponent, PropsWithChildren } from 'react'

export interface IHeadlineProps extends PropsWithChildren {}

export const Headline: FunctionComponent<IHeadlineProps> = ({ children }) => {
  return <h1 className="text-xl mb-3">{children}</h1>
}
