import {UPLOAD_FAILED, UPDATE_UPLOADS} from '../actions/upload'

export default function (state = {}, {type, payload}) {
	switch (type) {

		case UPLOAD_FAILED:
		return {error: payload}
        
        case UPDATE_UPLOADS:
            return payload.reduce((uploads, upload) => {
                uploads[upload.id] = upload
                return uploads
            }, {})

		default:
      return state
	}
}
