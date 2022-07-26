import { faker } from '@faker-js/faker'

export const getRandomQuery = () => faker.company.bs()

export const getQueryHistory = (length = 10) =>
  Array.from({ length }, () => ({
    text: getRandomQuery(),
    date: faker.date.recent(),
  }))