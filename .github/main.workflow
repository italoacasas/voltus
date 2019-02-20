workflow "New workflow" {
  resolves = ["Node.js Audit"]
  on = "push"
}

action "Node.js Audit" {
  uses = "italoacasas/action-nodejs-audit@1.0.0"
}
