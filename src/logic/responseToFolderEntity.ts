import FolderEntity from "@/entity/folder/FolderEntity";

export default function (data: any): FolderEntity {
    return {
        id: data.id,
        folder_name: data.folder_name,
        nested_folders: data.nested_folders,
        items: data.items,
        shared_user: data.shared_user,
        created_at: data.created_at,
        updated_at: data.updated_at
    }
}