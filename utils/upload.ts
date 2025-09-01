"use server";

import { Project } from "@/interfaces/project";
import fs from "fs";
import path from "path";

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   //   const form = new formidable.IncomingForm();
//   //   form.uploadDir = path.join(process.cwd(), "public", "uploads");
//   //   form.keepExtensions = true;
//   //   if (!fs.existsSync(form.uploadDir)) {
//   //     fs.mkdirSync(form.uploadDir, { recursive: true });
//   //   }
//   //   form.parse(req, (err, fields, files) => {
//   //     if (err) return res.status(500).json({ error: "Upload failed" });
//   //     const file = files.file as formidable.File;
//   //     const fileName = file.newFilename;
//   //     const fileUrl = `/uploads/${fileName}`;
//   //     res.status(200).json({ url: fileUrl });
//   //   });
// }

export const handleUploads = async (project: Project) => {
  // create the uploads directory if it doesn't exist
  fs.mkdirSync(path.join(process.cwd(), "public", "uploads"), {
    recursive: true,
  });
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  const host = process.env.NEXT_PUBLIC_APP_URL || "";

  // move image
  if (project.image) {
    const image = project.image;
    const matches = image.match(/^data:(.+);base64,(.+)$/);
    if (!matches) throw new Error("Invalid base64 string");

    const mimeType = matches[1];
    const ext = mimeType.split("/")[1];
    const buffer = Buffer.from(matches[2], "base64");
    const newFilePath = path.join(uploadDir, `${project.slug}.${ext}`);
    fs.writeFileSync(newFilePath, buffer);
    project.image = // host + "/uploads/" + `${project.slug}.${ext}`;
      JSON.stringify({
        host,
        uploadDir,
        newFilePath,
        image,
        mimeType,
        ext,
        matches,
        buffer,
      });

    // const image = project.image;
    // const formData = new FormData();
    // formData.append("image", image);

    // console.log({ formData });

    // project.image = project.image.replace(/^.*[\\\/]/, ""); // remove path
    // const newFileName = `${Date.now()}-${project.image}`;
    // const newFilePath = path.join(uploadDir, newFileName);

    // console.log({ host, uploadDir, newFileName, newFilePath, image });

    // fs.renameSync(image, newFilePath);
    // project.image = host + "/uploads/" + newFileName;
  }

  //   const screenshots = project.screenshots.map((screenshot) => {
  //     // const filePath = path.join(uploadDir, screenshot.image);
  //     //   if (fs.existsSync(filePath)) {
  //     const newFileName = `${Date.now()}-${screenshot.image}`;
  //     const newFilePath = path.join(uploadDir, newFileName);
  //     fs.renameSync(screenshot.image, newFilePath);
  //     return newFileName;
  //   });

  return project;
};
