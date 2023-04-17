import "reflect-metadata";
import { Container } from "inversify";
import { container as infrastructureContainer } from './4. Infrastructure/Container';
import { container as domainContainer } from './3. Domain/Container';
import { container as applicationContainer } from './2. Application/Container';

export const container = Container.merge(infrastructureContainer, domainContainer, applicationContainer)
