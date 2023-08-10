import User from '../Models/userSchema.js'

export const addToLikedMovies = async (req, res) => {
  try {
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          user._id,
          {
            likedMovies: [...user.likedMovies, data]
          },
          { new: true }
        );
      } else {
        return res.json({ warning : "Movies already Added"});
      }
    } else {
      await User.create({ email, likedMovies: [data] });
    }
    return res.json({ success : "Movie Added Successfully" });
  } catch (err) {
    return res.json({ error: "Error while adding movies", err });
  }
};


export const getLikedMovies = async (req, res) => {
  try {
    const { email } = req.params
    const user = await User.findOne({email})
    if (user) {
     return res.json({movies : user.likedMovies})
    } else {
         return res.json(error, "User with given email not found")
    }
  } catch (err) {
       return res.json({ error: "Error while getting movies", details: err });
  }
}


export const removeFromLikedMovies = async (req, res) => {
    try {
        const { email, movieId } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            const { likedMovies } = user;
            const movieIndex =  likedMovies.findIndex(({ id }) => id === movieId);
            if (!movieIndex) {
                return res.json({ msg: "Movie not found." });
            }
            likedMovies.splice(movieIndex, 1);
            await User.findByIdAndUpdate(
                user._id,
                {
                    likedMovies,
                },
                { new: true }
            );
            return res.json({ msg: "Movie successfully removed", movies : likedMovies });
        } else return res.json({ msg: "User with given email not found." });
    } catch (error) {
        return res.json({ msg: "Error removing movie to the liked list" });
    }

}
