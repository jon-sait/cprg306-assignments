import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export const getItems = async (userId) => {
  const q = query(collection(db, "users", userId, "items"));
  const querySnapshot = await getDocs(q);
  const items = [];
  querySnapshot.forEach((doc) => {
    items.push(doc.data());
  });
  return items;
};

export const addItem = async (userId, item) => {
  const newAddedItem = await addDoc(
    collection(db, "users", userId, "items"),
    item,
  );
  return newAddedItem.id;
};
