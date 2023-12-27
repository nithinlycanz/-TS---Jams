function registerUser(name: string, birthYear: number): void {
    const isAdult: boolean = checkAge(birthYear);
    if (isAdult) {
      console.log(`User Registration Success for ${name}!`);
    } else {
      console.log(`User Registration Failed for ${name}!`);
    }
  }
  
  function checkAge(birthYear: number): boolean {
    const age: number = new Date().getFullYear() - birthYear;
    return age >= 18;
  }
  
  registerUser("Nithin", 2002);

    export { }