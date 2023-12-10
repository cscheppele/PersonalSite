import styles from "@/styles/CurriculumVitae.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function CurriculumVitae (/*{ setSelectedComponent }: { setSelectedComponent: Dispatch<SetStateAction<PageComponent>> }*/) {
    return (
        <div className={styles.main}>
            <div className={styles.hire_me}>
                Want to hire me and need somthing for your files? Check out my CV
            </div>
        </div>
    )
}