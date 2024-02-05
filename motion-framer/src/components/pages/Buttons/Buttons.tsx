import styles from "./Buttons.module.scss";

const Buttons = () => {
    return (
        <>
            <section className={styles.home}>
                <button>
                    <span>
                        <span>Click Me</span>
                    </span>
                    <span>
                        <span>Click Me</span>
                    </span>
                </button>
                <button>
                    Hover Me
                </button>
            </section>
        </>
    )
}

export default Buttons
