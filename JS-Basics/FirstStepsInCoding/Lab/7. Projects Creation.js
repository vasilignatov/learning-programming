function howManyHours(name, projects) {
    let time = 3;
    let fulltime = time * Number(projects);
    let output = `The architect ${name} will need ${fulltime} hours to complete ${projects} project/s.`;
    console.log(output);
}
howManyHours('George', 4)