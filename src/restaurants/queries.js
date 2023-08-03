const getRestaurants = "SELECT * FROM restaurants";
const getRestaurantByID = "SELECT * FROM restaurants WHERE ID = $1";
const checkRestaurauntExists = "SELECT * FROM restaurants WHERE name = $1";
const updateRestaurantByID = "UPDATE restaurants SET name = $1 WHERE id = $2";
const addRestaurantToDB = "INSERT into restaurants (name, zipcode, rating, type) VALUES ($1, $2, $3, $4)";
const removeRestaurant = "DELETE FROM restaurants WHERE id = $1";
module.exports = {
    getRestaurants,
    getRestaurantByID,
    checkRestaurauntExists,
    addRestaurantToDB,
    removeRestaurant,
    updateRestaurantByID,
};