workflow "New workflow" {
  on = "push"
  resolves = ["Node.js Audit"]
}

action "Node.js Audit" {
  uses = "italoacasas/action-nodejs-audit@1.0.3"
}
