import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import initialBooks from "../Firebase/Firebase.init";
import { useNavigate } from "react-router-dom";

const useFirebase = () => {
  //states
  const [topics, setTopics] = useState([]);
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [description, setDescription] = useState("");
  const [chapter, setChapter] = useState("");
  const navigate = useNavigate();

  //database
  const db = initialBooks();
  const topicsCollectionRef = collection(db, "topics");

  //load data
  useEffect(() => {
    const getTopics = async () => {
      const data = await getDocs(topicsCollectionRef);
      setTopics(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
    };
    getTopics();
  }, []);

  //Post Data
  const addNewTopics = async (e) => {
    // e.preventDefault()
    await addDoc(topicsCollectionRef, {
      title: title,
      name: name,
      subject: subject,
      description: description,
      chapter: chapter,
    }).then((data) => {
      if (data) {
        alert("successfully added new Topics");
        window.location.reload();
      }
    });
  };

  //Upadate Data
  const updateTopics = async (id) => {
    console.log(id, title);
    const data = doc(db, "topics", id);

    await updateDoc(data, {
      title: title,
      name: name,
      subject: subject,
      description: description,
      chapter: chapter,
    })
      .then(() => {
        alert("successfully update");
        navigate("/home");
      })
      .catch((error) => {
        alert(error, "wrong");
      });
  };

  //Delete

  const handleDelete = async (id) => {
    console.log(id);
    const data = doc(db, "topics", id);
    await deleteDoc(data).then(() => {
      alert("deleted successfully");
      window.location.reload();
    });
  };

  return {
    topics,
    setTitle,
    setName,
    setSubject,
    setDescription,
    addNewTopics,
    updateTopics,
    handleDelete,
    topicsCollectionRef,
    setChapter,
  };
};

export default useFirebase;
