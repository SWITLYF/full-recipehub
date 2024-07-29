// import axios from "axios";

// const uploadImage = async (e, setProgress, setFormDetails, formDetails) => {
//   if (
//     e.target.files[0].type === "image/jpeg" ||
//     e.target.files[0].type === "image/png"
//   ) {
//     const data = new FormData();
//     data.append("file", e.target.files[0]);

//     data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

//     const config = {
//       onUploadProgress: (e) => {
//         const { loaded, total } = e;
//         setProgress((loaded / total) * 100);
//       },
//     };

//     data.append("cloud_name", import.meta.env.VITE_CLOUDINARY_CLOUD_NAME);

//     const {
//       data: { url },
//     } = await axios.post(
//       import.meta.env.VITE_CLOUDINARY_BASE_URL,
//       data,
//       config
//     );
//     setFormDetails({ ...formDetails, [e.target.id]: url });
//   } else {
//     console.error("Please select an image in jpeg or png format");
//   }
// };

// export default uploadImage;



// import axios from "axios";
// import crypto from "crypto";
// import { v4 as uuidv4 } from "uuid";

// const uploadImage = async (e, setProgress, setFormDetails, formDetails) => {
//   if (
//     e.target.files[0].type === "image/jpeg" ||
//     e.target.files[0].type === "image/png"
//   ) {
//     const data = new FormData();
//     const timestamp = Math.floor(Date.now() / 1000);
//     const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
//     const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
//     const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;

//     data.append("file", e.target.files[0]);
//     data.append("timestamp", timestamp);
//     data.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);
//     data.append("api_key", apiKey);

//     // Create a unique signature
//     const paramsToSign = `timestamp=${timestamp}&upload_preset=${import.meta.env.VITE_CLOUDINARY_PRESET}${apiSecret}`;
//     const signature = crypto
//       .createHash("sha1")
//       .update(paramsToSign)
//       .digest("hex");

//     data.append("signature", signature);

//     const config = {
//       onUploadProgress: (e) => {
//         const { loaded, total } = e;
//         setProgress((loaded / total) * 100);
//       },
//     };

//     const {
//       data: { url },
//     } = await axios.post(
//       `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
//       data,
//       config
//     );

//     setFormDetails({ ...formDetails, [e.target.id]: url });
//   } else {
//     console.error("Please select an image in jpeg or png format");
//   }
// };

// export default uploadImage;


import axios from "axios";
import CryptoJS from "crypto-js";

const uploadImage = async (e, setProgress, setFormDetails, formDetails) => {
  const file = e.target.files[0];

  if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
    const data = new FormData();
    const timestamp = Math.floor(Date.now() / 1000);
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const apiKey = import.meta.env.VITE_CLOUDINARY_API_KEY;
    const apiSecret = import.meta.env.VITE_CLOUDINARY_API_SECRET;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_PRESET;

    data.append("file", file);
    data.append("timestamp", timestamp);
    data.append("upload_preset", uploadPreset);
    data.append("api_key", apiKey);

    // Create a unique signature
    const paramsToSign = `timestamp=${timestamp}&upload_preset=${uploadPreset}`;
    const signature = CryptoJS.SHA1(paramsToSign + apiSecret).toString(CryptoJS.enc.Hex);

    data.append("signature", signature);

    // Log the form data for debugging
    for (let pair of data.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    const config = {
      onUploadProgress: (e) => {
        const { loaded, total } = e;
        setProgress((loaded / total) * 100);
      },
    };

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        data,
        config
      );

      const { url } = response.data;
      setFormDetails({ ...formDetails, [e.target.id]: url });
    } catch (error) {
      console.error("Error uploading the image:", error);
    }
  } else {
    console.error("Please select an image in jpeg or png format");
  }
};

export default uploadImage;
