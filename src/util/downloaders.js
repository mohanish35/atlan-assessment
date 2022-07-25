import csvDownload from 'json-to-csv-export'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

export const downloadJsonInCsv = (jsonData) => {
  csvDownload(jsonData, 'data.csv')
}

export const downloadJsonInPdf = (jsonData, headers) => {
  const doc = new jsPDF()
  const body = [...jsonData.map(item => {
      return Object.values(item)
    })]
  const head = [headers.map(({ text }) => text)]

  autoTable(doc, {
    theme: 'grid',
    head,
    body
  })

  doc.save('data.pdf')
}

export const downloadJsonInJson = (jsonData) => {
  const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(jsonData));
  const downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute('href', dataStr);
  downloadAnchorNode.setAttribute('download', 'data.json');
  
  document.body.appendChild(downloadAnchorNode); // required for firefox
  
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}