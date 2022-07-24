export const extractHeadersFromJson = (jsonData) => {
  return Object.keys(jsonData[0]).map(header => {
    return { text: header, value: header }
  })
}