import { Application } from "probot"
import { assignReview, fixTitle } from "./reviews"

export = (app: Application): void => {
    app.on("pull_request.opened", fixTitle)
    app.on("pull_request.opened", assignReview)
    app.on("pull_request.ready_for_review", assignReview)
}
