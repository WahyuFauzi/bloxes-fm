import FileAxios from "@/logic/FileAxios";
import axios from "axios";
import FileEntity from "@/entity/file/FileEntity";
import CreateFileRequest from "@/entity/file/CreateFileRequest";
import UpdateFileRequest from "@/entity/file/UpdateFileRequest";
import DeletedResponse from "@/entity/DeletedResponse";

jest.mock("axios");

/** example file response
 * {
 *     "code": 200,
 *     "status": "OK",
 *     "data": {
 *         "id": "81a1bc92-f3f5-4207-b6bb-bcee51637a90",
 *         "file_name": "dummy 1",
 *         "file_total_size": 80000,
 *         "created_at": "Tue Aug 23 16:23:39 CST 2022",
 *         "updated_at": "Tue Aug 23 16:23:39 CST 2022"
 *     }
 * }
 */

/** example deleted file response
 * {
 *     "code": 200,
 *     "status": "OK",
 *     "data": "file with id: 81a1bc92-f3f5-4207-b6bb-bcee51637a90 is deleted"
 * }
 */

const fileId = "id"

const dataResponse = {
    id: fileId,
    file_name: 'jotaro kujo',
    file_total_size: 69420,
    created_at: "24/12/1999",
    updated_at: "24/12/1999"
}

const deletedFileDataResponse: DeletedResponse = {
    deleted_text: `file with id: ${fileId} is deleted`
}

const fileEntity: FileEntity = {
    id: fileId,
    file_name: 'jotaro kujo',
    file_total_size: 69420,
    created_at: "24/12/1999",
    updated_at: "24/12/1999"
}

const createFileRequest: CreateFileRequest = {
    file_name: 'jotaro kujo',
    file_total_size: 69420,
}

const updateFileRequest: UpdateFileRequest = {
    file_name: "joseph joestar"
}

describe('FileAxios Test ', () => {
    it('post file', async () => {
        jest.spyOn(axios, 'post').mockImplementation(() => Promise.resolve({
            data: {
                data: dataResponse
            }
        }))
        const fileCreated = await FileAxios.postFile(createFileRequest)
        expect(fileCreated).toEqual(fileEntity)
    });

    it('get file', async () => {
        jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
            data: {
                data: dataResponse
            }

        }))
        const getFile = await FileAxios.getFile(fileId)
        expect(getFile).toEqual(fileEntity)
    });

    it('update file', async () => {
        jest.spyOn(axios, 'put').mockImplementation(() => Promise.resolve({
            data: {
                data: dataResponse
            }
        }))
        const updatedFile = await FileAxios.updateFile(fileId, updateFileRequest)
        expect(updatedFile).toEqual(fileEntity)
    });

    it('delete file', async () => {
        jest.spyOn(axios, 'delete').mockImplementation(() => Promise.resolve({
           data: {
               data: `file with id: ${fileId} is deleted`
           }
        }))
        const deletedFile: any = await FileAxios.deleteFile(fileId)
        expect(deletedFile.deleted_text).toEqual(deletedFileDataResponse.deleted_text)
    });
})