const resolvers = {
    Query: {
        // returns an array of TRacks that will be used to populate
        // the homepage grid of our web client
        tracksForHome: (_, __, { dataSources }) => {
            //console.log( dataSources );
            return dataSources.TrackAPI.getTracksForHome();
          },
    },
    Track: {
        author: ({ authorId }, _, {dataSources}) => {
            return dataSources.TrackAPI.getAuthor(authorId);
        },
    },
};

module.exports = resolvers;