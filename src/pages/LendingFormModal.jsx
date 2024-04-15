import { GrAdd } from "react-icons/gr";
import { useRef, useState, useEffect } from "react";
import SubHeader from "../components/SubHeader";
import fetchCSVData from "../components/data/fetchCSVData";

const formatDateLent = (date) => {
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};

const formatDateReturn = (date) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + 7);
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");
  const year = newDate.getFullYear();
  return `${year}-${month}-${day}`;
};
const LendingFormModal = ({
  model,
  id,
  serialNumber,
  successAlert,
  dangerAlert,
}) => {
  const [openName, setOpenName] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [danger, setDanger] = useState(false);
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const closeRef = useRef(null);

  const [addData, setAddData] = useState({
    event: "",
    dateLent: formatDateLent(new Date()) || "",
    model: `${model}` || "",
    id: `${id}` || "",
    serialNumber: `${serialNumber}` || "",
    employee: "",
    status: "Pending Return",
    dateReturn: formatDateReturn(new Date()) || "",
    notes: "",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setDanger(false);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [danger]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (closeRef.current && !closeRef.current.contains(event.target)) {
        setOpenName(false);
        setOpenEvent(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openName, openEvent]);

  const handleAddForm = (e) => {
    const { name, value } = e.target;
    setAddData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (addData.name !== undefined) {
      try {
        const response = await fetch("http://localhost:5000/api/lending-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addData),
        });

        if (!response.ok) {
          throw new Error("Failed to post data");
        }
        const data = await response.json();
        console.log("Response:", data);
        successAlert(true);
      } catch (error) {
        console.error("Error posting data:", error);
        dangerAlert({ alert: true, message: `Error posting data: ${error}` });
      }
    } else {
      console.log("Failed to load Data");
      dangerAlert({ alert: true, message: "Please fill the name input" });
      setDanger(true);
    }
  };

  useEffect(() => {
    if (addData.employee === undefined || addData.employee === "") {
      setData(originalData);
    } else {
      const filteredData = originalData.filter(
        ({
          "FIRST NAME": firstName,
          "LAST NAME": lastName,
          POSITION: position,
        }) =>
          firstName.toLowerCase().includes(addData.employee.toLowerCase()) ||
          lastName.toLowerCase().includes(addData.employee.toLowerCase()) ||
          position.toLowerCase().includes(addData.employee.toLowerCase())
      );
      setData(filteredData);
      console.log(filteredData);
    }
  }, [addData.employee, originalData]);

  useEffect(() => {
    fetchCSVData({
      csvUrl:
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vS49nZFmBeOjvS6RWdQvh52klT6WfsKRtUVeZTZ5gJnbagupJX2PdvgvTgA2XrEuFyacm9e0XBBSLfF/pub?gid=0&single=true&output=csv",
      data: handleData,
    });
  }, []);

  const handleData = (jsonData) => {
    setOriginalData(jsonData);
    setData(jsonData);
  };

  const handleList = (value) => {
    setAddData((prev) => ({ ...prev, employee: value }));
    console.log(value);
  };
  return (
    <>
      <SubHeader title="Lending Form"></SubHeader>

      <div className="relative flex flex-col items-center justify-center w-full h-auto gap-6 py-5 bg-white">
        <form className="flex flex-col w-[80%]  h-full gap-6 py-5 px-10 bg-gray-100 shadow">
          <div className="relative flex flex-col justify-start h-full w-fit">
            <div className="flex flex-row w-auto h-full gap-4 ">
              <div className="flex flex-col items-start justify-center h-full gap-2">
                <label
                  className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                  htmlFor="item"
                >
                  Item:
                </label>
                <input
                  name="model"
                  className="w-full h-10 px-4 text-sm text-gray-500 truncate bg-gray-200 border-gray-300 outline-none font-roboto"
                  type="text"
                  id="item"
                  value={addData.model}
                  onChange={handleAddForm}
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full gap-2">
                <label
                  className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                  htmlFor="serial-num"
                >
                  ID:
                </label>
                <input
                  name="id"
                  className="w-full h-10 px-4 text-sm text-gray-500 bg-gray-200 border-gray-300 outline-none font-roboto"
                  type="text"
                  id="serial-num"
                  value={addData.id}
                  onChange={handleAddForm}
                />
              </div>
              <div className="flex flex-col items-start justify-center h-full gap-2">
                <label
                  className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                  htmlFor="serial-num"
                >
                  Serial Number:
                </label>
                <input
                  name="serialNumber"
                  className="w-full h-10 px-4 text-sm text-gray-500 bg-gray-200 border-gray-300 outline-none font-roboto"
                  type="text"
                  id="serial-num"
                  value={addData.serialNumber}
                  onChange={handleAddForm}
                />
              </div>
            </div>
            <div className="flex justify-end h-full pr-2 mt-2">
              <button className="flex flex-row items-center h-full gap-1 text-sm text-blue-500 border-b border-transparent w-fit font-roboto hover:text-blue-600">
                <GrAdd className="text-xs" /> Add
              </button>
            </div>
          </div>
          <div className="h-[1px] bg-gray-200"></div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-row items-center justify-start h-10 gap-4">
              <label
                className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                htmlFor="date-borrowed"
              >
                Date Borrowed: <span className="text-red-500">*</span>
              </label>
              <input
                value={addData.dateLent}
                name="dateLent"
                className="w-full h-full px-4 text-sm text-gray-500 border border-gray-300 rounded outline-none font-roboto focus:ring-2 "
                type="date"
                id="date-borrowed"
                onChange={handleAddForm}
              />
            </div>
            <div className="flex flex-row items-center justify-start h-10 gap-4">
              <label
                className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
                htmlFor="date-return"
              >
                Date Return:
              </label>
              <input
                value={addData.dateReturn}
                name="dateReturn"
                className="w-full h-full px-4 text-sm text-gray-500 border border-gray-300 rounded outline-none font-roboto focus:ring-1"
                type="date"
                id="date-return"
                onChange={handleAddForm}
              />
            </div>
          </div>
          <div className="relative">
            <div className="flex flex-col gap-2">
              <label
                className="pl-2 text-sm text-gray-500 font-roboto whitespace-nowrap"
                htmlFor="name"
              >
                Name: <span className="text-red-500">*</span>
              </label>
              <input
                value={addData.employee}
                name="employee"
                onClick={() => {
                  setOpenName(!openName), setDanger(false);
                }}
                className={`h-10 p-2 text-sm text-gray-500 border  rounded outline-none font-roboto  ${
                  danger
                    ? "border-red-500 placeholder:text-red-500"
                    : "border-gray-300 focus:ring-1"
                }`}
                type="text"
                id="name"
                placeholder="Enter your name"
                onChange={handleAddForm}
              />
            </div>
            {openName && (
              <ul
                ref={closeRef}
                className="absolute w-full h-auto mt-[1px] bg-white border rounded-md shadow-md overflow-y-scroll max-h-[200px] z-10"
              >
                {data.map(
                  (
                    {
                      "FIRST NAME": firstName,
                      "LAST NAME": lastName,
                      POSITION: position,
                    },
                    index
                  ) => (
                    <li
                      onClick={() => handleList(`${firstName} ${lastName}`)}
                      key={index}
                      className="flex flex-row items-center h-10 gap-2 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100"
                    >
                      {`${firstName} ${lastName} `}
                      <span className="text-xs text-gray-400">{`(${position})`}</span>
                    </li>
                  )
                )}
              </ul>
            )}
          </div>
          <div className="relative">
            <div className="flex flex-col gap-2">
              <label
                className="pl-2 text-sm text-gray-500 font-roboto"
                htmlFor="event"
              >
                Event:
              </label>
              <input
                value={addData.event}
                name="event"
                onClick={() => setOpenEvent(!openEvent)}
                className="h-10 p-2 text-sm text-gray-500 border border-gray-300 rounded outline-none font-roboto focus:ring-1"
                type="text"
                id="event"
                placeholder="Enter event name"
                onChange={handleAddForm}
              />
            </div>
            {openEvent && (
              <ul
                ref={closeRef}
                className="absolute w-full h-auto mt-[1px] bg-white border rounded-md shadow-md overflow-y-scroll max-h-[200px]"
              >
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
                <li className="h-10 px-6 py-2 text-sm text-gray-500 border-b font-roboto hover:bg-gray-100">
                  adasdas
                </li>
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              className="pl-2 text-sm text-gray-500 whitespace-nowrap font-roboto"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              name=" notes"
              rows="4"
              className="w-full h-full p-4 text-sm text-gray-500 border border-gray-300 rounded outline-none font-roboto focus:ring-1"
              id="notes"
              placeholder="Enter Notes"
              onChange={handleAddForm}
            ></textarea>
          </div>
          <div className="flex flex-row items-center justify-end gap-6">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 text-base text-white bg-blue-500 rounded font-roboto hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default LendingFormModal;