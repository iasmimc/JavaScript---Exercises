const canDrive = (age, hasLicense) => {
  if (age >= 18 && hasLicense) {
    return true;
  } else {
    return false;
  }
};
console.log(
  "Can a person aged 18 and without a license drive?",
  canDrive(18, false)
);
console.log(
  "Can a person under 18 and without a license drive?",
  canDrive(17, false)
);
console.log(
  "Can an 18-year-old with a driver's license drive?",
  canDrive(18, true)
);
