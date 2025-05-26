const ram = {
    name: "Ram",
    address: {
      city: "Ayodhya"
    }
  };
  
  const shallow = { ...ram }; // spread operator → shallow copy
  
  shallow.address.city = "Delhi";
  
  console.log(ram.address.city); // ❌ "Delhi" — original affected

  //Deep 

  const ram2 = {
    name: "Ram",
    address: {
      city: "Ayodhya"
    }
  };
  
  const deep = JSON.parse(JSON.stringify(ram2));
  
  deep.address.city = "Delhi";
  
  console.log(ram2.address.city); // ✅ "Ayodhya"
  console.log(deep.address.city); // ✅ "Delhi"
  