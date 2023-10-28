import React from 'react'

import styles from './page.module.css'
function Page() {
  return (
    <main>
    <div class={styles.container}>
        <div class={styles.content}>
            <img src="https://i.pinimg.com/564x/c1/fa/5c/c1fa5cca73516df7d61eb8a0e54e73fd.jpg" alt=""/>
            
        </div>
        <div class={styles.dsc}>
            <div class={styles.a}>
                <img class={styles.icon} src="https://cdn-icons-png.flaticon.com/128/3018/3018442.png" alt=""/>
                <img class={styles.icon}src="https://cdn-icons-png.flaticon.com/128/3580/3580382.png" alt=""/>
                <img class={styles.icon}src="https://cdn-icons-png.flaticon.com/128/455/455691.png" alt=""/>
                <div class={styles.selector}>
                    <p>insta</p>
                    <img class={styles.icon} src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt=""/>
                </div>
                <button class={styles["save-btn"]}>Save</button>

            </div>
            <div class={styles.b}>
                <div class={styles.link}><a href="">comodoclothing.com</a></div>
                <div class={styles.tittle}>Cómoda Clothing</div>
                <div class={styles.description}>Photo by 
                    Vittorio Zunino Celotto
                     on Getty Images
                    |
                    Wear it responsibly! #ForResponsibleLiving</div>
                <div class={styles.profile}>
                    <img src="https://i.pinimg.com/75x75_RS/7c/ba/7d/7cba7de0db850ce15752a24a9892e16a.jpg" alt="" class={styles.dp}/>
                    <div class={styles.info}>
                        <p>Diesel</p>
                        <p>55.2k followers</p>
                    </div>
                    <button class={styles.follow}>Follow</button>
                </div>
                <div class={styles["comments-d"]}>
                    <p>Comments</p>
                    <img class={styles.icon} src="https://cdn-icons-png.flaticon.com/128/32/32195.png" alt=""/>
                </div>
                <div class={styles.comment}></div>
                <div class={styles.comment}></div>
                <div class={styles.comment}></div>
                <div class={styles.comment}></div>
                <div class={styles.comment}></div>
                


            </div>
            <div class={styles.c}>
                <div class={styles.reaction}>
                    <p>23 Comments</p>
                    <div class={styles.likes}>
                        <img src="https://s.pinimg.com/webapp/love-c31e0b8d.svg" alt=""/>
                        <p>63</p>
                    </div>
                    <div class={styles.like}>
                        <img src="https://s.pinimg.com/webapp/reactionHeartOutline-259c423c.svg" alt=""/>
                    </div>
                </div>
                <div class={styles.react}>
                    <div class={styles["profile-v"]}>
                        p
                    </div>
                    <div class={styles["comment-v"]}>
                        <input type="text" placeholder="Add a Comment"/>
                        <div class={styles.send}>
                            <img src="https://cdn-icons-png.flaticon.com/128/10322/10322482.png" alt="" class={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
</main>
  )
}

export default Page