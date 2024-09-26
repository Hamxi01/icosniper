import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "firebase/storage";
import { storage } from "@/firebaseConfig"; // Ensure firebaseConfig is properly set up

// Firebase logo upload handler
export const handleFileUpload = async (file, fileType = "logos/") => {
  if (!file) return null;

  const storageRef = ref(storage, fileType); // Reference to the banners folder
  const timestamp = Date.now(); // Get the current timestamp
  const baseFileName = file.name.split(".")[0]; // Get the original file name without extension
  const fileExtension = file.name.split(".").pop(); // Get the file extension

  let uniqueFileName = `${baseFileName}_${timestamp}.${fileExtension}`;
  let uploadTask;

  // Function to check for existing files and create a new unique file name
  const findUniqueFileName = async (name) => {
    const listRef = ref(storage, "banners/"); // Reference to the banners folder
    const fileList = await listAll(listRef); // List all files in the folder
    const existingFiles = fileList.items.map((item) => item.name); // Get existing file names

    // Check if the proposed unique file name already exists
    while (existingFiles.includes(name)) {
      const newTimestamp = Date.now(); // Update the timestamp
      name = `${baseFileName}_${newTimestamp}.${fileExtension}`; // Generate a new unique name
    }
    return name; // Return the unique file name
  };

  // Find a unique file name
  uniqueFileName = await findUniqueFileName(uniqueFileName);
  const uniqueStorageRef = ref(storage, `banners/${uniqueFileName}`); // Create a ref with the unique name
  uploadTask = uploadBytesResumable(uniqueStorageRef, file);

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Error uploading file:", error);
        reject(error);
      },
      async () => {
        const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        resolve(downloadURL);
      }
    );
  });
};
