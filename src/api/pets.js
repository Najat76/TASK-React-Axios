import instance from "./index";

// getting all the pets  -- get("pets") endpoint === petsList
const getPets = async () => {
  const pets = await instance.get("pets");
  return pets;
};

//to update my backend my input will be name, type, image,adopted as given from the
//backend developer(in example: table) and the response will contain also the object that will be updated

const addPet = async (name, type, image, adopted) => {
  const response = await instance.post("pets", {
    name: name,
    type: type,
    image: image,
    adopted: adopted,
  });
  return response;
};
// getPet by Id
const getPet = async (id) => {
  const response = await instance.get(`pets/${id}`);
  return response.data;
};

const updatePet = async (petId, name, type, image, adopted) => {
  await instance.put(`pets/${pet.id}`, {
    name: name,
    type: type,
    image: image,
    adopted: 1,
  });
};

const deletePet = async (id) => {
  const response = await instance.delete(`/pets/${pet.id}`);
};

export { getPets, getPet, addPet, updatePet, deletePet };
