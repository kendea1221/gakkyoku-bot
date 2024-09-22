module.exports = {
    format: (str, ...args) => {
      for (const [i, arg] of args.entries()) {
        const regExp = new RegExp(`\\{${i}\\}`, 'g')
        str = str.replace(regExp, arg)
      }
      return str
    }
  }