export const extractHeadersFromJson = (jsonData) => {
  console.log(jsonData, 'jsonDatajsonDatajsonDatajsonData')
  return Object.keys(jsonData[0]).map(header => {
    return { text: header, value: header }
  })
}