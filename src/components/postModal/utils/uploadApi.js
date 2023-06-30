export const uploadMedia = async (media) => {
  const formData = new FormData();

  formData.append("file", media);
  formData.append("upload_preset", "whizverse");
  formData.append("cloud_name", "dla2khf0q");

  try {
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dla2khf0q/auto/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    return console.error(e);
  }
};
