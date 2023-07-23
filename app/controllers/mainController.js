const mainController = {
    
    home: async (req, res) => {
        let title = 'WorldChef'
        res.render('home', {
            title
        })
    }
}

module.exports = mainController