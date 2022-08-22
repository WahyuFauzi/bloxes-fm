import {setCurrentFolder, setPath} from '@/redux/currentSlice';
import FolderEntity from "@/entity/folder/FolderEntity";

export default class AppViewModel {
    constructor(store, folderAxios) {
        this.store = store;
        this.folderAxios = folderAxios
    }

    store;
    folderAxios

    onInit() {
        const initFolderId = localStorage.getItem('init_folder_id');

        if (initFolderId === undefined || initFolderId === null) {
            this.folderAxios.createFolder('init folder').then((data: any) => {
                const newCurrentFolder = new FolderEntity(
                    data.id,
                    data.folder_name,
                    data.nested_folders,
                    data.items,
                    data.shared_user,
                    data.created_at,
                    data.updated_at
                )
                localStorage.setItem('init_folder_id', data.id);
                this.store.dispatch(setPath([data.id]));
                this.store.dispatch(setCurrentFolder(newCurrentFolder));
            });
        } else {
            this.folderAxios.getFolder(initFolderId).then((data: any) => {
                const newCurrentFolder = new FolderEntity(
                    data.id,
                    data.folder_name,
                    data.nested_folders,
                    data.items,
                    data.shared_user,
                    data.created_at,
                    data.updated_at
                )
                this.store.dispatch(setPath([data.id]));
                this.store.dispatch(setCurrentFolder(newCurrentFolder));
            });
        }
    }
}
