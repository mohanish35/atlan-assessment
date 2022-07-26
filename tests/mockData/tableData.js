import { faker } from '@faker-js/faker';

export const getHeaders = (length = 10) => {
  return Array.from({ length }, () => {
    const dbColumn = faker.database.column()

    return { text: dbColumn, value: dbColumn }
  })
}