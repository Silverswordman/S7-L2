// costante salvata nella chiave
const localStorageKey = "name-memory";

// riferimento dell input
const nameArea = document.getElementById("name-area");

// riferimento dei bottoni

const saveButton = document.getElementById("save-button");
const deleteButton = document.getElementById("delete-button");

// funzione di salvataggio dell input text area

const save = function () {
  const content = nameArea.value;

  // content Area è una stringa quindi va bene così per salvarlo perchè local
  //   storage registra tutto in stringa
  localStorage.setItem(localStorageKey, content);
  const memory = localStorage.getItem(localStorageKey);
  if (memory) {
    nameArea.value = memory;
  } else {
    alert("inserisci nome");
  }
};

saveButton.addEventListener("click", save);
