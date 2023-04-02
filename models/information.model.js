module.exports = (sequelize, Sequelize) => {
    const Information = sequelize.define("information", {
        end_year: {
            //String to interger
            type: Sequelize.INTEGER 
        },
        intensity: {
            type: Sequelize.INTEGER
        },
        sector: {
            type: Sequelize.STRING
        },
        topic: {
            type: Sequelize.STRING
        },
        insight: {
            type: Sequelize.STRING
        },
        url: {
            type: Sequelize.STRING
        },
        region: {
            type: Sequelize.STRING
        },
        start_year: {
            type: Sequelize.INTEGER
        },
        impact: {
            type: Sequelize.INTEGER
        },
        added: {
            type: Sequelize.DATE
        },
        published: {
            type: Sequelize.DATE
        },
        country: {
            type: Sequelize.STRING
        },
        relevance: {
            type: Sequelize.INTEGER
        },
        pestle: {
            type: Sequelize.STRING
        },
        source: {
            type: Sequelize.STRING
        },
        title: {
            type: Sequelize.STRING
        },
        likelihood: {
            type: Sequelize.INTEGER
        }
    },{
        timestamps: false
    });

    return Information;
};
