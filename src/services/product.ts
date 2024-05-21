import { Notebook } from "@/types/Notebook";
import { NoteListMasc } from "@/data/noteListMasc"
import { NoteListFem } from "@/data/noteListFem"
import { NoteListKids } from "@/data/noteListKids"

export const getNoteMasc = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListMasc)
        }, 1000)
    })

}

export const getNoteFem = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListFem)
        }, 1000)
    })
}

export const getNoteKids = async (): Promise<Notebook[]> => {
    return new Promise((resolve, reject) => {
        return setTimeout(() => {
            resolve(NoteListKids)
        }, 1000)
    })
}