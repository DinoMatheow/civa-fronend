export const getListBus = async () => {
     const response = await fetch(`http://localhost:3000/bus`);



     console.log(response);
}