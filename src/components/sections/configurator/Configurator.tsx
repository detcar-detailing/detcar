"use client";

import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Define the Service type
export type Service = {
  id: string;
  name: string;
  price: number;
};

// Define the services data
const services: Service[] = [
  { id: "1", name: "Autowäsche", price: 15 },
  { id: "2", name: "Chemische Wäsche", price: 30 },
  { id: "3", name: "Salonwäsche", price: 25 },
  { id: "4", name: "Motorraumreinigung", price: 20 },
  { id: "5", name: "Wachsen", price: 35 },
  { id: "6", name: "Polieren", price: 40 },
  { id: "7", name: "Innenreinigung", price: 25 },
  { id: "8", name: "Desinfektion", price: 20 },
  { id: "9", name: "Lackreparatur", price: 30 },
  { id: "10", name: "Felgenreinigung", price: 15 },
  { id: "11", name: "Scheibenreinigung", price: 10 },
];

const ServiceConfigurator: React.FC = () => {
  // State to hold selected services
  const [selectedServices, setSelectedServices] = useState<Set<string>>(
    new Set(),
  );

  // State to control price visibility
  const [showTotalPrice, setShowTotalPrice] = useState<boolean>(false);

  // Calculate total price of selected services
  const calculateTotalPrice = (): number => {
    return services
      .filter((service) => selectedServices.has(service.id))
      .reduce((total, service) => total + service.price, 0);
  };

  // Handle checkbox change
  const handleCheckboxChange = (id: string) => {
    setSelectedServices((prevSelectedServices) => {
      const updatedServices = new Set(prevSelectedServices);
      if (updatedServices.has(id)) {
        updatedServices.delete(id);
      } else {
        updatedServices.add(id);
      }
      return updatedServices;
    });
    setShowTotalPrice(false); // Hide total price when any checkbox is toggled
  };

  // Handle calculate button click
  const handleCalculateClick = () => {
    setShowTotalPrice(true); // Show total price when the button is clicked
  };

  return (
    <div className="m-20 mx-auto max-w-2xl px-4 py-4">
      <div className="overflow-hidden rounded-3xl border-8 border-myColor-gray">
        <Table>
          <TableHeader>
            <TableRow className="border-none">
              <TableHead
                colSpan={3}
                className="!border-none bg-myColor-gray py-2 text-center text-2xl font-semibold !text-myColor-white"
              >
                Zusätzliche Dienstleistungen
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="bg-myColor-black">
            {services.length > 0 ? (
              services.map((service) => (
                <TableRow
                  key={service.id}
                  className="cursor-pointer !border-myColor-gray hover:!bg-zinc-800" // Added cursor-pointer for visual feedback
                  onClick={() => handleCheckboxChange(service.id)} // Added onClick handler
                >
                  <TableCell className="px-4 py-2 text-center">
                    <div
                      className="flex items-center justify-center space-x-2"
                      onClick={(e) => e.stopPropagation()} // Prevent event propagation to avoid double toggle
                    >
                      <Checkbox
                        className="h-5 w-5"
                        id={service.id}
                        checked={selectedServices.has(service.id)}
                        onCheckedChange={() => handleCheckboxChange(service.id)}
                      />
                    </div>
                  </TableCell>
                  <TableCell className="select-none px-4 py-2 text-lg text-myColor-white">
                    {service.name}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="h-24 text-center">
                  No services available.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        {/* Calculate Button and Total Price Display */}
        <div className="flex h-20 items-center justify-start border-t-[0.5px] border-myColor-orange bg-myColor-black py-4">
          {showTotalPrice ? (
            <div className="ml-8 text-lg font-bold text-myColor-white">
              Gesamtpreis:{" "}
              <span className="ml-2 border-b border-myColor-orange px-1">
                €{calculateTotalPrice()}
              </span>
            </div>
          ) : (
            <button
              onClick={handleCalculateClick}
              className="ml-8 rounded bg-myColor-orange px-4 py-2 font-bold text-myColor-black hover:bg-orange-600"
            >
              Preis berechnen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceConfigurator;
