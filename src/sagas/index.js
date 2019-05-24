import { put, takeLatest, takeEvery,  all, call } from 'redux-saga/effects';

//fetch  all characters

function* fetchCharacters() {

  let hash = '72e5ed53d1398abb831c3ceec263f18b';
  
  let api_key = process.env.REACT_APP_API_KEY
  
  let ts = 'thesoer';

  try{
    yield put({ type: 'FETCHING_CHARACTERS'});
    const resp = yield call(fetch, `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${api_key}&hash=${hash}&limit=90&offset=0`);
    const data = yield resp.json();
    yield put({type: 'CHARACTERS_RECEIVED', characters: data.data.results });
  }
  catch(e) {
    console.log(e)
    yield put({ type: 'GET_CHARACTERS_FAILED'});
  }

}

//fetch character by id

function* fetchCharacterById(id) {

  let hash = '72e5ed53d1398abb831c3ceec263f18b';
  
  let api_key = process.env.REACT_APP_API_KEY
  
  let ts = 'thesoer';

  try{
    yield put({ type: 'FETCHING_CHARACTER_BY_ID'});
    console.log('id::::');
    console.log(id);
    console.log(id.id)
    const resp = yield call(fetch, `https://gateway.marvel.com/v1/public/characters/1017101?apikey=${api_key}`);
    const data = yield resp.json();
    yield put({type: 'CHARACTER_BY_ID_RECEIVED', characterById: data });
  }
 catch(e){
   yield put({ type: 'GET_CHARACTER_BY_ID_FAILED'});
   console.log(e);
 }
}

function* actionWatcher() {
  yield takeLatest ('GET_CHARACTERS', fetchCharacters);
  yield takeLatest ('GET_CHARACTER_BY_ID', fetchCharacterById);
  //yield takeLatest('GET_CHARACTER_BY_ID', fetchCharacterById)
}

export default function* rootSaga() {
   yield all([actionWatcher(), ]);
}