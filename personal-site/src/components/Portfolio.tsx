import styles from "@/styles/Portfolio.module.css"

export default function Portfolio () {
    return (
      <main className={styles.main}>
        <div className={styles.project_container}>
            <div className={styles.project}>
                <h1>DnDeemo</h1>
                <h3>A DnD demo designed to help new Dungeons and Dragons players learn and understand 
                    the game.  How and why you roll for certain things, how stats and abilities work, spells, etc.
                </h3>
                <h3>React, Redux, Redux ToolKit, Express, PostgresQl, Typescript, Websocket, Cloudinary, Cypress, Jest, SuperTest, CSS</h3>
                <a>Check it out</a>
                <a href="https://github.com/cscheppele/DnDeemo">GitHub</a>
            </div>
            <div className={styles.project}>
                <h1>Rec Drills</h1>
                <h3>A video sharing platform aimed at helping Rec League sports captains practice with their team
                    by providing drills shared by coaches.
                </h3>
                <h3>This project is in its infancy and we are determing the necessary tech stack.</h3>
            </div>
            <div className={styles.project}>
                <h1>Personal Site</h1>
                <h3>This is the very site you are currently on!  I keep it listed here because it was one of the fist full stack 
                    sites/apps I built on my own and I learned a lot about Next.js and CSS styling.  It is also a site I continually 
                    come back to as I can in an attemp to update it as I learn and grow.
                </h3>
                <h3>Typescript, Prisma, Next.js, CSS</h3>
                <a href="https://github.com/cscheppele/PersonalSite">GitHub</a>
            </div>
        </div>
      </main>
    )
}