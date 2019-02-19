workflow "New workflow" {
  resolves = ["Node.js Audit"]
  on = "pull_request"
}

action "Node.js Audit" {
  uses = "italoacasas/action-nodejs-audit@1.0.3"
}
