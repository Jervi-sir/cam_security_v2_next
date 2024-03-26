import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(req: Request) {
  const data = await req.formData();
  const file: File | null = data.get('file') as unknown as File;
  
  if(!file) {
    return Response.json({ status: 'nothing happened'})
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes)
  
  const path = join('/', 'tmp', file.name)
  await writeFile(path, buffer)

  return Response.json({ 
    file: path,
  }) 
}

//https://www.youtube.com/watch?v=-_bhH4MLq1Y