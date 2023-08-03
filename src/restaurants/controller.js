const pool = require('../../db');
const queries = require('./queries');


const getRestaurants = (req, res) => {
    pool.query(queries.getRestaurants, (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};
const getRestaurantByID = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getRestaurantByID, [id], (err, results) => {
        if (err) {
            throw err;
        }
        res.status(200).json(results.rows);
    });
};

const addRestaurant = (req, res) => {
    const { name, zipcode, rating, type } = req.body;
    // check if restauraunt in db
    pool.query(queries.checkRestaurauntExists, [name], (error, results) => {
        if (results.rows.length) {
            res.send("You already added this restaurant");
        } else {
            pool.query(queries.addRestaurantToDB, [name, zipcode, rating, type], (error, results) => {
                if (error) throw error; 
                res.status(201).send("Restaurant added")
            });
        }
    });

    
}

const deleteRestaurantByID = (req, res) => {
    const id = parseInt(req.params.id);
    // check if restauraunt in d
    pool.query(queries.getRestaurantByID, [id], (error, results) => {
        if (!results.rows.length) { 
            res.send("No restaurant found in DB with that id");
        } else {
            pool.query(queries.removeRestaurant, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Removed restaurant")
            });
        }
    });
}

const updateRestaurantByID = (req, res) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    
    pool.query(queries.getRestaurantByID, [id], (error, results) => {
        if (!results.rows.length) {
            res.send("No restaurant found.");
        } else {
            pool.query(queries.updateRestaurantByID, [name, id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Restaurant updated.")
            });
            
        }
    });
        

}



module.exports = {
    getRestaurants,
    getRestaurantByID,
    addRestaurant,
    deleteRestaurantByID,
    updateRestaurantByID,
};