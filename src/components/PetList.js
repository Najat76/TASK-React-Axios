import React, { useState, useEffect, useSyncExternalStore } from "react";
//import petsData from "../petsData";  since i replace const petList = petsData with const petList = pets
import PetItem from "./PetItem";
import Modal from "./Modal";
import { getPets } from "../api/pets";

const PetList = () => {
  const [query, setQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  //https://react.dev/reference/react/useEffect
  // useLayoutEffect(() => {
  //   first -------- compnnet on mount
  //   return () => {
  //     second ----- compnent unmount
  //   };
  // }, [third]) ---- statrted once only when the component mounted

  const [pets, setPets] = useState([]); // useState 1 empty Array so we can overwrite it with new petsList
  //and array so we can  do filter @2

  const callApi = async () => {
    const response = await getPets();
    setPets(response.data); // data is an array in petsData.js -- check console.log(respone) and console.log(response.data)
  };

  // calling the server when the component mounted -- useEffect needed and function callApi is a must
  // async can not be input to useEffect that is why we created outside
  useEffect(() => {
    callApi();
  }, []);

  //@2
  const petList = pets
    .filter((pet) => pet.name.toLowerCase().includes(query.toLowerCase()))
    .map((pet) => <PetItem pet={pet} key={pet.id} />);
  return (
    <>
      <div className="bg-[#F9E3BE] flex flex-col justify-center items-center ">
        <div className="w-[76vw] flex h-[30px] mb-[30px] mt-[30px]">
          <input
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="Search"
            className="w-[70%] flex justify-start items-center border border-black rounded-md"
          />
          <button
            className="ml-auto w-[25%] px-3 py-2 rounded-md text-sm md:text-xl border border-black  flex justify-center items-center bg-green-400 hover:bg-green-600"
            onClick={() => {
              setShowModal(true);
            }}
          >
            Add pet
          </button>
        </div>
        <div className=" flex flex-col flex-wrap md:flex-row gap-[20px] w-[76vw]  justify-center items-center mb-[50px]">
          {petList}
        </div>
      </div>
      <Modal show={showModal} setShowModal={setShowModal} />
    </>
  );
};

export default PetList;
