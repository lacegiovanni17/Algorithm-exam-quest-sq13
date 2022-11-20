function findNonUnique(arr) {
  const seen = [];
  const duplicates = [];

  for (const number of arr) {
    if (seen.includes(number)) {
      if (!duplicates.includes(number)) {
        duplicates.push(number);
      }
    }

    seen.push(number);
  }

  return duplicates;
}

export default findNonUnique;
