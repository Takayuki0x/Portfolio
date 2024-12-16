import { useState } from "react";

import CheckComponent from "../components/CheckComponent";
import DefaultLayout from "../layouts/default";
import { CGdata } from "../config/CGdata";

export default function IndexPage() {
  const [numberChedked, setNumberChecked] = useState(0);

  const checked = () => {
    setNumberChecked(numberChedked + 1);
  };

  const unchecked = () => {
    setNumberChecked(numberChedked - 1);
  };

  return (
    <DefaultLayout>
      <div>
        <h1 className="text-6xl font-bold m-auto text-center">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-blue-500">
            CX CG CHECKLIST
          </span>
        </h1>
        <div>
          <h2 className="text-2xl font-medium m-auto text-center mt-5">
            <span
              className={
                numberChedked === CGdata.length
                  ? "text-green-500"
                  : "text-red-500"
              }
            >
              {numberChedked}/{CGdata.length}
            </span>{" "}
            Checked
          </h2>
        </div>
        <div className="mt-10">
          {CGdata.map((data) => (
            <CheckComponent
              key={data.title}
              checkedfn={checked}
              content={data.content}
              title={data.title}
              uncheckedfn={unchecked}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
}
