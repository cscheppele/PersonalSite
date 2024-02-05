import styles from "@/styles/CurriculumVitae.module.css";
import Image from 'next/image';
// import cvPreview from '@/public//cv-preview.png'


export default function CurriculumVitae () {
    //placeholder for CV data from prisma
    const cvData = null;

    const handleCVClick = () => {
        if (cvData) {
            //handle click event (show blown up version of preview with a downloadable option)
        }
    }
    return (
        <div className={styles.main}>
            <div className={styles.hire_me}>
                Want to hire me and need somthing for your files? Check out my CV
            </div>
            <div onClick={handleCVClick}>
                {/* <Image src={cvPreview} alt="Curriculum Vitae Preview" className={styles.cv_preview} /> */}
            </div>
        </div>
    )
}