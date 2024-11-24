import ejemplo from "./ejemplo.routes.js";
import gfnc from "./gfnc.routes.js";
import { Router } from "express";

    const indexRoutes = Router()

    indexRoutes.use('/ejemplo', ejemplo)

    indexRoutes.use('/gfnc', gfnc)

    export default indexRoutes
