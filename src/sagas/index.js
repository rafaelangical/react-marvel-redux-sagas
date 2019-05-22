import { put, takeLatest, takeEvery,  all, call } from 'redux-saga/effects';

function* fetchCharacters() {

  let hash = '72e5ed53d1398abb831c3ceec263f18b';
  
  let api_key = process.env.REACT_APP_API_KEY
  
  let ts = 'thesoer';

  try{
    yield put({ type: 'FETCHING_CHARACTERS'});
    const resp = yield call(fetch, `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${api_key}&hash=${hash}&limit=10&offset=1000`);
    const data = yield resp.json();
    yield put({type: 'CHARACTERS_RECEIVED', characters: data.data.results });
  }
  catch(e) {
    console.log(e)
    yield put({ type: 'CHARACTERS_FAILED'});
  }

}

function* fetchCharacterById() {
  let hash = '72e5ed53d1398abb831c3ceec263f18b';
  
  let api_key = process.env.REACT_APP_API_KEY
  
  let ts = 'thesoer';
 try{

   yield put({ type: 'FETCHING_CHARACTER_BY_ID'});
   const resp = yield call(fetch, `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${api_key}&hash=${hash}&limit=10&offset=1000`);
   const data = yield resp.json();
   yield put({type: 'CHARACTER_BY_ID_RECEIVED', character: data.data });
 
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