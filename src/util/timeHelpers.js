export const getCurrentDateTime = () => {
  const currentdate = new Date()

  return `
    ${currentdate.getDate()}/${
    currentdate.getMonth() + 1
  }/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}:${currentdate.getSeconds()}
  `
}

export const getCurrentDateTimeUtc = () => {
  return Date.now()
}


