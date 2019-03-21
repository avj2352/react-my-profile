import { profileRef, storageObj, galleryRef } from './../config/firebaseConfig';
import { Promise } from 'firebase';

// Private function to fetchData - refactored
function _fetchData(query) {
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
}//end:_fetchData

// Get Profile data
export function getProfileData() {
    return _fetchData(profileRef);
}//end:getProfileData

// Get Gallery Data
export function getGalleryData() {
    return _fetchData(galleryRef);
}

//Get Resume and Cover Letter

export function getProfileLocation(filename) {
    return storageObj.ref('/').child(filename).getDownloadURL();
}

