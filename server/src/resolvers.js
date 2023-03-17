const resolvers = {
    Query: {
        // returns an array of TRacks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, {dataSources}) => {
            dataSources.trackAPI.getTracksForHome();
        },
    },
    Track: {
        author: ({ authorId }, _, {dataSources}) => {
            return dataSources.trackAPI.getAuthor(authorId);
        },
    },
};

module.exports = resolvers;