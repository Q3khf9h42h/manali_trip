const blogs = [];
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');


function getColdDrinks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Cold Drinks');
    }, 1000);
  });
}
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke  ]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');


async function createPost() {
  await create1stBlog();
  await create2ndBlog();
}

async function deletePost() {
  await deleteBlog();
}

async function main() {
    const preMovie = async () => {

        const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
          setTimeout(() => reject('ticket'), 3000);
        });
      
        let ticket;
          try {
            ticket = await person3PromiseToShowTicketWhenWifeArrives;
        } catch(e) {
            ticket = 'sad face';
        }
        try {
            await deletePost();
            console.log('Updated Posts:', blogs);
        
            const coldDrinks = await getColdDrinks();
            console.log('Cold Drinks:', coldDrinks);
          } catch (error) {
            console.log('Error:', error);
          }
        }
        
        
      
        return ticket;
        
      };
      
      preMovie().then((t) => console.log(`person4 shows ${t}`));
      
      
      
  
main();
