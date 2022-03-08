import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const dirPath = path.join(process.cwd(), '/public/works')

export async function getWorkList(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(dirPath, (err, files) => {
      if (err) reject(err)
      resolve(files)
    })
  })
}

export async function getWorks() {
  const workList = await getWorkList()
  const works = workList.map((work) => {
    const id = work.replace(/\.md$/, '')
    const filePath = path.join(dirPath, work)
    const fileContents = fs.readFileSync(filePath, 'utf-8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })

  return works
}

export async function getWork(id: string) {
  const filePath = path.join(dirPath, `${id}.md`)

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) reject(err)
      resolve(data.toString())
    })
  })
}
