const currentDate = new Date();
const day = String(currentDate.getDate()).padStart(2, "0");
const month = String(currentDate.getMonth() + 1).padStart(2, "0");
const year = currentDate.getFullYear();

// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

console.log(`${month}-${day}-${year}, ${month}/${day}/${year} or ${day}-${month}-${year}, ${day}/${month}/${year}`);