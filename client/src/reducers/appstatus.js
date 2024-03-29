import {UPLOAD_FAILED, UPLOAD_SUCCESS, UPLOADING_FILE} from '../actions/upload'

export default function (state = "waiting", {type, payload}) {
	switch (type) {

		case UPLOAD_FAILED:
			return state = "failed"
        
        case UPLOAD_SUCCESS:
            return state = "uploadSucces"

        case UPLOADING_FILE:
            return state = "uploading"        

		default:
      return state
	}
}
