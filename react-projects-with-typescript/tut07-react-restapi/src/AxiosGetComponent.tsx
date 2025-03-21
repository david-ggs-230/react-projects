import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import ComponentPhone from "./ComponentPhone";
import ComponentPeople from "./ComponentPeople";
import "./App.css";

interface Phone {
  id: string;
  name: string;
  data: {
    Capacity: string;
    Price: string;
  };
}
interface People {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
}
const AxiosGetComponent: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isPhonesLoading, setPhonesLoading] = useState(true);

  const [peoples, setPeoples] = useState<People[]>([]);
  const [isPeoplesLoading, setPeoplesLoading] = useState(true);

  const getPhoneError = useRef<HTMLDivElement>(null);
  const getPeopleError = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getPhones = async () => {
      await axios
        .get("https://api.restful-api.dev/objects?id=12&id=13")
        .then((response) => {
          return response.data as JSON as unknown as Phone[];
        })
        .then((data) => {
          //console.log(data);
          setPhones(data);
          setPhonesLoading(false);
        })
        .catch((err) => {
          if (err instanceof Error) {
            //console.log(err.message); // Error message  output
            if (getPhoneError.current) {
              getPhoneError.current.textContent = err.message;
            }
          }
          setPhonesLoading(true);
        });
    };
    const getPeoples = async () => {
      await axios
        .get("https://softwium.com/api/peoples?limit=2")
        .then((response) => response.data as JSON as unknown as People[])
        .then((data) => {
          //console.log(data);
          setPeoples(data);
          setPeoplesLoading(false);
        })
        .catch((err) => {
          if (err instanceof Error) {
            //console.log(err.message); // Error message  output
            if (getPeopleError.current) {
              getPeopleError.current.textContent = err.message;
            }
          }
          setPeoplesLoading(true);
        });
    };
    void getPhones();
    void getPeoples();
  }, []);
  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <h3>Axios: Get Two Phone Objects</h3>
        <h5 className="blue-color" style={{ marginTop: "0px" }}>
          Server: https://api.restful-api.dev/objects
        </h5>
        <div>
          <h4>Phone List</h4>
          {isPhonesLoading && (
            <div>
              <div>Loading...</div>
              <div className="red-color" ref={getPhoneError}></div>
            </div>
          )}
          <div>
            {phones.length > 0 &&
              phones.map((phone) => {
                return (
                  <div key={phone.id} style={{ marginTop: "10px" }}>
                    <ComponentPhone
                      id={phone.id}
                      name={phone.name}
                      capacity={phone.data.Capacity}
                      price={phone.data.Price}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h3>Axios: Get Two Peoples</h3>
        <h5 className="blue-color" style={{ marginTop: "0px" }}>
          Server: https://softwium.com/api/peoples
        </h5>
        <div>
          <h4>People List</h4>
          {isPeoplesLoading && (
            <div>
              <div>Loading...</div>
              <div className="red-color" ref={getPeopleError}></div>
            </div>
          )}
          <div>
            {peoples.length > 0 &&
              peoples.map((people) => {
                return (
                  <div key={people.id} style={{ marginTop: "10px" }}>
                    <ComponentPeople
                      id={people.id}
                      firstName={people.firstName}
                      lastName={people.lastName}
                      age={people.age}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AxiosGetComponent;
