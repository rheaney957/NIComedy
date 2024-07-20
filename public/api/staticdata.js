import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), '/JSON/featuredGigs.json');
  const jsonGalleryDirectory = path.join(process.cwd(), '/JSON/galleryInfo.json');
  const phpMail = path.join(
    process.cwd(),
    "/api/contact.php"
  );

  const file_data = await fs.readFile(jsonDirectory)
  const json_data = JSON.parse(file_data)
  res.status(200).json(json_data)

  const gallery_file_data = await fs.readFile(jsonGalleryDirectory)
  const json_gallery_data = JSON.parse(gallery_file_data)
  res.status(200).json(json_gallery_data)

     if (req.method === "POST") {
       console.log(res)
       return;
     }
    const php_Mail_data = JSON.parse(req.body);
    res.status(200).json(php_Mail_data);

}