import * as json2csv from 'json2csv'

export default (data, columns, filename) => {
  try {
    let result = json2csv.parse(data, {
      fields: columns.map(column => column.name)
    })

    const blob = new Blob([ '\ufeff', result ])
    const blobURL = window.URL.createObjectURL(blob)

    let link = document.createElement('a')
    link.setAttribute('href', blobURL)
    link.setAttribute('download', `${filename}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  } catch (err) {
    console.error(err)
  }
}
