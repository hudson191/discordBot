module.exports = {
  name: `redy`,
  once: true,
  async execute(client) {
    console.log(`Ready! Logged in as ${client.user.tag}`);
  }
}