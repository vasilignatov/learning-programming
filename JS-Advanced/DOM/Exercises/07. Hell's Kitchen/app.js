function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const input = document.querySelector('#inputs>textarea');
   const bestRestaurantP = document.querySelector('#bestRestaurant>p');
   const bestRestaurantWorkers = document.querySelector('#workers>p');

   function onClick () {
      let arr = JSON.parse(input.value);

      let restaurants = {}

      arr.forEach(line => {   
         let tokens = line.split(' - ');
         let name = tokens[0]; 
         const workersArr = tokens[1].split(', ');
         let workers = [];
         
         for(let worker of workersArr) {
            let workerToken = worker.split(' ');
            workers.push({
               name: workerToken[0],
               salary: Number(workerToken[1])
            })
         }

         if (restaurants[name]){
            workers = worker.concat(restaurants[name].workers);
         }
         
         workers.sort((worker1, worker2) => worker2.salary - worker1.salary)
         let bestSalary = workers[0].salary;
         let averageSalary = workers.reduce((sum, worker) => sum + worker.salary, 0) / workers.length;

         restaurants[name] = {
            workers,
            averageSalary,
            bestSalary
         }
      });




      let bestRestaurantSalary = 0;
      let bestRestaurant;

      for(const name in restaurants){
         if(restaurants[name].averageSalary > bestRestaurantSalary){
            bestRestaurant = {
               name,
               workers: restaurants[name].workers,
               bestSalary: restaurants[name].bestSalary,
               averageSalary: restaurants[name].averageSalary
            }
            bestRestaurantSalary = restaurants[name].averageSalary;
         }
      }

      bestRestaurantP.textContent = `Name: ${(bestRestaurant.name)} 
      Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;

      let workersResult = [];

      bestRestaurant.workers.forEach( worker => workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`))

      bestRestaurantWorkers.textContent = workersResult.join(' ')
   }
}