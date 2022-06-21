const { initializeApp } = require("firebase/app");
const {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  deleteDoc,
} = require("firebase/firestore/lite");

const firebaseConfig = {
  apiKey: "AIzaSyAZYGs9q0iWOyWtApNUi-lJk3OtdUfKXp0",
  authDomain: "firstdatabase-6ec6e.firebaseapp.com",
  projectId: "firstdatabase-6ec6e",
  storageBucket: "firstdatabase-6ec6e.appspot.com",
  messagingSenderId: "358359175618",
  appId: "1:358359175618:web:a19ad540f31a759bf7c65b",
  measurementId: "G-DVL1JNQXRF",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

async function save(tableName, id, data) {
  if (id) {
    const referenceEntity = await setDoc(doc(db, tableName, id), data);
    const savedData = {
      ...data,
      id: id,
    };
    return savedData;
  } else {
    const referenceEntity = await addDoc(collection(db, tableName), data);
    const savedData = {
      ...data,
      id: referenceEntity.id,
    };
    return savedData;
  }
}

async function get(tableName) {
  const tableRef = collection(db, tableName);

  const q = query(tableRef);

  const querySnapshot = await getDocs(q);

  const list = [];

  querySnapshot.forEach((doc) => {
    const data = {
      ...doc.data(),
      id: doc.id,
    };
    list.push(data);
  });
  return list;
}

async function getByID(tableName, id) {
  const docRef = doc(db, tableName, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return new Error("Not found!");
  }
}

async function remove(tableName, id) {
  const data = await deleteDoc(doc(db, tableName, id));
  return {
    message: `${id} deleted`,
  };
}

module.exports = { save, get, getByID, remove };
