import { useState } from "react";
import "./card.css";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const peopleData = [
  {
    id: 1,
    name: "Manilla Smith",
    photo:
      "https://images.unsplash.com/photo-1546071267-5cfb1e0e8f41?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGhhcHB5JTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    title: "Software Engineer",
  },
  {
    id: 2,
    name: "Ian Ron",
    photo:
      "https://images.unsplash.com/photo-1576558656222-ba66febe3dec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhhcHB5JTIwbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    description:
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    title: "Software Engineer",
  },
  {
    id: 3,
    name: "Emma Hillbake",
    photo:
      "https://images.unsplash.com/photo-1525786210598-d527194d3e9a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhhcHB5JTIwd29tYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    description:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
    title: "Software Engineer",
  },
  {
    id: 4,
    name: "Adam Turner",
    photo:
      "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGhhcHB5JTIwbWVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    title: "Software Engineer",
  },
];

const Card = () => {
  const [data, setData] = useState(peopleData);
  const [dataToShow, setDataToShow] = useState(data[0]);

  const handleNext = () => {
    const currentId = dataToShow.id;
    if (currentId < data.length) {
      const nextItem = data.find((item) => item.id === currentId + 1);
      setDataToShow(nextItem);
    }
  };

  const handlePrevious = () => {
    const currentId = dataToShow.id;
    if (currentId > 1) {
      const nextItem = data.find((item) => item.id === currentId - 1);
      setDataToShow(nextItem);
    }
  };

  return (
    <>
      <div className="big-container" key={dataToShow.id}>
        <div className="cardContainer">
        <div className="backgroundImg"></div>


          <div className="imgContainer">
            <img className="photo" src={dataToShow.photo} />
          </div>
          <p className="description">{dataToShow.description}</p>
        </div>
        <div className="nameContainer">
          <p className="name">{dataToShow.name}</p>
          <p className="title">{dataToShow.title}</p>
        </div>
      </div>

      {dataToShow.id > 1 ? (
        <p className="btn pre" onClick={() => handlePrevious()}>
          Previous
        </p>
      ) : (
        ""
      )}

      {dataToShow.id < data.length ? (
        <p className="btn next" onClick={() => handleNext()}>
          {" "}
          Next
        </p>
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
