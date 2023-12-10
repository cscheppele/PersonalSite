import styles from "@/styles/Politics.module.css"
import { Dispatch, SetStateAction } from 'react'
import { PageComponent } from '@/types'

export default function Politics (/*{setSelectedComponent}:{setSelectedComponent: Dispatch<SetStateAction<PageComponent>>}*/) {
    return (
      <main className={styles.main}>
        <h1>Everything should be illegal, including government</h1>
        <h4>Real stances will come in the future and be updated frequently, as people opinions should grow and change as 
            we continue to learn new information about ourselves and the world around us.
        </h4>
      </main>
    )
}