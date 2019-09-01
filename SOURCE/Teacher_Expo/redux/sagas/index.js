import { 
    watchLogin
} from './NetworkSaga'


export default function* rootSaga() {
    yield watchLogin
}