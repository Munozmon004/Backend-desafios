import usersController from "../controllers/users.controllers.js";
import businessController from "../controllers/business.controllers.js";
import ordersController from "../controllers/orders.controllers.js";

const router = (app) => {
    app.use("/users", usersController);
    app.use("/business", businessController);
    app.use("/orders", ordersController);
};

export default router;
