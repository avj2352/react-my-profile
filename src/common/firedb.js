import { profileRef, storageObj } from './../config/firebaseConfig';
import { Promise } from 'firebase';

// Get Profile data
export function getProfileData(){
    let query = profileRef;
    const promise = new Promise((resolve,reject)=>{
        function success(data) {
            // console.log('Success retrieving from firebase', data);
            resolve(data.val());
        };
        function error(err) {
            // console.log('Error retrieving from firebase', err);
            reject(err);
        };
        return query.once('value',success,error);
    });
    return promise;
}//end:getProfileData

//Get Resume and Cover Letter

export function getProfileLocation(filename) {
    return storageObj.ref('/').child(filename).getDownloadURL();
}

