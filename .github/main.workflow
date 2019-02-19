workflow "New workflow" {
  on = "pull_request"
  resolves = ["Node.js NPM Install"]
}

action "Node.js NPM Install" {
  uses = "italoacasas/action-nodejs-audit@1.0.3"
}
