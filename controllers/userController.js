module.exports = {
    register: async (req, res, next) => {
        console.log('Register called')
    },

    login: async (req, res, next) => {
        console.log('Login called')
    },

    guarded: async (req, res, next) => {
        console.log('Guarded called')
    }
}