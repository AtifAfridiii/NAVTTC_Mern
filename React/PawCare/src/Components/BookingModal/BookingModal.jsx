import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "../ui/animated-modal";
import { motion } from "framer-motion";
import { VetIcon, PawIcon, VaccineIcon, StethoscopeIcon, PetFoodIcon, GroomingIcon } from './Icons';

export function BookingModal() {
  const images = [
    "https://images.pexels.com/photos/6235652/pexels-photo-6235652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/6235238/pexels-photo-6235238.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6131543/pexels-photo-6131543.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5487067/pexels-photo-5487067.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/6235651/pexels-photo-6235651.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white  dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40  text-center transition duration-500 ">
          Online Appointment
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            💉
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Book your pet{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
              appoinment
              </span>{" "}
              now! 👨‍⚕️
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <Feature icon={VetIcon} text="Veterinary Care" />
              <Feature icon={VaccineIcon} text="Vaccinations" />
              <Feature icon={StethoscopeIcon} text="Health Checkup" />
              <Feature icon={PetFoodIcon} text="Pet Nutrition" />
              <Feature icon={GroomingIcon} text="Grooming" />
              <Feature icon={PawIcon} text="Pet Training" />
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Book Now
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

const Feature = ({ icon: Icon, text }) => (
  <div className="flex items-center justify-center">
    <Icon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
      {text}
    </span>
  </div>
);
