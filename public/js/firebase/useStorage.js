import { projectStorage } from "./appConfig";

const useStorage = () => {
  var error = null;
  var url = null;
  var filePath = null;
  var isPanding = false;

  const uploadImage = async (collection, slug, file) => {
    filePath = `${collection}/${slug}/${file.name}`;
    const storageRef = projectStorage.ref(filePath);

    isPanding = true;
    try {
      const res = await storageRef.put(file);
      url = await res.ref.getDownloadURL();

      isPanding = false;
    } catch (err) {
      error = err.message;
      console.log(err.message);

      isPanding = false;
    }
  };

  const deleteImage = async (path) => {
    const storageRef = projectStorage.ref(path);

    isPanding = true;
    try {
      await storageRef.delete();
    } catch (err) {
      error = err.message;
      console.log(err.message);

      isPanding = false;
    }
  };

  return { error, isPanding, url, filePath, uploadImage, deleteImage };
};

export default useStorage;
