export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';

export const fetchTracksRequest = () => ({
  type: FETCH_TRACKS_REQUEST,
});

export const fetchTracksSuccess = (tracks) => ({
  type: FETCH_TRACKS_SUCCESS,
  payload: tracks,
});

export const fetchTracksFailure = (error) => ({
  type: FETCH_TRACKS_FAILURE,
  payload: error,
});

export const fetchTracks = () => {
  return (dispatch) => {
    dispatch(fetchTracksRequest());
    fetch('https://api.music.com/tracks')
      .then((response) => response.json())
      .then((data) => {
        const tracks = data.tracks;
        dispatch(fetchTracksSuccess(tracks));
      })
      .catch((error) => {
        dispatch(fetchTracksFailure(error.message));
      });
  };
};
