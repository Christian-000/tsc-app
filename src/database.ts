import mongoose from 'mongoose';
import {mongodb} from './keys'


mongoose.connect(mongodb.URI)
.then(db => console.log('db is connect'))
.catch(err => console.log(err))
