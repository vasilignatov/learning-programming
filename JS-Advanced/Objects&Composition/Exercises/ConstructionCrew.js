function cosntruction(worker){
    if(worker.dizziness){
        worker.levelOfHydrated += worker.weight * worker.experience * 0.1;
        worker.dizziness = false;
    }
    return worker;
}
console.log(cosntruction(
    { weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));
console.log(cosntruction(
    { weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));
console.log(cosntruction(
    { weight: 95,
        experience: 3,
        levelOfHydrated: 0,
        dizziness: false }
));

